import React, { useState } from 'react';
import { MessageSquare, X, Phone } from 'lucide-react';

const ChatButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options */}
      <div className={`flex flex-col space-y-2 mb-3 transition-all duration-300 ${isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 pointer-events-none transform translate-y-4'}`}>
        <button 
          className="bg-white shadow-lg hover:shadow-xl text-gray-800 font-medium rounded-full py-3 px-5 transition-all duration-300 flex items-center"
          onClick={() => window.open('tel:+33123456789', '_blank')}
        >
          <Phone className="mr-2" size={18} /> Call Us
        </button>
      </div>
      
      {/* Main Chat Button */}
      <button 
        className={`bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'rotate-180' : ''}`} 
        onClick={toggleChat}
        aria-label={isOpen ? "Fermer les options" : "Ouvrir les options"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatButtons; 