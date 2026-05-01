import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-6xl max-h-[95vh] glass-panel bg-white/5 backdrop-blur-3xl overflow-y-auto rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/10"
        >
          <motion.button 
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-8 right-8 z-50 p-3 glass-dark text-ivory rounded-full hover:bg-luxury-gold transition-all shadow-xl"
          >
            <X size={24} />
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[400px] lg:h-full min-h-[600px] relative overflow-hidden">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              <div className="absolute bottom-10 left-10 flex gap-3">
                {project.category.map(cat => (
                  <span key={cat} className="px-4 py-2 glass-dark text-[9px] uppercase tracking-[0.2em] font-medium rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 md:p-16 flex flex-col bg-white/[0.02]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex items-center gap-2 text-luxury-gold mb-4">
                  <span className="w-8 h-[1px] bg-luxury-gold/50" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Featured Project</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight tracking-tight text-charcoal">{project.title}</h2>
                <div className="flex flex-wrap gap-8 text-muted text-[10px] uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-3">
                    <MapPin size={14} className="text-luxury-gold" /> {project.location}
                  </span>
                  <span className="flex items-center gap-3">
                    <Calendar size={14} className="text-luxury-gold" /> {project.year}
                  </span>
                  <span className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-luxury-gold" /> {project.status}
                  </span>
                </div>
              </motion.div>

              <div className="space-y-12 flex-grow">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-5">Overview</h4>
                  <p className="text-charcoal/80 font-light leading-relaxed text-xl mb-6">
                    {project.details.overview}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-5">Core Scope</h4>
                    <ul className="space-y-3">
                      {project.details.scope.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-xs font-light text-muted uppercase tracking-[0.1em]">
                          <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold/30" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-5">Design Strategy</h4>
                    <div className="space-y-6">
                      <div className="p-4 glass-panel border border-black/5">
                        <span className="text-[8px] uppercase tracking-[0.3em] text-muted block mb-2">Technical Process</span>
                        <p className="text-xs font-medium tracking-wide text-charcoal">{project.details.workflow || 'Standard Design Pipeline'}</p>
                      </div>
                      <div className="p-4 glass-panel border border-black/5">
                        <span className="text-[8px] uppercase tracking-[0.3em] text-muted block mb-2">Visual Result</span>
                        <p className="text-xs font-medium tracking-wide text-charcoal">{project.details.output || 'High-Resolution Visuals'}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-5">Palette</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.details.materials.map((m, i) => (
                        <span key={i} className="px-4 py-2 glass-panel border border-black/5 text-[10px] uppercase tracking-widest rounded-lg">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-5">Final Handover</h4>
                    <div className="flex flex-wrap gap-4">
                      {project.details.deliverables.map((d, i) => (
                        <span key={i} className="text-xs font-light text-muted flex items-center gap-3">
                          <ArrowRight size={14} className="text-luxury-gold" /> {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 pt-12 border-t border-stone/30 flex flex-col sm:flex-row items-center justify-between gap-8"
              >
                <button className="w-full sm:w-auto bg-charcoal text-ivory px-12 py-5 rounded-[12px] text-xs uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:scale-105 transition-all duration-500 shadow-2xl">
                  Enquire Project
                </button>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted font-bold mb-1">Project ID</span>
                  <span className="text-xs font-serif italic text-luxury-gold">MA-{project.id}0{project.year}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
