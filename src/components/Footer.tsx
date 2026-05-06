import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-6 lg:px-24 bg-secondary-bg border-t border-divider relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-24">
          <div className="space-y-8 max-w-lg">
            <h2 className="text-4xl editorial-title text-primary-text">Muhammed Atif. <br /> <span className="italic">Visual Designer.</span></h2>
            <p className="text-secondary-text text-sm font-light leading-relaxed">
              Curating luxury interior experiences and high-fidelity architectural visualizations. Based in Dubai, serving a global clientele of architects and developers.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32 w-full lg:w-auto">
             <div className="space-y-8">
                <span className="label-sm text-accent">ARCHIVE</span>
                <div className="flex flex-col gap-4">
                  {['Portfolio', 'Experience', 'Services', 'About'].map(link => (
                    <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-light text-secondary-text hover:text-accent transition-colors">{link}</a>
                  ))}
                </div>
             </div>

             <div className="space-y-8">
                <span className="label-sm text-accent">SOCIAL</span>
                <div className="flex flex-col gap-4">
                  {['LinkedIn', 'Instagram', 'Behance', 'Pinterest'].map(link => (
                    <a key={link} href="#" className="text-sm font-light text-secondary-text hover:text-accent transition-colors">{link}</a>
                  ))}
                </div>
             </div>

             <div className="space-y-8 col-span-2 lg:col-span-1">
                <span className="label-sm text-accent">STUDIO</span>
                <div className="space-y-2">
                  <p className="text-sm font-light text-secondary-text">Dubai, United Arab Emirates</p>
                  <p className="text-sm font-light text-secondary-text">+971 58 226 7604</p>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
             <span className="text-[10px] uppercase tracking-[0.3em] text-secondary-text opacity-40">&copy; 2024 MUHAMMED ATIF</span>
             <div className="h-4 w-px bg-divider" />
             <span className="text-[10px] uppercase tracking-[0.3em] text-secondary-text opacity-40">Privacy Policy</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-4 group"
          >
             <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Return to Top</span>
             <div className="w-12 h-12 border border-accent rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-main-bg transition-all duration-500">
                <ArrowUp size={16} />
             </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
