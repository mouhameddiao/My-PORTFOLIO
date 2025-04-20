// ✅ About.jsx - Responsive
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import momodeveloppeur from '../assets/images/momo developpeur.jpg';


const About = () => {
  return (
    <div className="py-20 px-4 sm:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12">
          À propos de moi
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-12">
          <img
            src={momodeveloppeur}
            alt="momodeveloppeur"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
          />

          <div className="max-w-2xl text-center md:text-left">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Je suis un développeur fullstack passionné avec une expérience dans la création d'applications web modernes.
              J'aime transformer des idées en réalité grâce à un code propre et optimisé. Mon expertise couvre à la fois le front-end et le back-end,
              avec une spécialisation dans les technologies suivantes :
              <span className="text-primary font-semibold"> HTML, CSS, JavaScript, React, Next.js, et Node.js.</span>
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mt-8">
              {[FaHtml5, FaCss3Alt, FaJs, FaReact, SiNextdotjs, FaNodeJs].map((Icon, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <Icon className="text-4xl mb-2 animate-bounce text-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg sm:text-xl italic text-gray-500">
            "Le code est un art, et chaque ligne est une étape vers une solution innovante."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
