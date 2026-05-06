import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-main-bg relative overflow-hidden px-6 lg:px-24">
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center py-24 lg:py-32">
        
        {/* Left Content: Editorial Typography */}
        <div className="lg:col-span-5 space-y-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="label-sm block">DUBAI BASED INTERIOR DESIGNER & 3D VISUALIZER</span>
            <h1 className="text-7xl md:text-[120px] editorial-title leading-[0.85] -ml-1">
              Muhammed <br />
              <span className="italic text-accent">Atif</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-secondary-text text-lg md:text-xl max-w-md font-light leading-relaxed">
              Creating refined interiors through spatial planning, realistic visualization, and cinematic presentation.
            </p>

            <div className="flex flex-wrap gap-8 items-center pt-4">
              <a 
                href="#portfolio" 
                className="group flex items-center gap-4 text-primary-text uppercase tracking-widest text-xs font-semibold hover:text-accent transition-colors"
              >
                View Portfolio 
                <span className="w-10 h-[1px] bg-divider group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-10 py-5 bg-transparent border border-divider text-primary-text uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-main-bg transition-all duration-500"
              >
                Hire Me
              </a>
            </div>
          </motion.div>

          {/* Elegant Stats */}
          <div className="flex gap-16 pt-16 border-t border-divider">
            {[
              { label: 'Creative Concepts', value: '100+' },
              { label: 'Regional Expertise', value: 'GCC & INDIA' },
              { label: 'Visual Quality', value: '4K CINEMATIC' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="text-2xl font-serif text-accent tracking-tighter">{stat.value}</div>
                <div className="label-sm mt-1 opacity-60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content: Massive Cinematic Hero Image */}
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] lg:aspect-square overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
              alt="Cinematic Interior Design" 
              className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-[3s]"
            />
            
            {/* Project Label Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-12 right-12 text-right hidden md:block"
            >
              <span className="label-sm text-white/60 mb-2 block">LATEST FEATURED WORK</span>
              <h3 className="text-3xl font-serif text-white uppercase tracking-wider">Penthouse V3</h3>
              <p className="text-[10px] tracking-[0.3em] font-medium text-white/40 mt-2">DUBAI HARBOUR, 2024</p>
            </motion.div>

            {/* Aesthetic Border/Overlay */}
            <div className="absolute inset-x-12 inset-y-12 border border-white/10 pointer-events-none" />
          </motion.div>

          {/* Floating Aesthetic Elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -top-12 -left-12 w-48 h-64 border border-accent/20 hidden lg:block pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

