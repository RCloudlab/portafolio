const Footer = () => {

  return (
    <footer className="py-12  border-t border-brand-neon/20 text-center">
    <p className="text-brand-white/40 text-xs font-mono uppercase tracking-widest">
      © 2026 — Diseñado y codificado por Rodrigo Vega Espinoza
    </p>
    <div className="mt-4 flex justify-center gap-6 text-brand-white/20">
      <span className="text-[10px]">React + Vite + Tailwind</span>
      <span className="text-[10px]">Framer Motion</span>
    </div>
  </footer>
  );
};

export default Footer;