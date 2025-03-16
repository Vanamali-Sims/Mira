import random
from fastapi import Depends, FastAPI, HTTPException
from transformers import pipeline
from pydantic import BaseModel
from transformers import GPT2LMHeadModel, GPT2Tokenizer
from fastapi.middleware.cors import CORSMiddleware
import torch
from fastapi.responses import FileResponse
from database import SessionLocal, Event, init_db
from schemas import EventCreate, EventResponse
from sqlalchemy.orm import Session
from datetime import datetime

# Initialize FastAPI
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Adjust if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load the fine-tuned GPT-2 model and tokenizer
MODEL_PATH = r'C:\Users\isvan\OneDrive\Documents\Van-Cave\Hackathons\Mira\ml\model'
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained(MODEL_PATH)
model.eval()

# Define Journal Entry Schema
class JournalEntry(BaseModel):
    entry: str

class SideQuestRequest(BaseModel):
    age: int
    mbti: str
    keyword: str
    is_international_student: bool


@app.post("/api/personalized-quest/")
async def generate_side_quest(data: SideQuestRequest):
    # In-context priming examples
    soft_prompt = (
        "You are an assistant generating short and quirky daily wellness quests. "
        "Based on the user's age, MBTI type, international student status, and a symbolic keyword, "
        "you suggest one fun, simple task that could brighten their day.\n\n"

        "Examples:\n"
        "User: 25-year-old ENFP, international student, keyword: Rain\n"
        "Quest: Take a relaxing 15-minute walk under the drizzle while listening to lo-fi beats.\n\n"
        "User: 30-year-old ISTJ, not an international student, keyword: Earth\n"
        "Quest: Water your houseplants and text a friend about your favorite nature spot.\n\n"
        "User: 19-year-old INFP, international student, keyword: Valley\n"
        "Quest: Sketch a peaceful valley scene and share it with someone close.\n\n"

        # 👇 Your actual dynamic user input comes here
        f"User: {data.age}-year-old {data.mbti}, "
        f"{'international student' if data.is_international_student else 'not an international student'}, "
        f"keyword: {data.keyword}\n"
        "Quest:"
    )

    try:
        output = small_generator(
            soft_prompt,
            num_return_sequences=1,
            temperature=0.85,
            top_p=0.9
        )[0]['generated_text']

        # Post-processing to stop "leakage"
        quest = output.replace(soft_prompt, "").strip().strip('"').strip()

        if "User:" in quest:
            quest = quest.split("User:")[0].strip()
        if len(quest) > 150:
            quest = quest[:150].rsplit(".", 1)[0] + "."

        return {"quest": quest}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Generation error: {str(e)}")

# Side quests data (dummy example, replace with real data)
side_quests = [
    "Help an old woman cross the street.",
    "Plant a tree in your community.",
    "Write a letter to your future self.",
    "Try cooking a meal you've never made before."
]


small_generator = pipeline(
    "text-generation",
    model="distilgpt2",
    max_new_tokens=30,     # Make it default across all calls
    truncation=True
)

#Database code
init_db()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        


@app.get("/")
async def read_root():
    return {"message": "Let's get you to meet mira!"}

@app.get("/journal")
async def get_journal():
    return {"entry": "Sample journal entry", "response": "Sample journal response from AI"}

@app.get("/quest")
async def get_quest():
    quest = random.choice(side_quests)
    return {"quest": quest}

@app.post("/api/personalized-quest/")
async def generate_side_quest(data: SideQuestRequest):
    # Compose soft prompt
    soft_prompt = (
        "You are a helpful wellness coach. ONLY suggest a short, mundane and realistic daily quest to improve wellbeing. "
        "The quest must be:\n"
        "- Simple\n"
        "- Take less than 30 minutes\n"
        "- Realistic and doable today\n"
        "- One single actionable task\n"
        "- No follow-up explanations, no extra advice.\n\n"
        "DO NOT explain the quest. DO NOT add 'Example' or other commentary. ONLY output the quest.\n\n"
        f"User Profile:\n- Age: {data.age}\n- MBTI: {data.mbti}\n- Keyword: {data.keyword}\n"
        f"- International Student: {'Yes' if data.is_international_student else 'No'}\n\n"
        "Side Quest:"
    )




    # Generate quest
    try:
        output = small_generator(
            soft_prompt,
            max_length=60,
            num_return_sequences=1,
            temperature=0.6,
            top_p=0.9,
            repetetion_penalty=1.2
        )[0]['generated_text']

        # Extract quest text
        quest = output.replace(soft_prompt, "").strip()
        return {"quest": quest}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Generation error: {str(e)}")

@app.post("/create_event/", response_model=EventResponse)
def create_event(event: EventCreate, db: Session = Depends(get_db)):
    db_event = Event(
        event_name=event.event_name,
        organized_by=event.organized_by,
        date=event.date,
        location=event.location,
        time=event.time,
        allowed_gender=event.allowed_gender
    )
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event
