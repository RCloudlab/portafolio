// src/components/Header.tsx
import  { useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/images/profile.jpg'

const navItems = [
  { name: 'Acerca de mí', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Contacto', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 bg-dark-obsidian bg-opacity-80 backdrop-blur-sm shadow-lg"
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <motion.img
            src={profilePic}
            alt="Tu Foto"
            className="w-10 h-10 rounded-full border-2 border-aztec-gold"
            whileHover={{ scale: 1.1, rotate: 360 }}
          />
          <span className="hidden md:block text-xl font-bold font-aztec text-aztec-gold">
            RV Espinoza
          </span>
        </div>
        <ul className="hidden md:flex space-x-8 text-sm">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={item.href} className="text-gray-300 hover:text-aztec-gold transition-colors duration-300">
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-aztec-gold focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>
      <motion.ul
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", marginTop: "1rem" },
          closed: { opacity: 0, height: 0, marginTop: "0rem" },
        }}
        className="md:hidden flex flex-col items-center space-y-4 pt-4 overflow-hidden"
      >
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={item.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-aztec-gold transition-colors duration-300">
              {item.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.header>
  );
};

export default Header;