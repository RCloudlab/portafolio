import { motion } from "framer-motion";
import Image1 from "../assets/images/Me1.jpg";
import Image2 from "../assets/images/Me2.jpg";
import Image3 from "../assets/images/Me3.jpg";
import Image4 from "../assets/images/Me4.jpg";


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
};

const About = () => {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <section id="about" className="py-20 md:py-28 bg-dark-obsidian text-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16"
        >
          <motion.div variants={itemVariants} className="w-full max-w-md lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 transform hover:scale-105 transition-transform duration-500 ease-in-out">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="group aspect-square rounded-lg shadow-lg overflow-hidden border-2 border-aztec-gold/20"
                >
                  <img
                    src={src}
                    alt={`Foto de Rodrigo Vega ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-aztec text-aztec-gold mb-6">
              Acerca de Mí
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                Soy <strong>Rodrigo Vega Espinoza</strong>, un apasionado desarrollador originario de Zitácuaro, Michoacán. Mi fascinación por la tecnología me impulsa a aprender y mejorar cada día.
              </p>
              <p>
                Mi objetivo es claro: <strong>crear, innovar y contribuir al mundo</strong> a través de soluciones de software que dejen una huella positiva y duradera.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;