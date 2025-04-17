import React from 'react';
import ScrollAnimation from './utils/ScrollAnimation';

const Diversity: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-32 top-0 w-64 h-64 rounded-full bg-blue-50 opacity-50"></div>
      <div className="absolute -left-32 bottom-0 w-96 h-96 rounded-full bg-blue-50 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-blue">AXANDE</span>
              </h2>
              <p className="text-xl text-gray-600 font-light mb-8">
                Le groupe ABS est signataire de la charte sur la diversité
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slide-up" className="mb-16">
            <div className="bg-white rounded-2xl shadow-medium p-8 md:p-12 relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-300 rounded-xl rotate-12 opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full opacity-10"></div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <img 
                    src={`${import.meta.env.BASE_URL}logo.png`}
                    alt="Axande - Logo" 
                    className="mx-auto md:mx-0 h-24 mb-6"
                  />
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">La diversité, notre richesse</h3>
                  <p className="text-gray-600 mb-4">
                    Les collaborateurs constituent la principale richesse de l'entreprise.
                  </p>
                  <p className="text-gray-600">
                    Axande recrute tous ses talents sans autre critère que celui de l'excellence.
                  </p>
                </div>
                
                <div className="md:w-1/2 md:pl-8 md:border-l border-gray-200">
                  <div className="flex justify-center">
                    <img 
                      src="https://www.axande.fr/wp-content/uploads/2022/12/charte-diversite-logopng-1.png" 
                      alt="Charte de la diversité" 
                      className="h-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" delay={300} className="flex justify-center">
            <a href="#" className="btn btn-primary">
              En savoir plus sur notre charte
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Diversity; 