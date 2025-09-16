// src/components/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Figma', icon: '🖌️' },
  { name: 'Python', icon: '🐍' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-aztec-brown bg-opacity-10 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-aztec text-aztec-gold mb-12">
          Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 3, boxShadow: '0 10px 15px -3px rgba(212,163,115,0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-dark-obsidian p-6 rounded-lg border border-aztec-gold cursor-pointer"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="font-bold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;