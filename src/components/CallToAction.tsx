import React from 'react';
import ScrollAnimation from './utils/ScrollAnimation';

interface CallToActionProps {
  onNavigate: (page: string) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button 
              onClick={() => onNavigate('solutions')}
              className="bg-gray-900 text-white px-10 py-6 min-w-[280px] text-xl font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Découvrir nos solutions
            </button>
            
            <button 
              onClick={() => onNavigate('contact')}
              className="border border-gray-300 text-gray-800 px-10 py-6 min-w-[280px] text-xl font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300"
            >
              Nous contacter
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CallToAction; 