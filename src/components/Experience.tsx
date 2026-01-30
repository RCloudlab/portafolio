import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaLock } from "react-icons/fa";
import { ChevronRight, Layers } from "lucide-react";
import React from 'react';

import nayalogo from "../assets/images/nayaLogo.png";
import itmLogo from "../assets/images/SIMLogo.png";
import ObradorCortes from "../assets/images/ObradorCortesLogo.png";
import TaqueriaChaman from "../assets/images/TaqueriaElChaman.png";
import MindfulLogo from "../assets/images/MindfulLogo.png";

const experienceData = [
  {
    title: "Nayá",
    company: "Nayá Corporativo",
    date: "2025 - Presente",
    description:
      "Liderazgo técnico en el desarrollo de una aplicación móvil enfocada en gestión emocional infantil, con arquitectura escalable y enfoque en experiencia de usuario y mantenibilidad.",
    tech: ["React Native", "Python", "AWS"],
    image: nayalogo,
    link: "https://naya-website.vercel.app/",
    type: "EdTech / Social Impact"
  },
  {
    title: "Obrador Cortés",
    company: "Industrializadora Michoacana",
    date: "2025",
    description:
      "Desarrollo de plataforma web corporativa orientada a presentación de catálogo, optimización de rendimiento y conversión comercial.",
    tech: ["React", "Tailwind", "Vercel"],
    image: ObradorCortes,
    link: "https://obradorcortes.vercel.app/",
    type: "Corporate Web"
  },
  {
    title: "SIM",
    company: "Tecnológico Nacional de México",
    date: "2024 - 2025",
    description:
      "Modernización de sistema institucional para gestión académica, optimizando tiempos de respuesta, estructura de datos y estabilidad operativa.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: itmLogo,
    link: "https://sim.morelia.tecnm.mx/",
    type: "Institutional System"
  },
  {
    title: "Taquería El Chamán",
    company: "Proyecto Comercial",
    date: "2025",
    description:
      "Implementación de presencia digital optimizada para dispositivos móviles, enfocada en experiencia de usuario y captación de clientes.",
    tech: ["React", "Figma", "Tailwind"],
    image: TaqueriaChaman,
    link: "https://taqueriaselchaman.vercel.app/",
    type: "Commercial Landing"
  },
  {
    title: "MindFulTOC",
    company: "CodeServe",
    date: "2024",
    description:
      "Diseño de arquitectura móvil orientada a soporte terapéutico, priorizando accesibilidad, seguridad de información y estructura escalable.",
    tech: ["React Native", "MySQL", "Node.js"],
    image: MindfulLogo,
    type: "HealthTech"
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ item, index }: { item: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
      className="group relative bg-brand-surface rounded-[2.5rem] p-6 sm:p-8 flex flex-col md:flex-row gap-8 border border-brand-neon/20 hover:border-brand-electric/40 transition-colors"
    >
      {/* Glow */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(0,71,171,0.15), transparent 70%)`,
        }}
        className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      />

      {/* Image */}
      <div
        className="w-full md:w-56 h-48 sm:h-56 rounded-[2rem] overflow-hidden shrink-0 bg-brand-dark"
        style={{ transform: "translateZ(60px)" }}
      >
        <img src={item.image} alt={item.title} className="w-full h-full object-contain bg-white" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow" style={{ transform: "translateZ(40px)" }}>
        <div>
          <span className="text-[10px] font-bold text-brand-electric uppercase tracking-widest bg-brand-electric/10 px-3 py-1 rounded-full">
            {item.type}
          </span>

          <h4 className="text-2xl sm:text-3xl font-black text-brand-white mt-4 mb-1">
            {item.title}
          </h4>

          <p className="text-brand-electric/50 text-[10px] font-bold uppercase tracking-widest mb-4">
            {item.company}
          </p>

          <p className="text-brand-muted text-sm leading-relaxed font-light">
            {item.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {item.tech.map((t: string, i: number) => (
            <span key={i} className="text-[10px] font-bold text-brand-white/50 border border-brand-negro/10 px-3 py-1 rounded-full bg-brand-dark/50">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          {item.link ? (
            <a href={item.link} target="_blank" className="inline-flex items-center gap-2 text-brand-white text-xs font-black hover:text-brand-electric">
              VER PROYECTO <ChevronRight size={16} />
            </a>
          ) : (
            <span className="flex items-center gap-2 text-brand-white/30 text-[10px] font-bold italic">
              <FaLock size={10} /> PROYECTO CONFIDENCIAL
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-24 overflow-visible">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="mb-16 max-w-xl">
          <motion.div className="w-fit bg-brand-electric/10 p-3 rounded-2xl mb-6 text-brand-electric">
            <Layers size={24} />
          </motion.div>

          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-white tracking-tighter uppercase leading-none">
            Experiencia <br />
            <span className="text-brand-electric italic font-light">Profesional</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 overflow-visible">
          {experienceData.map((item, index) => (
            <ProjectCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
