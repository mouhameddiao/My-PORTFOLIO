import React from 'react';
import { Link } from 'react-router-dom';

import momodeveloppeur from '../assets/images/momo developpeur.jpg';
import ParticlesBackground from './ParticlesBackground';

function Home() {
  return (
    <section className="relative bg-gray-100 min-h-screen p-4 flex items-center justify-center">
      {/* Particules */}
      <ParticlesBackground />

      {/* Contenu principal */}
      <div className="relative z-10 text-center">
        <img
          src={momodeveloppeur}
          alt="momodeveloppeur"
          className="w-60 h-60 rounded-full border-4 border-green mx-auto shadow-lg hover:scale-105 transition-transform duration-300 mt-20"
        />

        <h1 className="text-3xl font-extrabold mt-8 text-gray-800 animate-bounce">
          I'm Mohamet Diao
        </h1>
        <h2 className="text-4xl font-extrabold mt-4 text-gray-800 animate-bounce">
          Welcome to My Portfolio
        </h2>
        <p className="text-xl text-gray-600 mt-4 mb-8">
          I am a Fullstack Developer specialized in React, Node.js, and innovative web solutions.
        </p>

        <Link
          to="http://localhost:3000/projects"
          className="bg-primary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}

export default Home;
