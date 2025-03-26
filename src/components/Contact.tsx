import React from 'react';
import { Phone, MapPin, Send, Info } from 'lucide-react';
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
        {label} {required && <span className="text-blue-600">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder={placeholder}
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

const Contact: React.FC = () => {
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
              Contact
            </h1>
            <div className="w-20 h-1 bg-blue-400 mb-6"></div>
            <div className="max-w-xl">
              <p className="text-blue-100 text-xl mt-2">
                Nous joindre, nous rencontrer
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

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center uppercase">
              Envoyez-nous votre message
            </h2>
          </ScrollAnimation>
          
          <div className="max-w-5xl mx-auto">
            <form className="bg-white rounded-xl shadow-medium p-8 md:p-10">
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
                  <Info size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-xs text-gray-500">
                    Vos données ne sont pas conservées et sont traitées uniquement pour traiter votre demande d'information. Veuillez consulter notre 
                    <a href="#" className="text-blue-600 hover:underline ml-1">
                      Politique de confidentialité
                    </a> pour plus d'informations.
                  </p>
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary px-8">
                Envoyer
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-medium overflow-hidden">
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
      <section className="bg-gray-50 py-10 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation animation="fade-in">
              <div className="text-center mb-12">
                <img src="/logo.png" alt="ABS Technologies" className="h-16 mx-auto mb-6" />
                <p className="text-gray-600 mb-4">Axande fait partie du Groupe ABS</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-medium p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Adresse AXANDE à la Défense :</h3>
                <p className="text-gray-600 mb-2">(Bureaux et Siège social)</p>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mr-3 mt-1" size={18} />
                    <div>
                      <p className="font-medium">Cœur Défense</p>
                      <p className="text-gray-600">110, esplanade du Général de Gaulle</p>
                      <p className="text-gray-600">92931 - Paris La Défense Cedex France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-3" size={18} />
                    <p className="text-gray-600">Tel : +33 1 77 62 82 07</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-medium p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Accès en transports en commun</h3>
                <p className="text-gray-600 mb-4">« La Défense - Grande Arche » M1 — RER A — T2 — Tramilien lignes L et U</p>
                <p className="text-gray-600">Bus lignes 45 - 141 - 144 - 159 - 161 - 174 - 178 - 258 - 262 - 272 - 275 - 276 - 278 - 360 - 378</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-medium p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Accès en voiture</h3>
                  <p className="text-gray-600 mb-2">Cœur Défense (parking) : 12 avenue André Prothin, 92400 Courbevoie</p>
                  <p className="text-gray-600">Paris La Defense - Centre Grande Arche -</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-medium p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Accès à vélos</h3>
                  <p className="text-gray-600 mb-4">12 avenue André Prothin, 92400 Courbevoie</p>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 mt-6">Accès en taxi et voiture avec chauffeur</h3>
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