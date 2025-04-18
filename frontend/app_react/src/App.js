//mport logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Segmentation from './components/Segmentation';
import Churn from './components/Churn';
import Approvisionnement from './components/Approvisionnement';
import Ventes from './components/Ventes';
import Chatbot from './components/Chatbot';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/segmentation" element={<Segmentation />} />
        <Route path="/churn" element={<Churn />} />
        <Route path="/approvisionnement" element={<Approvisionnement />} />
        <Route path="/ventes" element={<Ventes />} />
        <Route path="/chatbot" element={<Chatbot />} />

      </Routes>
    </Router>
  );
}

export default App;