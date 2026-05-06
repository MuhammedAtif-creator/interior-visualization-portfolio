import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types';
import { Plus, Minus, ArrowRight, Minus as DividerIcon } from 'lucide-react';

interface PortfolioGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function PortfolioGrid({ projects, onProjectClick }: PortfolioGridProps) {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const toggleDropdown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <div className="space-y-32">
      {projects.map((project, idx) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="group"
        >
          {/* Main Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Cinematic Image Container */}
            <div 
              className="lg:col-span-7 relative aspect-[16/10] overflow-hidden cursor-pointer bg-main-bg"
              onClick={() => onProjectClick(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[2s] ease-[0.22, 1, 0.36, 1]"
              />
              <div className="absolute inset-x-8 inset-y-8 border border-white/10 pointer-events-none group-hover:border-white/30 transition-colors duration-700" />
            </div>

            {/* Content Sidebar */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="label-sm text-accent">{project.category[0]}</span>
                    <DividerIcon className="text-divider" size={12} />
                    <span className="label-sm opacity-60">{project.location}</span>
                  </div>
                  <h3 className="text-5xl editorial-title group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                </div>

                <div className="flex gap-6 items-center">
                   <button 
                    onClick={() => onProjectClick(project)}
                    className="flex items-center gap-4 text-primary-text uppercase tracking-widest text-[10px] font-bold hover:text-accent transition-colors group/btn"
                  >
                    Examine Project
                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                  <button 
                    onClick={(e) => toggleDropdown(project.id, e)}
                    className={`flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold transition-colors ${
                      openDropdownId === project.id ? 'text-accent' : 'text-secondary-text hover:text-primary-text'
                    }`}
                  >
                    {openDropdownId === project.id ? 'Close Details' : 'View Details'}
                    {openDropdownId === project.id ? <Minus size={14} /> : <Plus size={14} />}
                  </button>
                </div>
              </div>

              {/* Year Indicator */}
              <div className="pt-12 hidden lg:block">
                 <span className="text-7xl font-serif text-divider select-none tracking-tighter">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Luxury Dropdown Details */}
          <AnimatePresence>
            {openDropdownId === project.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-12 pt-12 border-t border-divider grid grid-cols-1 lg:grid-cols-12 gap-12">
                   <div className="lg:col-span-4 space-y-8">
                      <div>
                        <h4 className="label-sm text-accent mb-4">Core Overview</h4>
                        <p className="text-secondary-text text-sm font-light leading-relaxed">
                          {project.details.overview}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.details.software.map(sw => (
                          <span key={sw} className="px-3 py-1 border border-divider rounded-full text-[9px] uppercase tracking-widest text-secondary-text">
                            {sw}
                          </span>
                        ))}
                      </div>
                   </div>

                   <div className="lg:col-span-8">
                      <h4 className="label-sm text-accent mb-8">Process Gallery</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {project.images.slice(1, 6).map((img, i) => (
                           <div 
                            key={i} 
                            className="aspect-[4/5] lg:aspect-square overflow-hidden cursor-pointer bg-main-bg border border-divider group/img"
                            onClick={() => onProjectClick(project)}
                           >
                              <img src={img} alt="Process" className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-110 transition-all duration-700" />
                           </div>
                        ))}
                      </div>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
