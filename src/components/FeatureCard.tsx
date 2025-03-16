
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, colorClass, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`feature-icon-wrapper ${colorClass}`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/80 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
