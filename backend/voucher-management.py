import pandas as pd
from flask import Flask, jsonify, request
from flask_login import login_required

app = Flask(__name__)

# In-memory storage for vouchers
vouchers = pd.DataFrame(columns=['Voucher ID', 'Company', 'Voucher Type', 'Value', 'Expiry Date'])

# Add new voucher
@app.route('/add-voucher', methods=['POST'])
@login_required
def add_voucher():
    data = request.json
    new_voucher = {
        'Voucher ID': data['voucher_id'],
        'Company': data['company'],
        'Voucher Type': data['voucher_type'],
        'Value': data['value'],
        'Expiry Date': data['expiry_date']
    }
    vouchers = vouchers.append(new_voucher, ignore_index=True)
    return jsonify({'message': 'Voucher added successfully!'}), 201

# Remove voucher by Voucher ID
@app.route('/remove-voucher/<voucher_id>', methods=['DELETE'])
@login_required
def remove_voucher(voucher_id):
    global vouchers
    vouchers = vouchers[vouchers['Voucher ID'] != voucher_id]
    return jsonify({'message': 'Voucher removed successfully!'}), 200

# Get all vouchers (for searching/filtering)
@app.route('/vouchers', methods=['GET'])
def get_vouchers():
    return jsonify(vouchers.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
