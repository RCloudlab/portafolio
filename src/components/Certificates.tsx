import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import certificadoImage from '../assets/images/certificado.png';

const Certificate = () => {
  return (
    <section className="py-10 bg-dark-obsidian text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título pequeño separador */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-aztec-gold/30 flex-grow"></div>
          <h3 className="text-2xl font-aztec text-aztec-gold font-bold">
            Certificación Destacada
          </h3>
          <div className="h-px bg-aztec-gold/30 flex-grow"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-2xl overflow-hidden bg-dark-obsidian/50 border border-aztec-gold/30 hover:border-aztec-gold/60 transition-all duration-500 shadow-xl"
        >
          <div className="flex flex-col md:flex-row">
            {/* 1. SECCIÓN DE INFORMACIÓN (Izquierda) */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center relative z-10">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-aztec-gold/10 text-aztec-gold border border-aztec-gold/20">
                  <FaAward /> Certificado Oficial
                </span>
              </div>

              <h4 className="text-2xl font-bold text-white mb-2">
                Google Project Management
              </h4>

              <p className="text-aztec-gold font-semibold mb-4">
                Emitido por: Coursera
              </p>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Those who earn the Google Project Management Certificate have
                completed seven courses, developed by Google, that include
                handson, practice-based assessments and are designed to prepare
                them for introductory-level roles in Project Management.
              </p>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 font-mono">
                  Expedido: 2025
                </span>
                {/* Botón opcional si quieres ir a la web del certificado */}
                <a
                  href="https://www.coursera.org/account/accomplishments/professional-cert/certificate/M168E7RKK87B"
                  className="flex items-center gap-2 text-sm text-white hover:text-aztec-gold transition-colors underline decoration-aztec-gold/50 underline-offset-4"
                >
                  Ver credencial <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-gray-800">
              <div className="absolute inset-0 bg-aztec-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={certificadoImage}
                alt="Vista previa del certificado"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[30%] group-hover:grayscale-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
