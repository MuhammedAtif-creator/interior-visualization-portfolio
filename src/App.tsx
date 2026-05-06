import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimusBackground from './components/AnimusBackground';
import AIAssistant from './components/AIAssistant';
import CursorGlow from './components/CursorGlow';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import Services from './components/Services';
import HireMe from './components/HireMe';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e: any) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="bg-main-bg text-primary-text min-h-screen selection:bg-accent selection:text-main-bg">
      <AnimusBackground />
      <Navbar />
      <Hero />
      <CursorGlow />
      <main>
        <PortfolioSection />
        <Services />
        <HireMe />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;
