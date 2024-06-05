from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load your machine learning model
model = joblib.load('Laptop_Pricing_model_multiple_LR_complete.pkl')

# Define a route for your prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Get the array from the request
        data = request.json
        generated_array = data.get('array')

        # Here, you can do whatever you want with the received input data
        # For example, you can preprocess the data, perform additional processing, etc.

        # For demonstration purposes, let's return a response indicating successful receipt of input data
        return 'Input data received successfully.'
    else:
        # Return an error response for unsupported methods
        return jsonify({'error': 'Method not allowed'}), 405

if __name__ == '__main__':
    app.run(debug=True)
