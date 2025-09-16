// src/components/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    title: 'Desarrollador de Templos Web',
    company: 'Empresa Azteca Tech',
    date: '2023 - Presente',
    description: 'Creación de plataformas digitales robustas y escalables con React y Node.js.',
  },
  {
    title: 'Aprendiz de Mago del Código',
    company: 'Escuela de la Serpiente Emplumada',
    date: '2021 - 2023',
    description: 'Adquirí los fundamentos de la programación y el arte del diseño de interfaces.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-dark-obsidian text-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-aztec text-aztec-gold mb-12 text-center">
          Experiencia
        </h2>
        <div className="relative">
          <div className="border-l-4 border-aztec-gold absolute h-full left-1/2 -translate-x-1/2"></div>
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex mb-8 items-start ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 p-4 rounded-lg transform transition-transform duration-500 hover:scale-105 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className="bg-aztec-red p-6 rounded-lg shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm font-semibold text-gray-100">{item.company}</p>
                  <p className="text-xs text-gray-300 mb-2">{item.date}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;