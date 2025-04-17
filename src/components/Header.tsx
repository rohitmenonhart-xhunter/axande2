import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Accueil', page: 'home' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Rejoindre', page: 'join' },
    { label: 'Jobboard', page: 'jobboard' },
    { label: 'Actualités', page: 'news' },
    { label: 'Contact', page: 'contact' },
    { label: 'Site groupe', page: 'groupe', external: true, url: 'https://www.abs-technologies.fr/' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white shadow-minimal' 
          : 'py-4 bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Axande"
              className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'} cursor-pointer`}
              onClick={() => onNavigate('home')}
            />
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.external ? item.url : "#"} 
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!item.external) {
                    e.preventDefault();
                    onNavigate(item.page);
                  }
                }}
                className={`text-gray-800 font-medium transition-all duration-300 relative group text-base ${
                  activePage === item.page 
                    ? 'text-gray-900 font-semibold' 
                    : 'hover:text-gray-900'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                    activePage === item.page ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-70'
                  }`}
                ></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-minimal py-4 px-6 space-y-4 transform origin-top transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        {menuItems.map((item, index) => (
          <a 
            key={index}
            href={item.external ? item.url : "#"}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (!item.external) {
                e.preventDefault();
                onNavigate(item.page);
                setMobileMenuOpen(false);
              }
            }}
            className={`block py-2 text-gray-700 font-medium hover:text-gray-900 transition-all duration-300 border-b border-gray-100 text-base ${
              activePage === item.page ? 'text-gray-900 font-semibold' : ''
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header; 