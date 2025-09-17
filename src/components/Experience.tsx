// src/components/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Tus imágenes de logos
import nayalogo from '../assets/images/nayaLogo.png'; 
import itmLogo from '../assets/images/SIMLogo.png'; 
import elPrimoLogo from '../assets/images/ElPrimoLogo.png'; 
import Ticketly from '../assets/images/Ticketly.png'; 
import MindfulLogo from '../assets/images/MindfulLogo.png'; 

// --- Interfaz y Datos (sin cambios) ---
interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  tech: string;
  image: string; 
}

const experienceData: ExperienceItem[] = [
    {
    title: 'Nayá',
    company: 'Nayá Corporativo',
    date: '2025 - Presente',
    description: 'Una aplicación para que los niños aprendan a identificar, comprender y gestionar emociones.',
    tech: "React Native, Python, PostgreSQL, AWS",
    image: nayalogo,
  },
  {
    title: 'SIM',
    company: 'Instituto Tecnológico de Morelia',
    date: '2024 - 2025',
    description: 'Sistema de Integracion Modular, una plataforma web para la gestión académica y administrativa.',
    tech: "Laravel, PHP, MySQL, Tailwindcss, GitLab",
    image: itmLogo,
  },
  {
    title: 'TicketLy',
    company: 'Proyecto Personal',
    date: '2025',
    description: 'Plataforma de gestión de proyectos y tareas para equipos ágiles.',
    tech: "React, PostgreSQL, Docker, Figma",
    image: Ticketly,
  },
  {
    title: 'El Primo ',
    company: 'ElPrimoJoxe',
    date: '2025 - Presente',
    description: 'Sitio Web para una cafetería local, con menú interactivo y publicidad de eventos.',
    tech: "React, tailwindcss, Figma, MySQL",
    image: elPrimoLogo,
  },
  {
    title: 'MindFulTOC',
    company: 'CodeServe',
    date: '2024 (Pausado)',
    description: 'Aplicación móvil para ayudar a personas con Trastorno Obsesivo Compulsivo (TOC).',
    tech: "React Native, tailwindcss, Figma, MySQL",
    image: MindfulLogo,
  },
];

// --- Animaciones (sin cambios) ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
} as const;

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;
  
const techPillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
} as const;

// --- Componente de Tarjeta con Estilo Mejorado ---
const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
    const techList = item.tech.split(',').map(tech => tech.trim());

    return (
        <motion.div 
            className="group h-full"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
        >
            <div className="flex flex-col h-full bg-dark-obsidian/50 backdrop-blur-sm rounded-xl overflow-hidden border border-aztec-gold/20 p-6 transition-all duration-300 group-hover:border-aztec-gold/50 group-hover:shadow-2xl group-hover:shadow-aztec-gold/10">
                
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={`Logo de ${item.company}`}
                    className="w-20 h-20 rounded-full border-2 border-aztec-gold/50 object-contain p-1 bg-dark-obsidian transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-aztec-gold">{item.title}</h3>
                    <p className="text-sm font-semibold text-gray-300">{item.company} &bull; {item.date}</p>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  {/* --- ESTILO DE DESCRIPCIÓN MEJORADO --- */}
                  <motion.p 
                    className="text-base text-gray-200 leading-relaxed flex-grow mb-4 [text-shadow:0_0_10px_rgba(212,163,115,0.3)]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </motion.p>
                  
                  <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                      viewport={{ once: true, amount: 0.8 }}
                  >
                      {techList.map((tech) => (
                        <motion.span 
                          key={tech}
                          variants={techPillVariants}
                          className="text-sm font-medium text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                  </motion.div>
                </div>
            </div>
        </motion.div>
    );
};


const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-dark-obsidian text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-aztec text-aztec-gold mb-16 text-center">
          Experiencia Profesional
        </h2>
        
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;