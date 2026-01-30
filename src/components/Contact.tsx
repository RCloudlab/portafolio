import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MessageSquare, Send, Sparkles } from 'lucide-react';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedin />, 
    url: 'https://www.linkedin.com/in/rodrigo-vega-espinoza-45723b353/',
    color: 'hover:text-[#0077B5]' 
  },
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    url: 'https://github.com/RCloudlab',
    color: 'hover:text-[#333]' 
  },
  { 
    name: 'Email', 
    icon: <MdEmail />, 
    url: 'mailto:rvesp04@hotmail.com',
    color: 'hover:text-brand-electric' 
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24  overflow-hidden">
      {/* Círculos decorativos sutiles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-electric/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-electric font-mono text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} /> Contacto
            </motion.h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-white">
              ¿Tienes un <span className="text-brand-electric italic font-light">proyecto</span> en mente?
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Lado Izquierdo: Social & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h4 className="text-xl font-bold text-brand-white mb-4 flex items-center gap-2">
                  Hablemos <Sparkles size={18} className="text-brand-neon" />
                </h4>
                <p className="text-brand-white/60 font-light leading-relaxed">
                  Estoy abierto a oportunidades de <span className="text-brand-white font-bold">Fullstack Development</span>
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-white/40">Conecta conmigo</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className={`text-3xl text-brand-white/20 transition-colors ${link.color}`}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-brand-electric rounded-3xl text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <p className="text-xs font-mono mb-2 opacity-70 italic">// Respuesta rápida</p>
                <p className="text-sm font-light">Suelo responder en menos de 24 horas. ¡No seas tímido!</p>
              </div>
            </motion.div>

            {/* Lado Derecho: Formulario */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 bg-brand-surface p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-brand-neon/20"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-brand-white/40 ml-1">Nombre</label>
                    <input
                      type="text"
                      placeholder="Ej. Juan Pérez"
                      className="w-full p-4 rounded-2xl bg-brand-dark/50 border border-transparent focus:border-brand-electric/20 focus:bg-brand-surface outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-brand-white/40 ml-1">Email</label>
                    <input
                      type="email"
                      placeholder="tu@correo.com"
                      className="w-full p-4 rounded-2xl bg-brand-dark/50 border border-transparent focus:border-brand-electric/20 focus:bg-brand-surface outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-brand-white/40 ml-1">Mensaje</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntame sobre tu idea..."
                    className="w-full p-4 rounded-2xl bg-brand-dark/50 border border-transparent focus:border-brand-electric/20 focus:bg-brand-surface outline-none transition-all text-sm resize-none"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-brand-neon text-white font-bold hover:bg-brand-electric transition-colors shadow-lg shadow-brand-electric/10"
                >
                  <Send size={18} />
                  Enviar Propuesta
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;