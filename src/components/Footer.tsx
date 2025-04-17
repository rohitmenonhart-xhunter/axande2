import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div className="space-y-4">
            <img src={`${import.meta.env.BASE_URL}logo-white.png`} alt="Axande" className="h-8" />
            <p className="text-gray-400 text-sm">
              Des solutions innovantes basées sur l'Intelligence Artificielle pour optimiser vos processus métiers.
            </p>
            <div className="pt-2">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-400">123 Rue de la Technologie, 75001 Paris, France</p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone size={18} className="text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-400">+33 1 23 45 67 89</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-400">contact@axande.com</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group"
                >
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('solutions')} 
                  className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group"
                >
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('join')} 
                  className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group"
                >
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  Rejoindre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group"
                >
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* More Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  Charte de la diversité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  Offres d'Emploi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  Jobboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  La charte d'entreprise citoyenne
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social and Other Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Suivez-nous</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  Extranet
                </a>
              </li>
              <li>
                <a href="https://www.abs-technologies.fr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition duration-300 transform group-hover:translate-x-1" />
                  ABS Technologies
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Axande une ESN au service de votre transformation digitale
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition duration-300">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition duration-300">
                Mentions Légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 