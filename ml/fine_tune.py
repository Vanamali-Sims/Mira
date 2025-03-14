from transformers import GPT2LMHeadModel, GPT2Tokenizer

def load_model(model_name: str = 'gpt2'):
    print("Loading model and tokenizer...")
    tokenizer = GPT2Tokenizer.from_pretrained(model_name)
    model = GPT2LMHeadModel.from_pretrained(model_name)
    return tokenizer, model

def generate_text(prompt:str , max_length: int =50):
    tokenizer,model = load_model()
    inputs = tokenizer.encode(prompt, return_tensors='pt')
    outputs = model.generate(inputs, max_length=max_length, do_sample=True)
    generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return generated_text 
if __name__ == "__main__":
    sample_prompt = "I feel a bit down today, but"
    result = generate_text(sample_prompt)
    print("Generated text:\n")
    print(result)