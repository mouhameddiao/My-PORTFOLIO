import React from 'react';
import { Link } from 'react-router-dom';
import momodeveloppeur from '../assets/images/momo developpeur.jpg';
import ParticlesBackground from './ParticlesBackground';

function Home() {
  return (
    <section className="relative bg-gray-100 min-h-screen py-16 px-4">
      <ParticlesBackground />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center justify-center min-h-screen gap-6">
        <img
          src={momodeveloppeur}
          alt="momodeveloppeur"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-4 border-green shadow-lg hover:scale-105 transition-transform duration-300"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 animate-bounce">
          I'm Mohamet Diao
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 animate-bounce">
          Welcome to My Portfolio
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl">
          I am a Fullstack Developer specialized in React, Node.js, and innovative web solutions.
        </p>

        <Link
          to="/projects"
          className="mt-6 inline-block bg-primary text-white py-3 px-6 rounded-full text-base sm:text-lg font-semibold hover:bg-secondary transition-colors duration-300"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}

export default Home;
