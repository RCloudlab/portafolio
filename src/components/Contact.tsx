// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// --- Datos de Redes Sociales (sin cambios) ---
const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedin />, 
    url: 'https://www.linkedin.com/in/rodrigo-vega-45723b353/' 
  },
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    url: 'https://github.com/RCloudlab'
  },
  { 
    name: 'Email', 
    icon: <MdEmail />, 
    url: 'mailto:rvesp04@hotmail.com'
  },
];

// --- Animaciones para los Iconos (sin cambios) ---
const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
} as const;

const socialIconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;


const Contact = () => {
  return (
    <section id="contact" className="relative py-14 md:py-20 bg-dark-obsidian text-gray-200 overflow-hidden">
      <div className="absolute top-0 -right-20 w-64 h-64 md:w-96 md:h-96 bg-aztec-gold/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -left-20 w-64 h-64 md:w-96 md:h-96 bg-aztec-red/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-2xl mx-auto px-4 md:px-6 text-center relative z-10">
        {/* --- Tarjeta del Formulario --- */}
        <motion.div 
          className="bg-dark-obsidian/50 backdrop-blur-sm border border-aztec-gold/20 rounded-2xl p-6 sm:p-8 md:p-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-aztec text-aztec-gold mb-4">
            Hablemos
          </h2>
          <p className="mb-8 text-gray-300 text-sm md:text-base">
            ¿Tienes un proyecto en mente o una oportunidad para mí? Envíame un mensaje.
          </p>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full p-3 rounded-lg bg-aztec-brown/20 text-white border-2 border-aztec-gold/30 focus:outline-none focus:ring-2 focus:ring-aztec-gold focus:border-aztec-gold transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              className="w-full p-3 rounded-lg bg-aztec-brown/20 text-white border-2 border-aztec-gold/30 focus:outline-none focus:ring-2 focus:ring-aztec-gold focus:border-aztec-gold transition-all duration-300"
            />
            <textarea
              placeholder="Tu Mensaje..."
              rows={4}
              className="w-full p-3 rounded-lg bg-aztec-brown/20 text-white border-2 border-aztec-gold/30 focus:outline-none focus:ring-2 focus:ring-aztec-gold focus:border-aztec-gold transition-all duration-300"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212,163,115,0.5)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold text-lg bg-aztec-red text-white shadow-lg transform transition-all duration-300 hover:bg-aztec-gold focus:outline-none focus:ring-4 focus:ring-aztec-gold/50"
            >
              <FaPaperPlane />
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>

        <div className="mt-16">
          <p className="text-lg text-gray-300 mb-6">
            O conecta conmigo en mis redes
          </p>
          <motion.div 
            className="flex justify-center items-center gap-6 sm:gap-8" // Más espacio entre iconos
            variants={socialContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover={{ scale: 1.2, y: -8, color: '#D4A373' }} // Elevación más pronunciada
                transition={{ type: 'spring', stiffness: 300 }}
                // AJUSTE DE TAMAÑO: Iconos mucho más grandes
                className="text-4xl md:text-5xl text-gray-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;