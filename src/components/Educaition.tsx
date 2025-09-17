import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  achievements: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Instituto Tecnológico de Morelia",
    date: "2022 - Cursando",
    achievements: [
      "Especialización en Desarrollo de Software.",
      "Proyecto de investigación e Innovación.",
      "Participación en concursos de proyectos tecnológicos.",
    ],
  },
  {
    degree: "Bachillerato Técnico en Ofimática",
    institution: 'CENTRO DE BACHILLERATO TECNOLÓGICO AGROPECUARIO 181',
    date: "2019 - 2022",
    achievements: [
      "Primer lugar en la Lógica y Matemáticas en el ITSCH.",
      "Desarrollo de páginas Web",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
} as const;

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 md:py-28 bg-dark-obsidian text-gray-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-aztec text-aztec-gold mb-16 text-center">
          Formación Académica
        </h2>
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="flex flex-col sm:flex-row bg-dark-obsidian/50 backdrop-blur-sm rounded-xl overflow-hidden border border-aztec-gold/20 transition-all duration-500 ease-in-out group-hover:border-aztec-gold/50 group-hover:shadow-2xl group-hover:shadow-aztec-gold/10 group-hover:-translate-y-2">
                <div className="flex-shrink-0 w-full sm:w-28 bg-aztec-brown/20 flex items-center justify-center p-4">
                  <FaGraduationCap className="text-5xl text-aztec-gold transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6 w-full">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-aztec-gold mt-1 sm:mt-0">
                      {item.date}
                    </p>
                  </div>
                  <p className="text-base text-gray-400 mb-2">
                    {item.institution}
                  </p>
                  <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-in-out group-hover:max-h-96 group-hover:opacity-100 group-hover:mt-4">
                    <ul className="space-y-2 text-sm list-disc list-inside text-gray-300">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
