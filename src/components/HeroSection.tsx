
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollValue = window.scrollY;
      if (scrollValue < window.innerHeight) {
        const opacity = 1 - scrollValue / (window.innerHeight * 0.8);
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = `translateY(${scrollValue * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-genassist-violet/5 animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-genassist-pink/5 animate-pulse-slow delay-700"></div>
      </div>

      {/* Hero content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-6 pt-32 z-10 flex flex-col items-center justify-center text-center"
      >
        <div className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full animate-fade-in">
          <span className="text-primary font-medium">Tu hogar inteligente, más inteligente</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl leading-tight animate-slide-up">
          <span className="text-gradient">Gen Assist</span>
          <span className="block mt-2">El asistente para el hogar del futuro</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl animate-slide-up" style={{animationDelay: '0.1s'}}>
          Utiliza cámaras y sensores inteligentes para cuidar de tus plantas, 
          mantener tu hogar seguro, gestionar el clima y automatizar tareas domésticas,
          todo con la ayuda de inteligencia artificial.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <button className="btn-primary">
            <span>Comprar Ahora</span>
          </button>
          <button className="btn-primary bg-white !text-primary hover:bg-white/90">
            <span className="!text-primary">Saber Más</span>
          </button>
        </div>
        
        <div className="relative hidden md:block w-full max-w-4xl h-80 rounded-2xl shadow-2xl overflow-hidden animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-genassist-violet via-genassist-pink to-genassist-orange opacity-20"></div>
          <div className="absolute inset-0 glass-card flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-medium">Visualización del Dispositivo</p>
              <p className="text-foreground/60">Imagen representativa del Gen Assist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float"
      >
        <ChevronDown className="w-10 h-10 text-foreground/60" />
      </button>
    </div>
  );
};

export default HeroSection;
