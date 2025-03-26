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
                Le groupe ABE est signataire de la charte sur la diversité
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
                    src="/logo.png"
                    alt="Axande - Logo" 
                    className="mx-auto md:mx-0 h-24 mb-6"
                  />
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">La diversité, notre richesse</h3>
                  <p className="text-gray-600 mb-4">
                    Les collaborateurs constituent la principale richesse de l'entreprise.
                  </p>
                  <p className="text-gray-600">
                    AXANDE connait tous ses talents mais notre culture gagne plus de "Richesse" grâce à notre engagement en faveur de la diversité.
                  </p>
                </div>
                
                <div className="md:w-1/2 md:pl-8 md:border-l border-gray-200">
                  <div className="flex flex-col items-start space-y-4">
                    <h4 className="text-xl font-bold text-gray-800">Nos engagements:</h4>
                    {[
                      "Sensibiliser et former nos dirigeants impliqués dans le recrutement",
                      "Respecter et promouvoir l'application du principe de non-discrimination",
                      "Chercher à refléter la diversité de la société",
                      "Communiquer nos engagements auprès de l'ensemble de nos collaborateurs",
                      "Faire de l'élaboration et de la mise en œuvre de la politique de diversité un objet de dialogue"
                    ].map((point, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
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