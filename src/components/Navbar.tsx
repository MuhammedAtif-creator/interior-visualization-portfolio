import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 ${
        isScrolled 
          ? 'py-4 mt-0' 
          : 'py-8 mt-4'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center transition-all duration-700 rounded-full ${
        isScrolled ? 'glass-navbar py-3 shadow-2xl' : 'bg-transparent py-0'
      }`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-lg md:text-xl font-serif tracking-[0.2em] leading-none uppercase text-white">Muhammed Atif</span>
          <span className="text-[7px] md:text-[8px] tracking-[0.4em] font-bold text-accent-orange mt-1 uppercase">Interior Specialist</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 hover:text-accent-orange transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent-orange transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-accent-orange hover:border-accent-orange transition-all duration-500"
          >
            Start a Project
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 glass-panel rounded-full"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-cinematic-black/90 z-[60] flex flex-col items-center justify-center gap-10"
          >
            <button 
              className="absolute top-10 right-10 text-white p-4 glass-panel rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link, idx) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif tracking-widest text-white hover:text-accent-orange transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-accent-orange text-white px-12 py-5 rounded-full text-xs uppercase tracking-widest font-bold shadow-2xl"
            >
              Consult Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
