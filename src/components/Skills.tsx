import { motion } from "framer-motion";
import { 
  FaReact, FaGitAlt, FaFigma, FaDocker 
} from "react-icons/fa";
import { Code2, Database, Layout } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="mb-14 md:mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-electric font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-2"
          >
            <Code2 size={16} />
            Enfoque profesional
          </motion.h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-white leading-tight">
            Tecnología orientada a <br />
            <span className="text-brand-electric italic font-light">
              estabilidad, escala y negocio
            </span>
          </h3>

          <p className="mt-5 md:mt-6 text-brand-white/60 text-base sm:text-lg">
            Desarrollo de software con estándares profesionales, enfocado en
            rendimiento, mantenibilidad y crecimiento a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">

          {/* Frontend & Mobile — card grande */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="md:col-span-2 lg:col-span-3 lg:row-span-2 
              bg-brand-electric rounded-3xl p-6 sm:p-8 text-white 
              flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <Layout className="mb-4 opacity-50" size={32} />

              <h4 className="text-xl sm:text-2xl font-bold mb-2">
                Frontend &amp; Mobile
              </h4>

              <p className="text-white/80 font-light text-sm sm:text-base">
                Interfaces modernas con React y React Native, sitios optimizados
                con WordPress y estilos profesionales con CSS/Tailwind.
              </p>

              <p className="text-xs text-white/60 mt-3 font-mono">
                Producción · Código mantenible · Escalable
              </p>
            </div>

            <div className="flex flex-wrap gap-3 relative z-10 mt-6">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm">
                <FaReact className="inline mr-2" />
                React
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm">
                <FaReact className="inline mr-2" />
                React Native
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm">
                🌐 WordPress
              </span>
            </div>

            <FaReact className="absolute -bottom-12 -right-12 text-[200px] sm:text-[220px] text-white/5 rotate-12" />
          </motion.div>

          {/* Backend & DBs */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="md:col-span-2 lg:col-span-3 
              bg-brand-neon rounded-3xl p-6 sm:p-8 text-white 
              flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <Database className="mb-4 opacity-70" size={28} />
              <h4 className="text-lg sm:text-xl font-bold">
                Backend &amp; Bases de Datos
              </h4>

              <p className="text-white/70 text-sm mt-3">
                APIs y sistemas robustos con Laravel y .NET (C#), persistencia
                confiable con PostgreSQL y SQL.
              </p>
            </div>

            <div className="flex gap-3 mt-6 flex-wrap">
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono">Laravel / PHP</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono">.NET (C#)</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono">PostgreSQL</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono">SQL</span>
            </div>
          </motion.div>

          {/* Git */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-1 lg:col-span-2 
              bg-brand-surface border border-brand-neon/20 
              rounded-3xl p-6 flex items-center gap-4"
          >
            <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl shrink-0">
              <FaGitAlt size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-white text-sm sm:text-base">
                Control de versiones
              </p>
              <p className="text-xs text-brand-white/50">
                Git · Flujos colaborativos y buenas prácticas
              </p>
            </div>
          </motion.div>

          {/* Figma / UI */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-1 lg:col-span-2 
              bg-brand-surface border border-brand-neon/20 
              rounded-3xl p-6 flex items-center gap-4"
          >
            <div className="bg-purple-100 text-purple-600 p-3 rounded-2xl shrink-0">
              <FaFigma size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-white text-sm sm:text-base">
                UI / UX Design
              </p>
              <p className="text-xs text-brand-white/50">
                Diseño alineado a objetivos de negocio
              </p>
            </div>
          </motion.div>

          {/* Docker */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-2 lg:col-span-2 
              bg-brand-neon/10 border border-brand-neon/20 
              rounded-3xl p-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 text-brand-neon mb-2">
              <FaDocker size={26} />
              <span className="font-bold text-sm sm:text-base">
                Infraestructura
              </span>
            </div>
            <p className="text-xs text-brand-neon/70">
              Docker · Entornos controlados, reproducibles y listos para producción.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-brand-white/40 mb-3">
            Tecnologías complementarias
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Java", "PHP", "SQL", "PostgreSQL", "Trello", "Git", "Docker"].map(skill => (
              <span 
                key={skill} 
                className="px-4 py-1 rounded-full border border-brand-white/10 text-xs font-mono text-brand-white/70 bg-brand-white/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
