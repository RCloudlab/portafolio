// src/components/Header.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 bg-dark-obsidian bg-opacity-80 backdrop-blur-sm shadow-lg"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold font-aztec text-aztec-gold">
          TU_NOMBRE
        </div>
        <ul className="flex space-x-6 text-sm md:text-base">
          {/* Secciones con hrefs correctos */}
          <motion.li whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(255,255,255)' }} whileTap={{ scale: 0.95 }}>
            <a href="#about" className="text-gray-300 hover:text-aztec-gold transition-colors duration-300">
              Acerca de mí
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(255,255,255)' }} whileTap={{ scale: 0.95 }}>
            <a href="#skills" className="text-gray-300 hover:text-aztec-gold transition-colors duration-300">
              Habilidades
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(255,255,255)' }} whileTap={{ scale: 0.95 }}>
            <a href="#experience" className="text-gray-300 hover:text-aztec-gold transition-colors duration-300">
              Experiencia
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(255,255,255)' }} whileTap={{ scale: 0.95 }}>
            <a href="#contact" className="text-gray-300 hover:text-aztec-gold transition-colors duration-300">
              Contacto
            </a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;