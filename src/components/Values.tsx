import React from 'react';
import { Award, HeartHandshake, Users } from 'lucide-react';
import ScrollAnimation from './utils/ScrollAnimation';

interface ValueItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ValueItem: React.FC<ValueItemProps> = ({ title, description, icon, index }) => {
  return (
    <ScrollAnimation 
      animation="fade-in" 
      delay={index * 150}
      className="mb-24 last:mb-0"
    >
      <div className="flex flex-col md:flex-row items-start">
        <div className="md:w-1/12 mb-6 md:mb-0 flex-shrink-0">
          <div className="bg-white rounded-full p-5 w-20 h-20 shadow-lg flex items-center justify-center">
            <div className="text-black">
              {icon}
            </div>
          </div>
        </div>
        <div className="md:w-11/12 md:pl-8">
          <h3 className="text-4xl font-bold text-black mb-6">{title}</h3>
          <p className="text-gray-800 text-lg leading-relaxed max-w-3xl">{description}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Values: React.FC = () => {
  const valueItems = [
    {
      title: "L'EXCELLENCE",
      description: "Nos collaborateurs constituent le moteur de notre entreprise et de nos ambitions. Leur formation et niveau de compétence est un axe majeur de notre stratégie d'entreprise. Nous avons la plus ferme volonté de préserver une grande expertise sur notre domaine, qui reste en constante évolution.",
      icon: <Award size={36} strokeWidth={1.5} />
    },
    {
      title: "L'ESPRIT DE SERVICE",
      description: "L'accompagnement de nos clients en termes de délai, qualité et coût est notre préoccupation quotidienne. Comprendre vos problématiques, y apporter des solutions fait parti de notre ADN.",
      icon: <HeartHandshake size={36} strokeWidth={1.5} />
    },
    {
      title: "LA PROXIMITÉ",
      description: "Notre cherchons toujours une grande proximité avec votre entreprise et ses collaborateurs afin de mieux comprendre les enjeux qui vous préoccupent. Notre ambition est d'être des partenaires pertinents, force de proposition et de vous accompagner efficacement dans votre stratégie sur le long terme.",
      icon: <Users size={36} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-32 bg-blue-50 relative overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto transform rotate-180">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,176C384,192,480,224,576,229.3C672,235,768,213,864,192C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row mb-24">
          <div className="md:w-5/12">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-6xl md:text-7xl font-bold text-black mb-4 tracking-wide">
                LES VALEURS
              </h2>
            </ScrollAnimation>
          </div>
          
          <div className="md:w-7/12 md:pl-8">
            <ScrollAnimation animation="fade-in" delay={200}>
              <h3 className="text-3xl font-light mb-6 text-blue-600">qui animent notre quotidien</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Chez Axande, nous croyons fermement que des valeurs fortes sont le pilier d'une collaboration réussie. 
                Notre approche est centrée sur l'humain et guidée par des principes qui façonnent toutes nos interactions.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        
        <div className="mt-32">
          {valueItems.map((item, index) => (
            <ValueItem 
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values; 