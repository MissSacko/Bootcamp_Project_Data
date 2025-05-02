import React, { useState } from 'react';
import './styles.css';


function Segmentation() {
  const [showStreamlit, setShowStreamlit] = useState(false);

  return (
    <div className="segmentation-container">
      {!showStreamlit ? (
        <div className="segmentation-landing">

<div class="bg-gradient-to-br from-indigo-900 via-purple-700 to-indigo-800 text-white min-h-screen flex flex-col">
  
  <div class="container mx-auto px-4 py-6">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="h-10 w-10 rounded-full bg-white text-indigo-600 flex items-center justify-center text-xl font-bold">R</div>
        <span class="ml-3 text-xl font-bold">RetailX Solutions </span>
      </div>
      <nav class="hidden md:flex space-x-8">
      <a href="/dashbord" class="bg-indigo-600 text-amber-50 hover:bg-indigo-600 py-2 px-4  rounded-xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Home</a>
        {/* <a href="#" class="hover:text-indigo-300 transition-colors duration-200">Features</a>
        <a href="#" class="hover:text-indigo-300 transition-colors duration-200">Contact</a> */}
      </nav>
      <div class="md:hidden">
        <button class="text-white focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  

  <main class="flex-grow flex items-center relative overflow-hidden">
    
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-20 h-20 rounded-full bg-indigo-500 opacity-20 floating"></div>
      <div class="absolute top-40 right-20 w-32 h-32 rounded-full bg-purple-500 opacity-20 floating-slow"></div>
      <div class="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-pink-500 opacity-20 floating-slower"></div>
      <div class="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-indigo-300 opacity-20 floating"></div>
    </div>
    
    <div class="container mx-auto px-4 py-12 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Outil de <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Segmentation</span> de Clientèle 
          </h1>
          <p class="text-lg md:text-xl text-indigo-200 mb-8 max-w-lg mx-auto md:mx-0">
            Un outil permettant de Segmenter automatiquement la clientèle pour personnaliser les campagnes marketing. Conçu dans un interface simple où il suffit d'importer le fichier csv contenant les données relatives aux clients. Ainsi, la segmentation lancé vous donnera des visuels les différents groupes de clients sous forme de graphiques
          </p>
          <button 
            onClick={() => setShowStreamlit(true)}
            class="bg-indigo-600 text-amber-50 hover:bg-indigo-600 py-4 px-6 rounded-xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg  md:text-2xl lg:text-3xl"
          >
            Demarrer l'outil Segmentation
          </button>

        </div>
      
        <div class="hidden md:block">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
            <img src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png" alt="Illustration" class="relative z-10 mx-auto floating-slow"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

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