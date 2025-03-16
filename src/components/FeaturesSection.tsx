
import React, { useEffect, useRef } from 'react';
import { Plant, ShieldAlert, CloudRain, Home, Bot } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Plant,
      title: "Cuidado de Plantas",
      description: "Monitoreo y recomendaciones personalizadas para mantener tus plantas saludables y florecientes.",
      colorClass: "from-green-400 to-emerald-600"
    },
    {
      icon: ShieldAlert,
      title: "Seguridad del Hogar",
      description: "Alertas sobre ventanas abiertas y detección de actividad inusual para mantener tu hogar seguro.",
      colorClass: "from-blue-500 to-indigo-600"
    },
    {
      icon: CloudRain,
      title: "Gestión del Clima",
      description: "Avisos para recoger la ropa tendida si empieza a llover y recomendaciones climáticas inteligentes.",
      colorClass: "from-cyan-400 to-sky-600"
    },
    {
      icon: Home,
      title: "Automatización del Hogar",
      description: "Soporte en tareas domésticas sencillas para hacer tu vida diaria más cómoda y eficiente.",
      colorClass: "from-amber-400 to-orange-600"
    },
    {
      icon: Bot,
      title: "Asistente Virtual con IA",
      description: "Reproduce música, recuerda eventos del calendario y proporciona información en tiempo real.",
      colorClass: "from-genassist-violet to-genassist-pink"
    }
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">
            Características
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Una nueva forma de interactuar con tu hogar
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Gen Assist combina tecnología de vanguardia con inteligencia artificial 
            para transformar la manera en que vives en tu hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClass={feature.colorClass}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
