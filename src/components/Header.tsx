import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Tecnologías', href: '#skills' },
    { name: 'Proyectos', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-surface/70 backdrop-blur-xl border border-brand-neon/20 shadow-lg' 
            : 'bg-transparent border border-transparent'
        }`}>
          
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-brand-electric p-2 rounded-lg text-white">
              <Terminal size={20} />
            </div>
            <span className="font-black text-brand-white tracking-tighter text-xl group-hover:text-brand-electric transition-colors">
              RVE<span className="text-brand-electric">.</span>
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-xs font-bold uppercase tracking-widest text-brand-white/60 hover:text-brand-electric transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-electric transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="h-6 w-px bg-brand-neon/10 mx-2" />
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://github.com/RCloudlab" target="_blank" className="text-brand-white/40 hover:text-brand-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/rodrigo-vega-espinoza-45723b353/" target="_blank" className="text-brand-white/40 hover:text-brand-electric transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <button 
            className="md:hidden text-brand-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full p-6 md:hidden"
          >
            <div className="bg-brand-surface rounded-3xl shadow-2xl border border-brand-neon/20 p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-brand-white hover:text-brand-electric transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-brand-neon/20" />
              <div className="flex gap-6 justify-center">
                <Github size={24} className="text-brand-white/40" />
                <Linkedin size={24} className="text-brand-white/40" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;