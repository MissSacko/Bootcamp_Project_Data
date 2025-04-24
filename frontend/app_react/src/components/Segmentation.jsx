import React, { useState } from 'react';
import './styles.css';


function Segmentation() {
  const [showStreamlit, setShowStreamlit] = useState(false);

  return (
    <div className="segmentation-container">
      {!showStreamlit ? (
        <div className="segmentation-landing">
          <h2>Customer Segmentation Analysis</h2>
          <p>Click the button below to launch the segmentation tool</p>
          <button 
            onClick={() => setShowStreamlit(true)}
            className="segmentation-button"
          >
            Launch Segmentation Tool
          </button>
        </div>
      ) : (
        <div className="streamlit-iframe-container">
          <iframe
            src="http://localhost:8501"  // URL de votre Streamlit
            title="Streamlit Segmentation App"
            width="100%"
            height="800px"
            frameBorder="0"
          />
          <button 
            onClick={() => setShowStreamlit(false)}
            className="back-button"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default Segmentation;