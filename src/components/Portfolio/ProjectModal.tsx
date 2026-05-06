import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Minus, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-12 bg-main-bg/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="bg-main-bg w-full h-full max-w-[1800px] border border-divider flex flex-col lg:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-50 text-white hover:text-accent transition-colors p-4"
        >
          <X size={32} />
        </button>

        {/* Left: Immersive Gallery */}
        <div className="flex-1 relative bg-main-bg overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src={project.images[activeImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover lg:object-contain bg-main-bg"
              />
            </AnimatePresence>

            <button onClick={prevImage} className="absolute left-8 w-16 h-16 flex items-center justify-center text-white hover:text-accent transition-all">
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button onClick={nextImage} className="absolute right-8 w-16 h-16 flex items-center justify-center text-white hover:text-accent transition-all">
              <ChevronRight size={48} strokeWidth={1} />
            </button>
          </div>

          {/* Thumbnail Rail */}
          <div className="h-32 px-12 pb-12 flex gap-4 overflow-x-auto no-scrollbar items-center">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`flex-shrink-0 h-16 aspect-video overflow-hidden border transition-all duration-500 ${
                  activeImageIndex === idx ? 'border-accent p-1' : 'border-divider opacity-40 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Architectural Metadata */}
        <div className="w-full lg:w-[500px] bg-secondary-bg border-l border-divider p-12 overflow-y-auto no-scrollbar flex flex-col justify-between">
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="label-sm text-accent">EXHIBITION_#{project.id}</span>
              <h2 className="text-5xl editorial-title text-primary-text">{project.title}</h2>
              <div className="flex flex-wrap gap-3">
                {project.category.map(cat => (
                  <span key={cat} className="label-sm opacity-60">{cat}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-divider">
               <div className="space-y-2">
                 <h4 className="label-sm text-accent">LOCATION</h4>
                 <p className="text-primary-text text-sm font-light">{project.location}</p>
               </div>
               <div className="space-y-2">
                 <h4 className="label-sm text-accent">COMPLETED</h4>
                 <p className="text-primary-text text-sm font-light">YEAR_{project.year}</p>
               </div>
            </div>

            <div className="space-y-8">
               <h4 className="label-sm text-accent">OVERVIEW</h4>
               <p className="text-secondary-text text-sm lg:text-base font-light leading-relaxed">
                 {project.details.overview || project.shortDescription}
               </p>
            </div>

            <div className="space-y-8">
               <h4 className="label-sm text-accent">SOFTWARE STACK</h4>
               <div className="flex flex-wrap gap-3">
                  {project.details.software.map(sw => (
                    <span key={sw} className="px-4 py-2 border border-divider text-[10px] uppercase tracking-widest text-primary-text">{sw}</span>
                  ))}
               </div>
            </div>
          </div>

          <motion.a 
            href="#contact"
            onClick={onClose}
            className="mt-16 w-full py-8 border border-accent text-accent uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-accent hover:text-main-bg transition-all duration-500 flex items-center justify-center gap-4 group"
          >
            Request Similar Experience
            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
