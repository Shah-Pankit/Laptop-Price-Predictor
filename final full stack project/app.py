import warnings
from sklearn.exceptions import InconsistentVersionWarning

warnings.filterwarnings("ignore", category=InconsistentVersionWarning)

from flask import Flask, jsonify,request
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load('Laptop_Pricing_model_multiple_LR_complete.pkl')

@app.route('/')
def home():
    return "Welcome to the Laptop Pricing Prediction API!"

@app.route('/predict', methods=['POST'])
def handle_prediction():
    data = request.json
    prediction_result = model.predict(data)
    return jsonify({'prediction': prediction_result.tolist()}), 200

if __name__ == '__main__':
    app.run(debug=True)

