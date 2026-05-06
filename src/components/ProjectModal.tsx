import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Layers, PenTool, Share2, Download, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-espresso/90 backdrop-blur-2xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-6xl h-full max-h-[85vh] bg-dark-clay border border-stone-line rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-12 h-12 bg-espresso/60 backdrop-blur-xl border border-stone-line rounded-full flex items-center justify-center text-warm-white hover:bg-terracotta hover:border-terracotta transition-all"
          >
            <X size={20} />
          </button>

          {/* Left: Visuals */}
          <div className="w-full md:w-1/2 h-64 md:h-full bg-espresso relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 to-transparent" />
            
            {/* Gallery Mini (Simulated) */}
            <div className="absolute bottom-8 left-8 flex gap-4">
              {[project.image, project.image, project.image].map((img, i) => (
                <div key={i} className="w-20 aspect-[4/3] rounded-xl border border-warm-white/20 overflow-hidden cursor-pointer hover:border-bronze transition-all">
                  <img src={img} alt="detail" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-1/2 h-full overflow-y-auto custom-scrollbar p-10 md:p-16 flex flex-col">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-terracotta/20 text-terracotta text-[8px] uppercase tracking-widest font-bold rounded-full border border-terracotta/30">
                  {project.status}
                </span>
                <span className="text-muted-sand text-[9px] uppercase tracking-[0.3em] font-medium">Project Journal #{project.id.padStart(2, '0')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif text-warm-white mb-6 leading-tight">
                {project.title}
              </h2>
              
              <div className="flex flex-wrap gap-8 py-8 border-y border-stone-line">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-muted-sand mb-2">Location</p>
                  <p className="text-xs text-warm-white font-medium flex items-center gap-2">
                    <MapPin size={12} className="text-bronze" /> {project.location}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-muted-sand mb-2">Timeline</p>
                  <p className="text-xs text-warm-white font-medium flex items-center gap-2">
                    <Calendar size={12} className="text-bronze" /> FY {project.year}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-muted-sand mb-2">Categorization</p>
                  <p className="text-xs text-warm-white font-medium flex items-center gap-2">
                    <Layers size={12} className="text-bronze" /> {project.category[0]}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12 flex-grow">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-terracotta font-bold mb-4">Design Narrative</h3>
                <p className="text-muted-sand leading-relaxed text-sm">
                  {project.details.overview}
                  <br /><br />
                  The project focused on a {project.details.approach || 'bespoke spatial dialogue'}, emphasizing the intersection of {project.details.materials.slice(0, 2).join(' and ')}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] text-terracotta font-bold mb-4">Project Scope</h3>
                  <ul className="space-y-3">
                    {project.details.scope.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-warm-white text-xs">
                        <PenTool size={12} className="text-bronze" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] text-terracotta font-bold mb-4">Software Deck</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.details.software.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-espresso/50 border border-stone-line text-[9px] text-muted-sand rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-stone-line">
                <div className="flex flex-wrap gap-6">
                  <a href="#contact" className="px-8 py-4 bg-warm-white text-espresso text-[10px] uppercase tracking-widest font-bold rounded-full flex items-center gap-2 hover:bg-bronze transition-all">
                    Inquire About Similar <ExternalLink size={14} />
                  </a>
                  <button className="flex items-center gap-3 text-muted-sand text-[10px] uppercase tracking-widest font-bold hover:text-warm-white transition-colors">
                    <Download size={16} /> Technical Spec
                  </button>
                  <button className="flex items-center gap-3 text-muted-sand text-[10px] uppercase tracking-widest font-bold hover:text-warm-white transition-colors ml-auto">
                    <Share2 size={16} /> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
