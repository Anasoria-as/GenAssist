
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gradient">Gen Assist</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="nav-link">Características</a>
          <a href="#how-it-works" className="nav-link">Cómo Funciona</a>
          <a href="#contact" className="nav-link">Contacto</a>
          <button className="btn-primary">
            <span>Prueba Gratis</span>
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-4 animate-slide-down">
          <div className="container mx-auto flex flex-col space-y-4 px-6">
            <a 
              href="#features" 
              className="py-2 nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Características
            </a>
            <a 
              href="#how-it-works" 
              className="py-2 nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cómo Funciona
            </a>
            <a 
              href="#contact" 
              className="py-2 nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <button className="btn-primary self-start">
              <span>Prueba Gratis</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
