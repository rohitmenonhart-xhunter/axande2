import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import ScrollAnimation from './utils/ScrollAnimation';

interface NewsItemProps {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category?: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, image, excerpt, category }) => {
  return (
    <div className="h-full bg-white rounded-lg border border-gray-200 shadow-soft overflow-hidden transition-all duration-300 hover:shadow-medium">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
        {category && (
          <span className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-medium py-1 px-2">
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <a 
          href="#" 
          className="inline-flex items-center font-medium text-gray-900 hover:text-gray-700 transition-colors"
        >
          Lire la suite
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

interface NewsProps {
  onNavigate?: (page: string) => void;
}

const News: React.FC<NewsProps> = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;
  
  const handleScroll = () => {
    const newsListingSection = document.getElementById('news-listing');
    if (newsListingSection) {
      newsListingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // In a real app, you would fetch news for the selected page
  };

  return (
    <>
      {/* Hero Section with Wave Divider */}
      <div className="relative min-h-screen flex items-center pb-20 pt-24">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-gray-50 bg-opacity-70 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Nos{' '}
                <span className="relative text-gray-900">
                  Actualités
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-blue opacity-30 -z-10"></span>
                </span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={300}>
              <p className="text-gray-700 text-lg md:text-xl mb-8 mx-auto max-w-2xl">
                Restez informés des dernières nouvelles, événements et innovations dans le domaine de l'intelligence artificielle.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={400}>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  className="bg-gray-900 text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300"
                  onClick={handleScroll}
                >
                  Parcourir les articles
                </button>
                {onNavigate && (
                  <button 
                    className="border border-gray-300 text-gray-800 px-6 py-3 text-base font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300"
                    onClick={() => onNavigate('contact')}
                  >
                    Nous contacter
                  </button>
                )}
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

      {/* News Listing Section */}
      <section id="news-listing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="flex flex-col md:flex-row gap-10 mb-16">
              <div className="md:w-5/12">
                <h2 className="text-6xl md:text-7xl font-bold text-black mb-4 tracking-wide">
                  ARTICLES
                </h2>
              </div>
              
              <div className="md:w-7/12">
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  Nos dernières publications
                </h3>
                <p className="text-gray-600 text-lg">
                  Découvrez nos analyses, études de cas et points de vue sur l'évolution du monde de l'intelligence artificielle et du digital.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in" delay={100}>
              <NewsItem 
                title="L'évolution de l'IA générative en 2023: tendances et perspectives"
                date="15 mars 2023"
                image="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-126616.jpg"
                excerpt="Une analyse approfondie des avancées récentes en matière d'IA générative et leur impact sur les entreprises modernes."
                category="Intelligence Artificielle"
              />
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={200}>
              <NewsItem 
                title="Comment intégrer l'IA dans votre stratégie d'entreprise"
                date="2 février 2023"
                image="https://img.freepik.com/free-photo/business-people-discussing-charts_53876-102593.jpg"
                excerpt="Un guide pratique pour les dirigeants qui souhaitent transformer leur entreprise grâce à l'intelligence artificielle."
                category="Stratégie"
              />
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={300}>
              <NewsItem 
                title="Axande présent au salon VivaTech 2023"
                date="18 janvier 2023"
                image="https://img.freepik.com/free-photo/business-people-working-together-creative-office_23-2148485646.jpg"
                excerpt="Retrouvez notre équipe au plus grand salon européen dédié à l'innovation technologique et aux startups."
                category="Événement"
              />
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={400}>
              <NewsItem 
                title="Les défis éthiques de l'intelligence artificielle en entreprise"
                date="5 décembre 2022"
                image="https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2149300678.jpg"
                excerpt="Une réflexion sur les questions éthiques soulevées par le déploiement de l'IA dans les organisations."
                category="Éthique & IA"
              />
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={500}>
              <NewsItem 
                title="Comment l'IA transforme le secteur de la santé"
                date="20 novembre 2022"
                image="https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg"
                excerpt="Découvrez les applications concrètes de l'intelligence artificielle dans le domaine médical et leurs bénéfices."
                category="Santé"
              />
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={600}>
              <NewsItem 
                title="Le rôle de l'automatisation dans la transformation digitale"
                date="8 octobre 2022"
                image="https://img.freepik.com/free-photo/robotic-arm-working-factory_23-2149263246.jpg"
                excerpt="Comment l'automatisation intelligente peut accélérer la transformation digitale de votre entreprise."
                category="Automatisation"
              />
            </ScrollAnimation>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center mt-16">
            <button 
              className={`w-10 h-10 flex items-center justify-center mr-2 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ArrowLeft size={18} />
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button 
                key={index}
                className={`w-10 h-10 mx-1 rounded ${currentPage === index + 1 ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              className={`w-10 h-10 flex items-center justify-center ml-2 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Archives Button */}
          <div className="text-center mt-16">
            <a 
              href="#" 
              className="inline-flex items-center justify-center border border-gray-300 text-gray-900 px-6 py-3 text-base font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300"
            >
              Voir toutes nos archives
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default News; 