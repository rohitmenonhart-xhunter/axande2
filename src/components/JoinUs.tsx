import React from 'react';
import { ArrowRight, BadgeCheck, Briefcase, Users, LightbulbIcon, GraduationCap } from 'lucide-react';
import ScrollAnimation from './utils/ScrollAnimation';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  delay: number;
}

const JobCard: React.FC<JobCardProps> = ({ title, location, type, delay }) => {
  return (
    <ScrollAnimation 
      animation="slide-up" 
      delay={delay} 
      className="group"
    >
      <div className="card hover:bg-blue-50 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
            <div className="flex items-center text-gray-600">
              <span className="mr-3">{location}</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">{type}</span>
            </div>
          </div>
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-soft group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const JoinUs: React.FC = () => {
  const jobs = [
    { title: "Développeur Full Stack", location: "Paris", type: "CDI" },
    { title: "Data Engineer", location: "Lyon", type: "CDI" },
    { title: "Ingénieur ERP", location: "Marseille", type: "CDI" },
    { title: "Consultant CRM", location: "Nantes", type: "CDI" },
  ];

  const benefits = [
    { 
      icon: <BadgeCheck className="text-blue-600" size={24} />, 
      title: "Expertise reconnue", 
      description: "Rejoignez une entreprise reconnue pour son excellence technique" 
    },
    { 
      icon: <Briefcase className="text-blue-600" size={24} />, 
      title: "Projets variés", 
      description: "Travaillez sur des projets diversifiés avec des technologies de pointe" 
    },
    { 
      icon: <Users className="text-blue-600" size={24} />, 
      title: "Ambiance collaborative", 
      description: "Intégrez une équipe soudée et dynamique" 
    },
    { 
      icon: <LightbulbIcon className="text-blue-600" size={24} />, 
      title: "Innovation", 
      description: "Participez à des projets innovants qui façonnent le futur" 
    },
    { 
      icon: <GraduationCap className="text-blue-600" size={24} />, 
      title: "Formation continue", 
      description: "Développez vos compétences avec nos programmes de formation" 
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-cover bg-fixed bg-center" 
        style={{ 
          backgroundImage: 'url(https://www.axande.fr/wp-content/uploads/2022/12/slide-join-us.jpg)',
          opacity: 0.2
        }}>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-in" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-blue">REJOIGNEZ</span>
              <span className="block mt-2 text-gray-800">une équipe dynamique</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous cherchez à relever de nouveaux challenges ?<br/>
              Les projets informatiques liés à la DATA / ERP / CRM / BI vous passionnent ?<br/>
              Venez renforcer nos équipes et acquérir de nouvelles compétences...
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <ScrollAnimation animation="slide-right" className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-medium p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">?</span>
                </span>
                Pourquoi nous rejoindre ?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-50 p-2 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slide-left">
            <div className="bg-blue-texture rounded-2xl shadow-medium p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Offres d'emploi</h3>
              <p className="mb-8">
                Découvrez nos opportunités et rejoignez une équipe passionnée par l'innovation et l'excellence.
              </p>
              
              <div className="space-y-3">
                {jobs.map((job, index) => (
                  <JobCard 
                    key={index}
                    title={job.title}
                    location={job.location}
                    type={job.type}
                    delay={index * 100}
                  />
                ))}
              </div>
              
              <button className="btn bg-white text-blue-600 hover:bg-blue-50 font-semibold mt-6 w-full">
                Voir toutes nos offres <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="flex justify-center">
          <ScrollAnimation animation="fade-in" delay={300} className="text-center">
            <button className="btn btn-primary">
              En savoir plus
            </button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default JoinUs; 