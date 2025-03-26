import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, Calendar } from 'lucide-react';
import ScrollAnimation from './utils/ScrollAnimation';

interface NewsItemProps {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  delay?: number;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, excerpt, category, delay = 0 }) => {
  return (
    <ScrollAnimation animation="slide-up" delay={delay} className="group h-full">
      <div className="bg-white rounded-lg shadow-soft transition-all duration-300 overflow-hidden hover:shadow-medium hover:-translate-y-1 h-full flex flex-col border-t-4 border-blue-500">
        <div className="p-6 flex flex-col h-full">
          <div className="mb-4 flex items-center text-sm text-blue-500">
            <Calendar size={16} className="mr-2" />
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{category}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{excerpt}</p>
          <div className="mt-auto">
            <button className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors">
              Lire la suite
              <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsItems = [
    {
      title: "NOVEMBRE 2021 – AXANDE REJOINT ABS TECHNOLOGIES",
      date: "27 octobre 2022",
      excerpt: "Spécialisée en Monétique, Moyens de Paiement, Analyses statistiques et Data Mining, ABS Technologies continue sa diversification sur l'implémentation de solutions CRM, ERP, BUSINESS INTELLIGENCE, BIG DATA et développement d'applications mobiles.",
      category: "Événements Axande"
    },
    {
      title: "AXANDE PARTENAIRE DE SALESFORCE",
      date: "15 septembre 2022",
      excerpt: "Axande devient partenaire officiel de Salesforce pour proposer des solutions CRM innovantes à ses clients. Notre équipe d'experts certifiés accompagne les entreprises dans leur transformation digitale.",
      category: "Partenariats"
    },
    {
      title: "NOUVELLE CERTIFICATION ISO 27001",
      date: "3 juillet 2022",
      excerpt: "Axande obtient la certification ISO 27001, confirmant notre engagement pour la sécurité des données et la protection des informations sensibles de nos clients et partenaires.",
      category: "Certifications"
    }
  ];

  return (
    <>
      {/* Hero Section with Wave Divider */}
      <section className="relative bg-blue-texture pt-24 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-blue-900/40 to-transparent"></div>
          <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="slide-up" className="flex flex-col items-start mt-16">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              Actualités
            </h1>
            <div className="w-20 h-1 bg-blue-400 mb-6"></div>
            <div className="max-w-xl">
              <p className="text-blue-100 text-xl mt-2">
                Toute l'actualité d'Axande
              </p>
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#f9fafb" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,176C640,160,800,96,960,80C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* News Navigation */}
      <section className="bg-gray-50 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="flex justify-between items-center border-b border-gray-200 py-4">
              <div className="flex items-center space-x-6">
                <button className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                  <ArrowLeft size={18} className="mr-2" />
                  ÉVÉNEMENTS AXANDE
                </button>
                <button className="text-gray-400 hover:text-blue-600 transition-colors flex items-center">
                  PROCHAINS ÉVÉNEMENTS
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* News Articles */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <NewsItem 
                key={index}
                title={news.title}
                date={news.date}
                excerpt={news.excerpt}
                category={news.category}
                delay={index * 100}
              />
            ))}
          </div>
          
          {/* Pagination */}
          <ScrollAnimation animation="fade-in" delay={300} className="flex justify-center mt-16">
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <ArrowLeft size={16} />
              </button>
              
              <button 
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  currentPage === 1 
                    ? 'bg-blue-600 text-white' 
                    : 'border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                } transition-colors`}
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
              
              <button 
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  currentPage === 2 
                    ? 'bg-blue-600 text-white' 
                    : 'border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                } transition-colors`}
                onClick={() => setCurrentPage(2)}
              >
                2
              </button>
              
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Archives Button */}
      <section className="bg-gray-50 pb-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in" className="flex justify-center">
            <button className="btn btn-primary">
              Archives
            </button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default News; 