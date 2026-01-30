import { motion, useScroll, useTransform } from "framer-motion";
import profilePic from "../assets/images/profile.jpg";
import { Terminal, ChevronRight } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-28 md:pt-24">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 -right-20 w-96 h-96 bg-brand-electric/10 rounded-full blur-[100px] pointer-events-none"
      />
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-neon font-mono text-sm shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
          </span>
          Disponible para nuevos proyectos
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-brand-electric rounded-2xl rotate-6 blur-sm opacity-20"></div>
          <img
            src={profilePic}
            alt="Rodrigo Vega"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-brand-negro  transition-all duration-500 shadow-2xl"
          />
        </motion.div>

        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-electric font-mono text-lg mb-2"
          >
            &lt; Rodrigo Vega Espinoza /&gt;
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-brand-white leading-tight tracking-tighter"
          >
            DEVS THAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-neon">
              EMPOWER
            </span>{" "}
            IDEAS.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-brand-muted max-w-xl text-center font-light leading-relaxed"
        >
          Ingeniero en Sistemas enfocado en construir experiencias digitales
          escalables con
          <span className="text-brand-negO font-semibold">
            {" "}
            React Native, FastAPI y Supabase.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#experience"
            className="group flex items-center gap-2 bg-brand-neon text-brand-dark px-8 py-4 rounded-xl font-bold hover:bg-brand-electric transition-all shadow-lg active:scale-95"
          >
            Ver Proyectos
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 border-2 border-brand-negro px-8 py-4 rounded-xl font-bold hover:bg-brand-neon hover:text-brand-dark transition-all active:scale-95"
          >
            <Terminal size={20} />
            Hablemos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
