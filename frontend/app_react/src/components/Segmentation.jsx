import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // Pour parser le CSV
import Plotly from 'plotly.js-dist-min'; // Graphiques interactifs
import './styles.css'; // Styles spécifiques

const Segmentation = () => {
  // États pour gérer les données et l'interface
  const [data, setData] = useState(null);
  const [segments, setSegments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1. Gérer l'upload du CSV
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data); // Stocke les données parsées
        setError(null); // Réinitialise les erreurs
      },
      error: (err) => setError("Erreur de lecture du CSV. Vérifiez le format."),
    });
  };

  // 2. Envoyer les données au backend (API Python/Flask)
  const runSegmentation = async () => {
    if (!data) {
      setError("Veuillez d'abord importer un fichier CSV.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/segment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });
      const result = await response.json();
      setSegments(result.segments); // Reçoit les segments du backend
    } catch (err) {
      setError("Erreur lors de la segmentation. Vérifiez le backend.");
    } finally {
      setLoading(false);
    }
  };

  // 3. Afficher les résultats avec Plotly
  useEffect(() => {
    if (!segments) return;

    const plotData = [{
      x: segments.map(s => s.depenses),
      y: segments.map(s => s.revenu),
      mode: 'markers',
      type: 'scatter',
      marker: { 
        color: segments.map(s => s.cluster),
        size: 10,
      },
    }];

    const layout = {
      title: 'Segmentation Clientèle',
      xaxis: { title: 'Dépenses' },
      yaxis: { title: 'Revenu' },
    };

    Plotly.newPlot('segmentation-plot', plotData, layout);
  }, [segments]);

  return (
    <div className="segmentation-container">
      <h1>🔍 Segmentation Clientèle</h1>
      
      {/* Section Upload */}
      <div className="upload-section">
        <h3>1. Importer un fichier CSV client</h3>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
        {error && <p className="error">{error}</p>}
      </div>

      {/* Section Segmentation */}
      <div className="action-section">
        <h3>2. Lancer la segmentation</h3>
        <button onClick={runSegmentation} disabled={!data || loading}>
          {loading ? 'Traitement...' : 'Exécuter'}
        </button>
      </div>

      {/* Section Résultats */}
      <div className="results-section">
        <h3>3. Résultats</h3>
        {segments ? (
          <div id="segmentation-plot"></div>
        ) : (
          <p>Aucun résultat à afficher. Importez un CSV et lancez l'analyse.</p>
        )}
      </div>
    </div>
  );
};

export default Segmentation;