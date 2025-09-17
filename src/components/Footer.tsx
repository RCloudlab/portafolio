// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Reutilizamos los datos de los enlaces sociales para mantener la consistencia
const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedin />, 
    url: 'https://www.linkedin.com/in/tu-usuario/' // Reemplaza con tu URL
  },
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    url: 'https://github.com/tu-usuario' // Reemplaza con tu URL
  },
  { 
    name: 'Email', 
    icon: <MdEmail />, 
    url: 'mailto:tu-correo@example.com' // Reemplaza con tu correo
  },
  { 
    name: 'WhatsApp', 
    icon: <FaWhatsapp />, 
    url: 'https://wa.me/1234567890' // Reemplaza con tu número
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-obsidian border-t border-aztec-gold/20 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center text-sm">
            <p>&copy; {currentYear} Rodrigo Vega Espinoza. Todos los derechos reservados.</p>
            <p className="text-xs text-gray-500 mt-1">
              Forjado con React y Tailwind CSS
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;