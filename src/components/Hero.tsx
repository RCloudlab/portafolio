// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-dark-obsidian">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 p-4 md:p-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <motion.img
            src={profilePic}
            alt="Tu Foto de Perfil"
            className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full border-4 border-aztec-gold shadow-lg object-cover"
            whileHover={{ scale: 1.1, rotate: 360 }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-aztec text-aztec-gold drop-shadow-lg"
        >
          ¡Hola! Soy <strong>Rodrigo Vega Espinoza</strong>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md max-w-2xl mx-auto"
        >
          Estudiante de Ing. Sistemas Computacionales
          <br /><br />
          Desarrollador Apasionado
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-lg bg-aztec-red text-white shadow-xl transform transition-all duration-300 hover:bg-aztec-gold focus:outline-none focus:ring-4 focus:ring-aztec-gold"
        >
          <a href="#contact">Contáctame</a>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;