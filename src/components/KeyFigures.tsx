import React from 'react';
import { EuroIcon, CalendarClock, Users } from 'lucide-react';
import ScrollAnimation from './utils/ScrollAnimation';
import CallToAction from './CallToAction';

interface FigureCardProps {
  icon: React.ReactNode;
  value: string;
  description: string;
  delay: number;
}

interface KeyFiguresProps {
  onNavigate: (page: string) => void;
}

const FigureCard: React.FC<FigureCardProps> = ({ icon, value, description, delay }) => {
  return (
    <ScrollAnimation animation="fade-in" delay={delay} className="h-full">
      <div className="bg-white rounded-lg border border-blue-200 shadow-sm p-8 h-full flex flex-col items-center text-center">
        <div className="mb-4 text-blue-600">
          {icon}
        </div>
        <div className="text-4xl font-bold text-black mb-3">{value}</div>
        <p className="text-gray-600">{description}</p>
      </div>
    </ScrollAnimation>
  );
};

const KeyFigures: React.FC<KeyFiguresProps> = ({ onNavigate }) => {
  const figures = [
    {
      icon: <EuroIcon size={36} strokeWidth={1.5} />,
      value: "18 M€",
      description: "notre chiffre d'affaires 2021."
    },
    {
      icon: <CalendarClock size={36} strokeWidth={1.5} />,
      value: "23 ANS",
      description: "que notre expertise vous accompagne dans vos projets. Entreprise fondée en 1998."
    },
    {
      icon: <Users size={36} strokeWidth={1.5} />,
      value: "148",
      description: "consultants passionnés à votre service."
    }
  ];

  return (
    <>
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Wave Divider - Top */}
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto transform rotate-180">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 mb-16">
            <div className="md:w-5/12">
              <ScrollAnimation animation="fade-in">
                <h2 className="text-6xl md:text-7xl font-bold text-black mb-4 tracking-wide">
                  CHIFFRES CLÉS
                </h2>
              </ScrollAnimation>
            </div>
            
            <div className="md:w-7/12">
              <ScrollAnimation animation="fade-in" delay={200}>
                <h3 className="text-2xl font-medium mb-4 text-blue-600">
                  Axande réalise un chiffre d'affaires de 3,8 M€ en 2021
                </h3>
                <p className="text-gray-600 text-lg">
                  Le groupe ABS
                </p>
              </ScrollAnimation>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {figures.map((figure, index) => (
              <FigureCard
                key={index}
                icon={figure.icon}
                value={figure.value}
                description={figure.description}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction onNavigate={onNavigate} />
    </>
  );
};

export default KeyFigures; 