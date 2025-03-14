import csv,json

filenames = ['train.csv','valid.csv','test.csv']
output_file = 'journal_data.json'
data = []

for file in filenames:
    with open(file,newline='',encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            entry = row.get("prompt","").strip()
            response = row.get("utterance","").strip()
            if entry and response:
                data.append({"entry":entry,"response":response})
                
with open(output_file,'w',encoding='utf-8') as jsonfile:
    json.dump(data,jsonfile,ensure_ascii=False,indent=2)
    
print(f"Converted as data from {len(filenames)} files into {output_file} with {len(data)} entries")
