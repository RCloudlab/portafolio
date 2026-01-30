import { motion } from "framer-motion";
import { User, Sparkles, Heart, Code2 } from "lucide-react";
import Image1 from "../assets/images/Me1.jpg";
import Image2 from "../assets/images/Me2.jpg";
import Image3 from "../assets/images/Me3.jpg";
import Image5 from "../assets/images/Me5.jpeg";

const About = () => {
  const images = [Image1, Image2, Image3, Image5];

  return (
    <section id="about" className="relative py-24 md:py-32  overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-12 grid-rows-12 gap-3 h-[450px] md:h-[550px]"
            >
              <div className="col-span-8 row-span-8 overflow-hidden rounded-3xl border border-brand-neon/20 shadow-2xl">
                <img src={images[0]} alt="Rodrigo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-4 row-span-5 col-start-9 overflow-hidden rounded-3xl border border-brand-neon/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <img src={images[1]} alt="Trabajando" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-5 row-span-4 row-start-9 overflow-hidden rounded-3xl border border-brand-neon/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <img src={images[2]} alt="Desarrollo" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-7 row-span-4 col-start-6 row-start-9 overflow-hidden rounded-3xl border border-brand-neon/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <img src={images[3]} alt="Life" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-4 bg-brand-neon p-4 rounded-2xl shadow-2xl flex items-center gap-3 text-white"
            >
              <div className="bg-brand-electric p-2 rounded-lg">
                <Code2 size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest">Fullstack Mindset</p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-electric font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles size={14} /> Perfil Profesional
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-white leading-[1.1]">
                Transformando ideas complejas en <span className="text-brand-electric italic font-light">software real</span>.
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-brand-white/80 leading-relaxed font-light">
                Soy <span className="text-brand-electric font-bold">Rodrigo Vega Espinoza</span>. No solo escribo código; diseño soluciones escalables con un enfoque total en la experiencia del usuario y la eficiencia del backend.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-brand-surface border border-brand-neon/20 shadow-sm">
                  <Heart size={20} className="text-brand-neon mb-3" />
                  <h4 className="font-bold text-brand-white text-sm uppercase mb-1">Impacto Real</h4>
                  <p className="text-xs text-brand-white/60 leading-relaxed">Construyo herramientas que optimizan procesos y generan valor medible.</p>
                </div>
                <div className="p-5 rounded-2xl bg-brand-surface border border-brand-neon/20 shadow-sm">
                  <User size={20} className="text-brand-electric mb-3" />
                  <h4 className="font-bold text-brand-white text-sm uppercase mb-1">Evolución</h4>
                  <p className="text-xs text-brand-white/60 leading-relaxed">Aprendizaje autodidacta constante para dominar las mejores prácticas del mercado.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;