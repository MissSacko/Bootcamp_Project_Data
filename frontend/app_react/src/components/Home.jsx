import React from 'react';
//import { useNavigate } from 'react-router-dom';
//import './Home.css'; // Fichier CSS pour le style (optionnel)

function Home() {
  //const navigate = useNavigate();

  return (
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="images/17276.png" alt="background" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our analyste Website</h1>
    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
    <a href="/dashboard" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
    {/* <button 
    class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        onClick={() => navigate('/dashboard')} 
      >
        Accéder au Dashboard
      </button> */}
  </div>
</div>

  );
}

export default Home;