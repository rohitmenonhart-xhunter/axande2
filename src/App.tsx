import React, { useState } from 'react';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Strategy from './components/Strategy';
import Values from './components/Values';
import Diversity from './components/Diversity';
import KeyFigures from './components/KeyFigures';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import ChatButtons from './components/ChatButtons';
import Solutions from './components/Solutions';
import Opportunities from './components/Opportunities';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans">
      <Header onNavigate={handleNavigation} activePage={currentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={handleNavigation} />
          <Strategy />
          <Values />
          <Diversity />
          <KeyFigures onNavigate={handleNavigation} />
          <JoinUs />
        </>
      )}
      
      {currentPage === 'solutions' && <Solutions onNavigate={handleNavigation} />}
      {currentPage === 'join' && <Opportunities onNavigate={handleNavigation} />}
      {currentPage === 'news' && <News />}
      {currentPage === 'contact' && <Contact />}
      
      <Footer onNavigate={handleNavigation} />
      <ChatButtons />
    </div>
  );
}

export default App;