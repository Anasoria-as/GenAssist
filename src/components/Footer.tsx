
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-bold text-gradient">Gen Assist</a>
            <p className="mt-4 text-foreground/80 max-w-md">
              Transformando hogares comunes en espacios inteligentes 
              con tecnología avanzada y asistencia personalizada.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Inicio</a></li>
              <li><a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Características</a></li>
              <li><a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">Cómo Funciona</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-foreground/80">info@genassist.com</li>
              <li className="text-foreground/80">+34 900 123 456</li>
              <li className="text-foreground/80">Madrid, España</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Gen Assist. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
