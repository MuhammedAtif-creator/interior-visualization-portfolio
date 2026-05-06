import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  LayoutGrid, 
  User, 
  History, 
  Cpu, 
  MessageSquare, 
  Zap 
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'hire-me', label: 'Hire Me' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 lg:px-24 h-24 flex items-center justify-between pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary-text font-serif text-2xl tracking-tighter pointer-events-auto cursor-pointer"
        >
          M.A
        </motion.div>

        <div className="hidden lg:flex items-center gap-12 pointer-events-auto">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative py-2 text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 overflow-hidden group ${
                activeSection === item.id ? 'text-accent' : 'text-secondary-text hover:text-primary-text'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent transform transition-transform duration-500 origin-left ${
                activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Dock */}
      <nav className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 p-2 bg-main-bg/80 backdrop-blur-xl border border-divider rounded-full">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-4 py-2 text-[8px] uppercase tracking-widest font-bold rounded-full transition-colors ${
              activeSection === item.id ? 'bg-accent text-main-bg' : 'text-secondary-text'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
