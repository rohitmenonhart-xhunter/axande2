import React from 'react';
import { Phone, MapPin, Send, Info, ChevronDown } from 'lucide-react';
import ScrollAnimation from './utils/ScrollAnimation';

interface FormInputProps {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ 
  label, 
  type = 'text', 
  name, 
  required = false, 
  placeholder = '' 
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-gray-700 text-sm font-medium mb-2">
        {label} {required && <span className="text-gray-900">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
          placeholder={placeholder}
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const handleScroll = () => {
    const contactFormSection = document.getElementById('contact-form');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
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
                Contactez{' '}
                <span className="relative text-gray-900">
                  Axande
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-blue opacity-30 -z-10"></span>
                </span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={300}>
              <p className="text-gray-700 text-lg md:text-xl mb-8 mx-auto max-w-2xl">
                Nous joindre, nous rencontrer, échanger sur vos projets ou nous faire part de vos besoins.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-up" delay={400}>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  className="bg-gray-900 text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300"
                  onClick={handleScroll}
                >
                  Nous envoyer un message
                </button>
                <a 
                  href="tel:+33177628207" 
                  className="border border-gray-300 text-gray-800 px-6 py-3 text-base font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 flex items-center"
                >
                  <Phone size={18} className="mr-2" />
                  Nous appeler
                </a>
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

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="flex flex-col md:flex-row gap-10 mb-16">
              <div className="md:w-5/12">
                <h2 className="text-6xl md:text-7xl font-bold text-black mb-4 tracking-wide">
                  MESSAGE
                </h2>
              </div>
              
              <div className="md:w-7/12">
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  Envoyez-nous votre message
                </h3>
                <p className="text-gray-600 text-lg">
                  Nous vous répondrons dans les meilleurs délais pour répondre à vos questions et vous accompagner dans vos projets.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="max-w-5xl mx-auto">
            <form className="bg-white rounded-lg border border-gray-200 shadow-soft p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput 
                  label="Nom" 
                  name="nom" 
                  required 
                />
                <FormInput 
                  label="Prénom" 
                  name="prenom" 
                  required 
                />
                <FormInput 
                  label="Société" 
                  name="societe" 
                  required 
                />
                <FormInput 
                  label="E-mail" 
                  type="email" 
                  name="email" 
                  required 
                />
                <div className="md:col-span-2">
                  <FormInput 
                    label="Message" 
                    type="textarea" 
                    name="message" 
                    required 
                  />
                </div>
              </div>
              
              <div className="mt-6 mb-8">
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 mr-3" 
                    required 
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    J'accepte votre politique de confidentialité
                  </label>
                </div>
                <div className="flex items-start mt-4">
                  <Info size={16} className="text-gray-500 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-xs text-gray-500">
                    Vos données ne sont pas conservées et sont traitées uniquement pour traiter votre demande d'information. Veuillez consulter notre 
                    <a href="#" className="text-gray-700 hover:underline ml-1">
                      Politique de confidentialité
                    </a> pour plus d'informations.
                  </p>
                </div>
              </div>
              
              <button type="submit" className="bg-gray-900 text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center">
                Envoyer
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <div className="flex flex-col md:flex-row gap-10 mb-16">
              <div className="md:w-5/12">
                <h2 className="text-6xl md:text-7xl font-bold text-black mb-4 tracking-wide">
                  ADRESSE
                </h2>
              </div>
              
              <div className="md:w-7/12">
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  Nous rendre visite
                </h3>
                <p className="text-gray-600 text-lg">
                  Retrouvez-nous à notre siège social situé au cœur de Paris La Défense.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 shadow-soft overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1735686045557!2d2.2318195159894833!3d48.877616979288766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66551ab383a33%3A0x1b3bcc013b0c1bb!2sLa%20D%C3%A9fense%2C%20Courbevoie%2C%20France!5e0!3m2!1sfr!2s!4v1633678524286!5m2!1sfr!2s"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Axande Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation animation="fade-in">
              <div className="text-center mb-12">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Axande" className="h-16 mx-auto mb-6" />
                <p className="text-gray-600 mb-4">Axande fait partie du Groupe ABS</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg border border-gray-200 shadow-soft p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Adresse AXANDE à la Défense</h3>
                  <p className="text-gray-600 mb-2">(Bureaux et Siège social)</p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start">
                      <MapPin className="text-gray-900 mr-3 mt-1" size={18} />
                      <div>
                        <p className="font-medium">Cœur Défense</p>
                        <p className="text-gray-600">110, esplanade du Général de Gaulle</p>
                        <p className="text-gray-600">92931 - Paris La Défense Cedex France</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="text-gray-900 mr-3" size={18} />
                      <p className="text-gray-600">Tel : +33 1 77 62 82 07</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 shadow-soft p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Accès en transports en commun</h3>
                  <p className="text-gray-600 mb-4">« La Défense - Grande Arche » M1 — RER A — T2 — Tramilien lignes L et U</p>
                  <p className="text-gray-600">Bus lignes 45 - 141 - 144 - 159 - 161 - 174 - 178 - 258 - 262 - 272 - 275 - 276 - 278 - 360 - 378</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg border border-gray-200 shadow-soft p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Accès en voiture</h3>
                  <p className="text-gray-600 mb-2">Cœur Défense (parking) : 12 avenue André Prothin, 92400 Courbevoie</p>
                  <p className="text-gray-600">Paris La Defense - Centre Grande Arche -</p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 shadow-soft p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Accès à vélos</h3>
                  <p className="text-gray-600 mb-4">12 avenue André Prothin, 92400 Courbevoie</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Accès en taxi et voiture avec chauffeur</h3>
                  <p className="text-gray-600">10 avenue André Prothin, 92400 Courbevoie</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 