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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'py-4 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-charcoal">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-xl md:text-2xl font-serif tracking-[0.2em] leading-none uppercase">Muhammed Atif</span>
          <span className="text-[9px] tracking-[0.1em] md:tracking-[0.3em] font-medium opacity-70 mt-1 ml-0.5 uppercase">Interior Designer & 3D Visualizer</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, idx) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-xs uppercase tracking-[0.2em] luxury-underline transition-all hover:text-luxury-gold hover:-translate-y-0.5"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass-dark text-ivory px-6 py-3 rounded-[12px] text-xs uppercase tracking-widest hover:bg-luxury-gold transition-all duration-300 shadow-xl shadow-charcoal/20"
          >
            Start a Project
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-ivory z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-8 right-8 text-charcoal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif tracking-widest hover:text-luxury-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-8 bg-charcoal text-ivory px-10 py-5 rounded-[14px] text-sm uppercase tracking-widest">
              Start a Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
