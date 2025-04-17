import React from 'react';
import { Database, BarChart3, Code2, Users, Server, Globe } from 'lucide-react';
import ScrollAnimation from './utils/ScrollAnimation';

interface StrategyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ title, description, icon, delay }) => {
  return (
    <ScrollAnimation 
      animation="slide-up" 
      delay={delay} 
      className="card p-6 hover:border-l-4 hover:border-blue-500 group"
    >
      <div className="mb-4 flex items-center">
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <div className="text-blue-600">
            {icon}
          </div>
        </div>
        <h3 className="ml-4 text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </ScrollAnimation>
  );
};

const Strategy: React.FC = () => {
  const strategies = [
    {
      title: "Data",
      description: "Nous vous accompagnons dans le traitement de vos données pour une meilleure prise de décision.",
      icon: <Database size={24} />,
    },
    {
      title: "ERP",
      description: "Solutions de gestion d'entreprise intégrées pour optimiser vos processus métier.",
      icon: <Server size={24} />,
    },
    {
      title: "CRM",
      description: "Gérez efficacement vos relations clients pour développer votre activité.",
      icon: <Users size={24} />,
    },
    {
      title: "Support",
      description: "Transformation des fonctions support pour améliorer l'efficacité de votre entreprise.",
      icon: <Globe size={24} />,
    },
    {
      title: "Business Intelligence",
      description: "Prenez des décisions éclairées grâce à nos outils de BI qui transforment les données complexes en visualisations claires.",
      icon: <BarChart3 size={24} />,
    },
    {
      title: "Développement",
      description: "Nos développeurs créent des solutions sur mesure pour répondre parfaitement à vos besoins spécifiques.",
      icon: <Code2 size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 opacity-50 clip-path-polygon-bl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-in" className="mb-16">
          <div className="flex flex-col md:flex-row items-start mb-12">
            <h2 className="section-title md:w-1/3 mb-6 md:mb-0">
              <span className="text-gray-800 font-bold">NOTRE STRATÉGIE</span>
            </h2>
            <div className="md:w-2/3">
              <h3 className="section-subtitle">Une forte valeur ajoutée sur vos projets</h3>
              <p className="text-gray-600 mb-4 text-lg">
                Que ce soit dans les domaines de la <strong className="text-blue-600">DATA</strong>, 
                des <strong className="text-blue-600">ERP</strong>, 
                des solutions <strong className="text-blue-600">CRM</strong> et de la 
                transformation des fonctions <strong className="text-blue-600">SUPPORT</strong>, 
                nous accompagnons nos clients depuis plus de 20 ans…
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="staggered" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <StrategyCard
              key={index}
              title={strategy.title}
              description={strategy.description}
              icon={strategy.icon}
              delay={index * 100}
            />
          ))}
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={400} className="mt-16 text-center">
          <button className="btn btn-primary">
            Découvrir nos services
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Strategy; 