import random
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import GPT2LMHeadModel, GPT2Tokenizer
from fastapi.middleware.cors import CORSMiddleware
import torch

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

@app.post("/api/generate/")
async def generate_response(journal_entry: JournalEntry):
    try:
        # Stronger soft prompt for empathy and relevance
        soft_prompt = (
            "You are a kind and understanding friend. "
            "Acknowledge their feelings and respond with empathy. "
            "Address specific emotions they mentioned. "
            "Provide encouragement and remind them of their strength. "
            "Do NOT change the topic or assume they are feeling better."
        )
        input_text = soft_prompt + " " + journal_entry.entry

        # Tokenize input with truncation
        input_ids = tokenizer.encode(
            input_text, 
            return_tensors="pt", 
            truncation=True,  
            max_length=512  
        )

        # Generate response with improved settings
        with torch.no_grad():
            output = model.generate(
                input_ids,
                max_length=min(400, input_ids.shape[-1] + 200),  # Ensure longer responses
                temperature=0.7,  
                top_p=0.9,  
                repetition_penalty=1.3,  # Stronger penalty for repeating words
                no_repeat_ngram_size=4,  # Prevent repetitive phrases
                num_beams=5,  # Use beam search for coherence
                num_return_sequences=1,  # Ensure the best response is selected
                do_sample=False,  # Keep responses logical
                eos_token_id=tokenizer.eos_token_id  # Stop at a natural point
            )

        response_text = tokenizer.decode(output[:, input_ids.shape[-1]:][0], skip_special_tokens=True)
        return {"response": response_text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Side quests data (dummy example, replace with real data)
side_quests = [
    "Help an old woman cross the street.",
    "Plant a tree in your community.",
    "Write a letter to your future self.",
    "Try cooking a meal you've never made before."
]

@app.get("/")
async def read_root():
    return {"message": "Hello FastAPI!"}

@app.get("/journal")
async def get_journal():
    return {"entry": "Sample journal entry", "response": "Sample journal response from AI"}

@app.get("/quest")
async def get_quest():
    quest = random.choice(side_quests)
    return {"quest": quest}
