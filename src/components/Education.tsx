import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Instituto Tecnológico de Morelia",
    date: "2022 - Cursando",
    achievements: ["Especialización en Software", "Investigación e Innovación"],
  },
  {
    degree: "Bachillerato Técnico en Ofimática",
    institution: "CBTA 181",
    date: "2019 - 2022",
    achievements: ["1er Lugar Lógica y Matemáticas", "Desarrollo Web"],
  },
];

const Education = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl sm:text-3xl font-black text-brand-white mb-10 flex items-center gap-3">
        <GraduationCap className="text-brand-electric" />
        Formación
      </h3>

      <div className="relative space-y-12 before:absolute before:top-0 before:left-4 md:before:left-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-electric before:via-brand-electric/20 before:to-transparent">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex md:justify-between md:items-start md:odd:flex-row-reverse"
          >
            {/* Icono */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-brand-dark bg-brand-electric text-white shadow z-10">
              <Calendar size={16} />
            </div>

            {/* Card */}
            <div className="ml-12 md:ml-0 md:w-[46%] p-6 rounded-2xl bg-brand-surface border border-brand-neon/20 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] font-bold text-brand-electric uppercase tracking-wide">
                {item.date}
              </span>

              <h4 className="text-lg font-bold text-brand-white mt-1">
                {item.degree}
              </h4>

              <p className="text-sm text-brand-white/50 mb-4">
                {item.institution}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.achievements.map((ach, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-brand-dark px-2 py-1 rounded-md font-semibold text-brand-muted"
                  >
                    {ach}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
