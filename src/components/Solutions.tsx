import React from 'react';
import { ArrowRight, BookOpen, Database, Server, Users, ChevronDown } from 'lucide-react';
import ScrollAnimation from './utils/ScrollAnimation';

interface SolutionsProps {
  onNavigate?: (page: string) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onNavigate }) => {
  const handleScroll = () => {
    const solutionsSection = document.getElementById('solutions-detail');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero section */}
      <div className="relative min-h-screen flex items-center pb-20 pt-24">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-gray-50 bg-opacity-70 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Solutions{' '}
                <span className="relative text-gray-900">
                  d'intelligence
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-blue opacity-30 -z-10"></span>
                </span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={300}>
              <p className="text-gray-700 text-lg md:text-xl mb-8 mx-auto max-w-2xl">
                Votre satisfaction et la réussite de vos projets sont nos engagements. Nous vous accompagnons dans tous vos projets informatiques.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={400}>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  className="bg-gray-900 text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300"
                  onClick={handleScroll}
                >
                  Explorer nos solutions
                </button>
                <button 
                  className="border border-gray-300 text-gray-800 px-6 py-3 text-base font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300"
                  onClick={() => onNavigate ? onNavigate('contact') : null}
                >
                  Nous contacter
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
      
      {/* Main content section */}
      <section id="solutions-detail" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="flex flex-col md:flex-row gap-10 mb-16">
              <div className="md:w-5/12">
                <h2 className="text-6xl md:text-7xl font-bold text-black mb-4 tracking-wide">
                  NOTRE MÉTIER
                </h2>
              </div>
              
              <div className="md:w-7/12">
                <h3 className="text-2xl font-medium mb-4 text-blue-600">
                  Ingénierie en DATA, CRM, ERP
                </h3>
                <p className="text-gray-600 text-lg">
                  Nous sommes spécialistes dans la mise en œuvre des ERP et des solutions d'aide à la décision.
                  Nos interventions couvrent les fonctions de SME (Subject Matter Expert), PMO, Project Manager, 
                  Intervenants Technico-Fonctionnels et développeurs.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="slide-up" delay={100} className="h-full">
              <div className="bg-white rounded-lg border border-blue-200 shadow-soft p-8 h-full flex flex-col">
                <div className="mb-4 text-blue-600">
                  <Database size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">DATA</h3>
                <p className="text-gray-600 flex-grow">
                  Nous vous accompagnons dans le traitement de vos données pour une meilleure prise de décision.
                </p>
                <a href="#data" className="text-blue-600 hover:text-blue-800 mt-4 flex items-center text-sm font-medium">
                  En savoir plus <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={200} className="h-full">
              <div className="bg-white rounded-lg border border-blue-200 shadow-soft p-8 h-full flex flex-col">
                <div className="mb-4 text-blue-600">
                  <Server size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">ERP</h3>
                <p className="text-gray-600 flex-grow">
                  Solutions de gestion d'entreprise intégrées pour optimiser vos processus métier.
                </p>
                <a href="#erp" className="text-blue-600 hover:text-blue-800 mt-4 flex items-center text-sm font-medium">
                  En savoir plus <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={300} className="h-full">
              <div className="bg-white rounded-lg border border-blue-200 shadow-soft p-8 h-full flex flex-col">
                <div className="mb-4 text-blue-600">
                  <Users size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">CRM</h3>
                <p className="text-gray-600 flex-grow">
                  Gérez efficacement vos relations clients pour développer votre activité.
                </p>
                <a href="#crm" className="text-blue-600 hover:text-blue-800 mt-4 flex items-center text-sm font-medium">
                  En savoir plus <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={400} className="h-full">
              <div className="bg-white rounded-lg border border-blue-200 shadow-soft p-8 h-full flex flex-col">
                <div className="mb-4 text-blue-600">
                  <BookOpen size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise Sourcing</h3>
                <p className="text-gray-600 flex-grow">
                  Recrutement spécialisé de talents pour vos projets informatiques.
                </p>
                <a href="#sourcing" className="text-blue-600 hover:text-blue-800 mt-4 flex items-center text-sm font-medium">
                  En savoir plus <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* DATA Section */}
          <div id="data" className="mt-24">
            <ScrollAnimation animation="fade-in">
              <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-blue-600">DATA</h2>
                
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    Les méga volumes de données offrent d'innombrables opportunités pour les entreprises de tous les secteurs, mais représentent aussi un nouveau défi à relever.
                  </p>
                  <p className="mb-6">
                    Pour exploiter ces informations, les administrer (gestion des données de référence), les analyser, les valoriser et s'en servir pour prendre de meilleures décisions, les organisations ont besoin de nouveaux outils, technologies et compétences.
                  </p>
                  <p className="mb-6">
                    ABE peut vous accompagner sur les solutions de BI, SAP, Microsoft, MicroStrategy, Cognos, Tableau, Informatica, Talend, Tibco...
                  </p>
                  
                  <div className="mt-8 space-y-3">
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium">
                      <ArrowRight size={14} className="mr-1" />
                      Migration SAP vers R/Python
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium">
                      <ArrowRight size={14} className="mr-1" />
                      Cognos Analytics
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* ERP Section */}
          <div id="erp" className="mt-12">
            <ScrollAnimation animation="fade-in">
              <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-blue-600">ERP</h2>
                
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    Centraliser, rationaliser, partager et exploiter les informations de l'entreprise est devenu un enjeu majeur de compétitivité. L'ERP qu'il soit en mode SAAS ou traditionnel, généraliste ou spécialisé, est l'outil permettra aux entreprises d'atteindre ces objectifs.
                  </p>
                  <p className="mb-6">
                    ABE accompagne ses clients depuis près de 30 ans sur l'implémentation d'ERP tels SAP ECC, S/4Hana, Oracle EBS R12, Oracle Fusion Cloud, Oracle HCM Cloud.
                  </p>
                  <p className="mb-6">
                    Nous couvrons dans ces domaines les aspects finances, supply chain, manufacturing, ressources humaines.
                  </p>
                  
                  <div className="mt-8">
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium">
                      <ArrowRight size={14} className="mr-1" />
                      TMA Oracle E-Business Suite R12
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* CRM Section */}
          <div id="crm" className="mt-12">
            <ScrollAnimation animation="fade-in">
              <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-blue-600">CRM</h2>
                
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    Connaître ses clients afin de les fidéliser, personnaliser les échanges pour les convertir un enjeu majeur pour les entreprises. Disposer d'outils pour suivre un processus de communication multicanal afin diffuser et analyser l'information devient essentiel pour les équipes marketing, BtB (l'automatisation de la force de vente) ainsi que la relation client.
                  </p>
                  <p className="mb-6">
                    Nous vous accompagnons autour des solutions Oracle, Microsoft, Salesforce...
                  </p>
                  
                  <div className="mt-8 space-y-3">
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium">
                      <ArrowRight size={14} className="mr-1" />
                      Microsoft Dynamics
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium">
                      <ArrowRight size={14} className="mr-1" />
                      SAP C4C ou HANA
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium">
                      <ArrowRight size={14} className="mr-1" />
                      Salesforce VTI Focus
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* Enterprise Sourcing Section */}
          <div id="sourcing" className="mt-12">
            <ScrollAnimation animation="fade-in">
              <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-blue-600">Enterprise Sourcing</h2>
                
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    Axande dispose d'une équipe expérimentée, fiable et passionnée, proposant des candidats de haute qualité directement adaptés à votre environnement.
                  </p>
                  <p className="mb-6">
                    Nous identifions pour nos clients les profils professionnels spécialisés et à leur demande, au fil du déroulement de leurs projets ERP, CRM, DATA et de transformation.
                  </p>
                  <p className="mb-6">
                    Nous sommes spécialisés dans la fourniture de l'expertise fonctionnelle dont vous avez besoin, quelle que soit votre industrie spécifique - que ce soit en gestion de portefeuille projets ou en expertise fonctionnelle ou technique -, afin que vous puissiez atteindre vos objectifs en matière de transformation.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions; 