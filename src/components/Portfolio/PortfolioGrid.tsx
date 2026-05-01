import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types';
import { Plus, Minus, Maximize2, Table } from 'lucide-react';

interface PortfolioGridProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

export default function PortfolioGrid({ projects, onOpenModal }: PortfolioGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-sm mb-6 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 border border-black/5">
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: 'var(--color-luxury-gold)', color: '#fff' }}
              onClick={() => onOpenModal(project)}
              className="absolute top-6 right-6 z-20 glass-panel p-3 text-charcoal opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
            >
              <Maximize2 size={20} />
            </motion.button>
            <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
              {project.category.map(cat => (
                <span key={cat} className="px-3 py-1 glass-dark text-ivory text-[9px] uppercase tracking-widest font-medium rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-start pt-2 px-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted mb-2 block">{project.location} — {project.year}</span>
              <h3 className="text-2xl font-serif tracking-tight luxury-underline inline-block">{project.title}</h3>
            </div>
            <div className={`text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full border transition-all duration-300 ${
              project.status === 'Completed' ? 'border-stone text-muted bg-stone/5' : 'border-luxury-gold/30 text-luxury-gold bg-luxury-gold/5'
            }`}>
              {project.status}
            </div>
          </div>

          <div className="px-2 mt-4">
            <p className="text-charcoal/60 font-light text-sm leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-6 border-t border-stone/30 pt-6">
              <button 
                onClick={() => toggleExpand(project.id)}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal hover:text-luxury-gold transition-all hover:translate-x-1"
              >
                <span className={`p-1 rounded-full border border-stone transition-transform duration-500 ${expandedId === project.id ? 'rotate-180 border-luxury-gold text-luxury-gold' : ''}`}>
                  {expandedId === project.id ? <Minus size={10} /> : <Plus size={10} />}
                </span>
                {expandedId === project.id ? 'Hide Details' : 'View Details'}
              </button>
              <button 
                onClick={() => onOpenModal(project)}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal hover:text-luxury-gold transition-all hover:translate-x-1"
              >
                <Table size={14} className="text-luxury-gold" /> Open Project
              </button>
            </div>
          </div>

          <AnimatePresence>
            {expandedId === project.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-8 mx-2 p-8 glass-panel border border-luxury-gold/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-luxury-gold mb-3">Design Style</h4>
                      <p className="font-light text-muted">{project.details.designStyle}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-luxury-gold mb-3">Software</h4>
                      <p className="font-light text-muted">{project.details.software.join(' / ')}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-luxury-gold mb-3">Materials</h4>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.details.materials.map((m, i) => (
                          <span key={i} className="px-3 py-1 bg-stone/20 text-[9px] uppercase tracking-wider rounded-full">{m}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-luxury-gold mb-3">Scope</h4>
                      <ul className="space-y-2">
                        {project.details.scope.slice(0, 3).map((s, i) => (
                          <li key={i} className="text-[11px] font-light text-muted flex items-center gap-2">
                             <div className="w-1 h-1 bg-luxury-gold/50 rounded-full" /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-luxury-gold mb-3">Goal & Output</h4>
                      <p className="font-light text-muted text-xs leading-relaxed italic border-l-2 border-luxury-gold/20 pl-4 py-1">
                        "{project.details.output || 'Premium 3D visual results.'}"
                      </p>
                    </div>
                    <button 
                      onClick={() => onOpenModal(project)}
                      className="w-full py-3 border border-charcoal/10 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-charcoal hover:text-ivory transition-all rounded-lg"
                    >
                      Enquire Now
                    </button>
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
