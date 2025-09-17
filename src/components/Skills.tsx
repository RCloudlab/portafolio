import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaLaravel, FaGitAlt, FaGithub, FaGitlab, FaFigma, FaDocker, FaJira, FaTrello 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNestjs, SiKotlin, SiFastapi, SiPostgresql, SiSupabase, SiSqlite, SiPostman, SiNotion 
} from 'react-icons/si';
import { DiDatabase } from "react-icons/di";
import { BsFilm } from "react-icons/bs";

const skillsBySection = [
    {
      title: 'Frontend & Mobile',
      skills: [
        { name: 'React', icon: <FaReact />, url: 'https://react.dev/' },
        { name: 'React Native', icon: <FaReact />, url: 'https://reactnative.dev/' },
        { name: 'JavaScript', icon: <SiJavascript />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'TypeScript', icon: <SiTypescript />, url: 'https://www.typescriptlang.org/' },
        { name: 'Kotlin', icon: <SiKotlin />, url: 'https://kotlinlang.org/' },
        { name: 'Nest.js', icon: <SiNestjs />, url: 'https://nestjs.com/' },
        { name: 'HTML5', icon: <SiHtml5 />, url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
        { name: 'CSS3', icon: <SiCss3 />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, url: 'https://tailwindcss.com/' },
      ],
    },
    {
      title: 'Backend y Bases de Datos',
      skills: [
          { name: 'Node.js', icon: <FaNodeJs />, url: 'https://nodejs.org/' },
          { name: 'Python', icon: <FaPython />, url: 'https://www.python.org/' },
          { name: 'FastAPI', icon: <SiFastapi />, url: 'https://fastapi.tiangolo.com/' },
          { name: 'Java', icon: <FaJava />, url: 'https://www.java.com/' },
          { name: 'PHP', icon: <FaPhp />, url: 'https://www.php.net/' },
          { name: 'Laravel', icon: <FaLaravel />, url: 'https://laravel.com/' },
          { name: 'SQL', icon: <DiDatabase />, url: 'https://en.wikipedia.org/wiki/SQL' },
          { name: 'PostgreSQL', icon: <SiPostgresql />, url: 'https://www.postgresql.org/' },
          { name: 'Supabase', icon: <SiSupabase />, url: 'https://supabase.io/' },
          { name: 'SQLite', icon: <SiSqlite />, url: 'https://www.sqlite.org/' },
      ],
    },
    {
      title: 'Herramientas y Diseño',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, url: 'https://git-scm.com/' },
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/' },
        { name: 'GitLab', icon: <FaGitlab />, url: 'https://gitlab.com/' },
        { name: 'Figma', icon: <FaFigma />, url: 'https://www.figma.com/' },
        { name: 'Docker', icon: <FaDocker />, url: 'https://www.docker.com/' },
        { name: 'Postman', icon: <SiPostman />, url: 'https://www.postman.com/' },
        { name: 'Notion', icon: <SiNotion />, url: 'https://www.notion.so/' },
        { name: 'Jira', icon: <FaJira />, url: 'https://www.atlassian.com/software/jira' },
        { name: 'Trello', icon: <FaTrello />, url: 'https://trello.com/' },
        { name: 'OBS', icon: <BsFilm />, url: 'https://filmora.wondershare.com/' },
      ],
    },
  ];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } } as const;
const itemVariants = { hidden: { y: 20, opacity: 0, scale: 0.8 }, visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } } } as const;

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-28 bg-dark-obsidian overflow-hidden">
      <div className="absolute top-0 -left-20 w-64 h-64 md:w-96 md:h-96 bg-aztec-gold/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-64 h-64 md:w-96 md:h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-aztec text-aztec-gold mb-4 text-center">
              Mi Arsenal de Tecnologías
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 md:mb-16 text-center max-w-3xl mx-auto">
              Desde el diseño de interfaces hasta la implementación de servidores, estas son las herramientas que utilizo para construir el futuro.
            </p>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {skillsBySection.map((section) => (
            <div key={section.title}>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 md:mb-8 text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                {section.title}
              </motion.h3>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6" 
                variants={containerVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.2 }}
              >
                {section.skills.map((skill) => (
                  <motion.a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotateY: 15, boxShadow: '0px 15px 30px -5px rgba(212, 163, 115, 0.4)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="group rounded-xl p-1 bg-gradient-to-br from-aztec-gold/50 to-transparent"
                  >
                    <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 h-full rounded-lg bg-dark-obsidian/80 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-dark-obsidian">
                        <motion.div 
                            className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-gray-300 transition-colors duration-300 group-hover:text-aztec-gold"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                            {skill.icon}
                        </motion.div>
                      <p className="font-bold text-sm sm:text-base text-gray-200">{skill.name}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;