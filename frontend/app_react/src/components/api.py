from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
kmeans = joblib.load("kmeans_model.pkl")
scaler = joblib.load("scaler.pkl")

@app.route('/segment', methods=['POST'])
def segment():
    input_data = request.json
    features = np.array([[input_data["age"], input_data["gender"], input_data["income"], input_data["spending_score"]]]).T
    features_scaled = scaler.transform(features)
    cluster = int(kmeans.predict(features_scaled)[0])
    return jsonify({"cluster": cluster})

if __name__ == '__main__':
    app.run(port=5000)