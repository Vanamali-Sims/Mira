from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

# Create FastAPI router instead of full app
router = APIRouter()

# Load the fine-tuned GPT-2 model and tokenizer
MODEL_PATH = "ml/model"  # Ensure your model is inside 'ml/model/'
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained(MODEL_PATH)
model.eval()

class JournalEntry(BaseModel):
    entry: str

@router.post("/generate/")
async def generate_response(journal_entry: JournalEntry):
    try:
        soft_prompt = (
            "You are a kind and understanding friend. "
            "Acknowledge their feelings and respond with empathy. "
            "Address specific emotions they mentioned. "
            "Provide encouragement and remind them of their strength. "
            "Do NOT change the topic or assume they are feeling better."
        )
        input_text = soft_prompt + " " + journal_entry.entry

        input_ids = tokenizer.encode(
            input_text, 
            return_tensors="pt", 
            truncation=True,  
            max_length=512  
        )

        with torch.no_grad():
            output = model.generate(
                input_ids,
                max_length=min(400, input_ids.shape[-1] + 200),
                temperature=0.7,  
                top_p=0.9,  
                repetition_penalty=1.3,  
                no_repeat_ngram_size=4,  
                num_beams=5,  
                num_return_sequences=1,  
                do_sample=False,  
                eos_token_id=tokenizer.eos_token_id  
            )

        response_text = tokenizer.decode(output[:, input_ids.shape[-1]:][0], skip_special_tokens=True)
        return {"response": response_text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ✅ Make sure this line exists at the bottom!
__all__ = ["router"]
