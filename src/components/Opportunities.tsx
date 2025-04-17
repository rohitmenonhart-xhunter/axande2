import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface OpportunitiesProps {
  onNavigate?: (page: string) => void;
}

interface ScrollAnimationProps {
  animation: string;
  delay?: number;
  className?: string;
  children: React.ReactNode;
  threshold?: number;
}

// Improved ScrollAnimation component to match the one in other components
const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  animation, 
  delay = 0, 
  className = '', 
  children,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay the visibility change if needed
          if (delay) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
          // Once it's visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return isVisible ? 'animate-fade-in' : 'opacity-0';
      case 'slide-up':
        return isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8';
      case 'slide-down':
        return isVisible ? 'animate-slide-down' : 'opacity-0 -translate-y-8';
      case 'slide-left':
        return isVisible ? 'animate-slide-left' : 'opacity-0 translate-x-8';
      case 'slide-right':
        return isVisible ? 'animate-slide-right' : 'opacity-0 -translate-x-8';
      case 'staggered':
        return isVisible ? 'staggered-appear is-visible' : 'staggered-appear';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ 
        animationDelay: delay ? `${delay}ms` : undefined,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

interface JobListingProps {
  title: string;
  description: string;
  skills: string[];
  delay?: number;
}

const JobListing: React.FC<JobListingProps> = ({ title, description, skills, delay = 0 }) => {
  return (
    <ScrollAnimation
      animation="slide-up"
      delay={delay}
      className="h-full"
    >
      <div className="bg-white rounded-lg border border-blue-200 shadow-soft p-8 h-full flex flex-col group">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {skills.map((skill, index) => (
            <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
        <button className="bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-300 rounded-md flex items-center w-fit">
          Voir l'offre
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </ScrollAnimation>
  );
};

const Opportunities: React.FC<OpportunitiesProps> = ({ onNavigate }) => {
  const handleScroll = () => {
    const jobSection = document.getElementById('job-listings');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jobListings = [
    {
      title: 'TECHNICO-FONCTIONNEL ORACLE EBS R12 – ORACLE ERP CLOUD H/F',
      description: 'Nous recherchons un consultant technico-fonctionnel ayant les connaissances suivantes :',
      skills: ['Modules GL/AP/AR', 'PL/SQL', 'Bonne connaissance du modèle de données R12 Finance', 'Oracle']
    },
    {
      title: 'CONCEPTEUR MICROSOFT POWER BI / SSAS – SSIS',
      description: 'Piloter et concevoir des projets avec les technologies Microsoft POWER BI',
      skills: ['BI', 'SQL', 'Microsoft Power BI', 'SQL Server', 'SSAS', 'SSIS']
    },
    {
      title: 'CONSULTANT MDM (H/F)',
      description: 'Pour les éditeurs en MDM Informatica',
      skills: ['ETL', 'DataPower', 'Informatica', 'MDM']
    },
    {
      title: 'DÉVELOPPEUR / CHEF DE PROJET SAS',
      description: "Pour les passionnés de conception d'applications avec le langage SAS...",
      skills: ['Enterprise SAS']
    },
    {
      title: 'CHEF DE PROJET PYTHON / R',
      description: 'Participer aux projets techniques et statistiques dans la DATA',
      skills: ['Python R']
    },
    {
      title: 'SUPPORT TECHNICO / FONCTIONNEL SQL SERVER',
      description: 'Support Technico/fonctionnel sous SQL Server',
      skills: ['SQL', 'Databases', 'Microsoft', 'SQL Server']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pb-20 pt-24">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-gray-50 bg-opacity-70 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Carrières et{' '}
                <span className="relative text-gray-900">
                  opportunités
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-blue opacity-30 -z-10"></span>
                </span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={300}>
              <p className="text-gray-700 text-lg md:text-xl mb-8 mx-auto max-w-2xl">
                AXANDE, une Entreprise des Services Numériques à taille humaine qui recrute tous ses talents sans autre critère que celui de l'excellence.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={400}>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  className="bg-gray-900 text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300"
                  onClick={handleScroll}
                >
                  Voir nos offres
                </button>
                <button 
                  className="border border-gray-300 text-gray-800 px-6 py-3 text-base font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300"
                  onClick={() => onNavigate ? onNavigate('contact') : null}
                >
                  Postuler
                </button>
              </div>
            </ScrollAnimation>
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none"
              onClick={handleScroll}
            >
              <ChevronDown className="text-gray-700" size={24} />
            </button>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-12 md:h-16 lg:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#f9fafb"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#f9fafb"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </div>

      {/* Talent Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-in">
            <div className="flex flex-col md:flex-row gap-10 mb-16">
              <div className="md:w-5/12">
                <h2 className="text-6xl md:text-7xl font-bold text-black mb-4 tracking-wide">
                  VOS TALENTS
                </h2>
              </div>
              
              <div className="md:w-7/12">
                <h3 className="text-2xl font-medium mb-4 text-blue-600">
                  Développez votre potentiel
                </h3>
                <p className="text-gray-600 text-lg">
                  Envoyez-nous votre CV et rejoignez une équipe de professionnels passionnés par l'innovation et l'excellence.
                  Découvrez nos opportunités pour développer votre carrière dans un environnement innovant et dynamique.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slide-up">
            <div className="bg-white rounded-2xl shadow-medium p-8 md:p-12 relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-300 rounded-xl rotate-12 opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full opacity-10"></div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
                  <img 
                    src={`${import.meta.env.BASE_URL}logo.png`}
                    alt="Axande - Logo" 
                    className="mx-auto md:mx-0 h-16 mb-6"
                  />
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">La diversité, notre richesse</h3>
                  <p className="text-gray-600 mb-4">
                    Le groupe ABS est signataire de la charte sur la diversité.
                  </p>
                  <p className="text-gray-600">
                    Les collaborateurs constituent la principale richesse de l'Entreprise.
                    Axande recrute tous ses talents sans autre critère que celui de l'excellence.
                  </p>
                </div>
                
                <div className="md:w-1/2 md:pl-8 md:border-l border-gray-200 flex justify-center">
                  <img 
                    src="https://www.axande.fr/wp-content/uploads/2022/12/charte-diversite-logopng-1.png" 
                    alt="Charte de la diversité" 
                    className="h-32"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Job Listings */}
      <section id="job-listings" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-in" className="mb-16">
            <div className="flex flex-col md:flex-row gap-10 mb-16">
              <div className="md:w-5/12">
                <h2 className="text-6xl md:text-7xl font-bold text-black mb-4 tracking-wide">
                  NOS OFFRES
                </h2>
              </div>
              
              <div className="md:w-7/12">
                <h3 className="text-2xl font-medium mb-4 text-blue-600">
                  Permanentes et ponctuelles
                </h3>
                <p className="text-gray-600 text-lg">
                  Découvrez nos opportunités pour développer votre carrière dans un environnement innovant et dynamique.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job, index) => (
              <JobListing 
                key={index} 
                title={job.title} 
                description={job.description} 
                skills={job.skills} 
                delay={index * 100}
              />
            ))}
          </div>

          <ScrollAnimation animation="fade-in" delay={800} className="mt-16 text-center">
            <button className="bg-gray-900 text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300">
              Toutes nos offres <ArrowRight size={16} className="ml-2" />
            </button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Opportunities; 