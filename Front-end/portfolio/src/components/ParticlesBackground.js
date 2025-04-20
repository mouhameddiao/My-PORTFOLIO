// src/components/ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: '#f3f4f6' },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#1f2937' },
          shape: {
            type: 'circle',
            stroke: { width: 0 },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 4,
            random: true,
            anim: { enable: true, speed: 3, size_min: 0.3, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: '#9CA3AF',
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      }}
      className="absolute inset-0"
    />
  );
}

export default ParticlesBackground;
