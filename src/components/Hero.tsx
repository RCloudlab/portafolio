import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/images/profile.jpg'; 

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-dark-obsidian">
      
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 p-8 md:p-12 flex flex-col items-center">
       
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={profilePic}
            alt="Tu Foto de Perfil"
            className="w-45 h-5 md:w-48 md:h-48 rounded-full border-4 border-aztec-gold shadow-lg object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-aztec text-aztec-gold drop-shadow-lg"
        >
          ¡Hola! Soy Tu Nombre
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 md:mt-6 text-xl md:text-2xl text-gray-200 drop-shadow-md"
        >
          Desarrollador Full Stack | Conquistador Digital
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-8 py-3 rounded-lg font-bold text-lg bg-aztec-red text-white shadow-xl transform transition-all duration-300 hover:bg-aztec-gold focus:outline-none focus:ring-4 focus:ring-aztec-gold"
        >
          <a href="#contact">Contáctame</a>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;