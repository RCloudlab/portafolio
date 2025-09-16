// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-aztec-brown bg-opacity-10 text-gray-200">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-aztec text-aztec-gold mb-8">
          Contacto
        </h2>
        <p className="mb-8">
          Si buscas a un guerrero para tu próximo proyecto, envíame una señal.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Tu Nombre"
            className="w-full p-4 rounded-lg bg-dark-obsidian text-white border border-aztec-gold focus:outline-none focus:ring-2 focus:ring-aztec-red transition-colors"
          />
          <input
            type="email"
            placeholder="Tu Correo Electrónico"
            className="w-full p-4 rounded-lg bg-dark-obsidian text-white border border-aztec-gold focus:outline-none focus:ring-2 focus:ring-aztec-red transition-colors"
          />
          <textarea
            placeholder="Tu Mensaje"
            rows={5}
            className="w-full p-4 rounded-lg bg-dark-obsidian text-white border border-aztec-gold focus:outline-none focus:ring-2 focus:ring-aztec-red transition-colors"
          ></textarea>
          <button
            type="submit"
            className="w-full px-8 py-3 rounded-lg font-bold text-lg bg-aztec-red text-white shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-aztec-gold focus:outline-none focus:ring-4 focus:ring-aztec-gold"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;