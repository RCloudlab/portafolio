// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-dark-obsidian text-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-aztec text-aztec-gold mb-8 text-center">
          Acerca de mí
        </h2>
        <div className="bg-aztec-brown bg-opacity-20 p-8 rounded-lg border-2 border-aztec-gold transform transition-transform duration-500 hover:scale-105">
          <p className="text-lg md:text-xl leading-relaxed">
            Desde la cuna de los dioses digitales, he forjado mi camino como desarrollador...
            <br /><br />
            Aquí puedes escribir tu historia, tus motivaciones y tu pasión por la tecnología, usando una metáfora de guerrero o explorador azteca.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;