import random
from fastapi import FastAPI
from data.sidequests import side_quests

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello FastAPI!"}

@app.get("/journal")
async def get_journal():
    return{"entry":"Sample journal entry","response":"Sample journal response from AI"}

@app.get("/quest")
async def get_quest():
    quest = random.choice(side_quests)
    return{"quest":quest}