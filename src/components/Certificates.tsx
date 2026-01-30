import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import certificadoImage from '../assets/images/Certificado.png';

const Certificates = () => {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-black text-brand-white mb-8 flex items-center gap-3">
        <ShieldCheck className="text-brand-neon" /> Certificaciones
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="group bg-brand-surface rounded-[2rem] overflow-hidden border border-brand-neon/20 shadow-sm hover:hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-500"
      >
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={certificadoImage} 
            alt="Google Certificate" 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 group-hover:opacity-80 hover:opacity-100-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-brand-electric/10 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-brand-neon/10 text-brand-neon text-[10px] font-bold px-3 py-1 rounded-full border border-brand-neon/20">
              GOOG-PROJ-MGMT
            </span>
          </div>
          
          <h4 className="text-2xl font-black text-brand-white mb-2">Google Project Management</h4>
          <p className="text-brand-white/60 text-sm leading-relaxed mb-6 font-light">
            Especialización en metodologías Ágiles (Scrum), Waterfall y gestión de riesgos, aplicada al desarrollo de software de alto impacto.
          </p>

          <a 
            href="https://www.coursera.org/account/accomplishments/professional-cert/certificate/M168E7RKK87B"
            target="_blank"
            className="flex items-center justify-between p-4 rounded-xl bg-brand-dark hover:bg-brand-electric hover:text-white transition-all group/link"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Ver credencial oficial</span>
            <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Certificates;