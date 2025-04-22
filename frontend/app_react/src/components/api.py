# from flask import Flask, request, jsonify
# import joblib
# import numpy as np

# app = Flask(__name__)
# kmeans = joblib.load("../kmeans_model.pkl")
# scaler = joblib.load("../scaler.pkl")

# @app.route('/segment', methods=['POST'])
# def segment():
#     input_data = request.json
#     features = np.array([[input_data["income"], input_data["spending_score"]]]).T
#     features_scaled = scaler.transform(features)
#     cluster = int(kmeans.predict(features_scaled)[0])
#     return jsonify({"cluster": cluster})

# if __name__ == '__main__':
#     app.run(port=5000)



from flask import Flask, request, jsonify
import pandas as pd
import joblib
from io import StringIO
from sklearn.preprocessing import StandardScaler

from flask_cors import CORS
app = Flask(__name__)
CORS(app) 

# Charger le modèle et le scaler
model = joblib.load("../kmeans_model.pkl")
scaler = joblib.load("../scaler.pkl")

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "Aucun fichier uploadé"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "Fichier vide"}), 400

    # Lire le CSV
    try:
        data = pd.read_csv(file)
        X = data[["income", "spending_score"]]  # Sélectionner les colonnes
        X_scaled = scaler.transform(X)
        clusters = model.predict(X_scaled)
        data["cluster"] = clusters  # Ajouter les clusters au DataFrame

        # Convertir en JSON pour le frontend
        return jsonify({
            "data": data.to_dict(orient="records"),
            "clusters": clusters.tolist()
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)