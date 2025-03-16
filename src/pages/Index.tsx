
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <section id="how-it-works" className="py-20 px-6">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Próximamente
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cómo Funciona
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Estamos trabajando en esta sección. ¡Vuelve pronto para descubrir más detalles
              sobre cómo Gen Assist funciona y cómo puede transformar tu hogar!
            </p>
          </div>
        </section>
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Contáctanos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar tu hogar?
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
              Déjanos tus datos y nos pondremos en contacto contigo para
              ofrecerte más información sobre Gen Assist.
            </p>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <textarea 
                  placeholder="Mensaje (opcional)" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="w-full btn-primary">
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
