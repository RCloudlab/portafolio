const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-obsidian border-t border-aztec-gold/20 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center text-sm">
            <p>&copy; {currentYear} Rodrigo Vega Espinoza. Todos los derechos reservados.</p>
            <a href="https://github.com/RCloudlab/portafolio.git" target="_blank" className="text-aztec-gold text-lg hover:underline">Link a el codigo</a>
            <p className="text-xs text-gray-500 mt-1">
              Forjado con React y Tailwind CSS
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;