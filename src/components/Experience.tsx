import { easeOut, motion } from "framer-motion";
import { FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";

// Tus imports de imágenes...
import nayalogo from "../assets/images/nayaLogo.png";
import itmLogo from "../assets/images/SIMLogo.png";
import ObradorCortes from "../assets/images/ObradorCortesLogo.png";
import TaqueriaChaman from "../assets/images/TaqueriaElChaman.png";
import MindfulLogo from "../assets/images/MindfulLogo.png";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  tech: string;
  image: string;
  link?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Nayá",
    company: "Nayá Corporativo",
    date: "2025 - Presente",
    description:
      "Aplicación Movil para el aprendizaje de lagestión de las emociones para niños.",
    tech: "React Native, Python, AWS",
    image: nayalogo,
    link: "https://naya-website.vercel.app/",
  },
  {
    title: "SIM",
    company: "Tecnológico de Morelia",
    date: "2024 - 2025",
    description: "Plataforma de gestión académica integral.",
    tech: "Laravel, PHP, MySQL",
    image: itmLogo,
    link: "https://sim.morelia.tecnm.mx/",
  },
  {
    title: "Taqueria El Chaman",
    company: "Sitio Web",
    date: "2025",
    description: "Web corporativa y menú digital.",
    tech: "React, Tailwind, Figma",
    image: TaqueriaChaman,
    link: "https://taqueriaselchaman.vercel.app/",
  },
  {
    title: "Obrador Cortes",
    company: "Industrializadora Michoacana",
    date: "2025",
    description: "Catálogo de productos cárnicos y contacto.",
    tech: "React, Tailwind",
    image: ObradorCortes,
    link: "https://obradorcortes.vercel.app/",
  },
  {
    title: "MindFulTOC",
    company: "CodeServe",
    date: "2024",
    description: "App móvil de apoyo para tratamiento de TOC.",
    tech: "React Native, MySQL",
    image: MindfulLogo,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  const techList = item.tech.split(",").map((tech) => tech.trim());

  return (
    <motion.div
      className="group relative flex flex-col h-full bg-dark-obsidian rounded-xl border border-aztec-gold/20 overflow-hidden hover:border-aztec-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-aztec-gold/10 hover:-translate-y-2"
      variants={cardVariants}
    >
      <div className="h-48 w-full relative overflow-hidden bg-gradient-to-br from-gray-800 to-black">
        <div className="absolute inset-0 bg-aztec-gold/5 z-10" />

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-obsidian via-transparent to-transparent opacity-90" />
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-black/60 backdrop-blur-md text-aztec-gold text-xs font-bold px-3 py-1 rounded-full border border-aztec-gold/30">
            {item.date}
          </span>
        </div>
      </div>

      {/* 2. SECCIÓN DE CONTENIDO */}
      <div className="p-6 flex flex-col flex-grow relative z-20 -mt-6">
        {/* Título y Compañía */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-aztec-gold transition-colors truncate">
            {item.title}
          </h3>
          <p className="text-sm text-aztec-gold/80 font-medium">
            {item.company}
          </p>
        </div>

        {/* Descripción */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {item.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techList.map((tech, i) => (
            <span
              key={i}
              className="text-xs text-cyan-200 bg-cyan-900/30 px-2 py-1 rounded border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botón (Solo si hay link) */}
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-auto flex items-center justify-center gap-2 py-3 rounded-lg bg-aztec-gold/10 border border-aztec-gold/30 text-aztec-gold font-semibold text-sm hover:bg-aztec-gold hover:text-dark-obsidian transition-all duration-300 group/btn"
          >
            Ver Proyecto
            <FaExternalLinkAlt className="text-xs transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>
        ) : (
          <div className="w-full py-3 text-center text-gray-600 text-sm italic border border-transparent">
            En desarrollo / Confidencial
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark-obsidian text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} // Duración de la aparición
          className="inline-flex items-center justify-center p-3 bg-aztec-gold/10 rounded-full mb-4"
        >
          {/* 2. Contenedor INTERNO: Se encarga de flotar infinitamente */}
          <motion.div
            animate={{ y: [0, -8, 0] }} // Se mueve 0px -> sube 8px -> vuelve a 0px
            transition={{
              duration: 2, // Tarda 2 segundos en completar el ciclo
              repeat: Infinity, // Se repite para siempre
              ease: "easeInOut", // Movimiento suave (no robótico)
            }}
          >
            <FaLaptopCode className="text-2xl text-aztec-gold" />
          </motion.div>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold font-aztec text-aztec-gold mb-12 text-center">
          Experiencia Profesional
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
