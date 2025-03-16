import pandas as pd
from flask import Flask, jsonify, request

app = Flask(__name__)

# Define a function to extract data from the Excel file
def extract_data_from_excel(file_path):
    # Read the Excel file
    df = pd.read_excel(file_path)

    # Assuming the columns are named "Company Name", "Contact Info", and "Voucher Code"
    data = []
    
    for _, row in df.iterrows():
        company_name = row.get('Company Name')
        contact_info = row.get('Contact Info')
        voucher_code = row.get('Voucher Code')
        
        # Collect the data if all required fields are available
        if company_name and contact_info and voucher_code:
            data.append({
                'company_name': company_name,
                'contact_info': contact_info,
                'voucher_code': voucher_code
            })
    
    return data

# API endpoint to get data from the uploaded Excel file
@app.route('/extract-data', methods=['POST'])
def extract_data():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    # Save the uploaded file
    file_path = 'uploaded_file.xlsx'
    file.save(file_path)

    # Extract data from the Excel file
    data = extract_data_from_excel(file_path)

    # Return the data as a JSON response
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
