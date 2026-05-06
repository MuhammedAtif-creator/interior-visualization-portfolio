import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { MapPin, Calendar, Layout, List, Hash, ShieldCheck, Database } from 'lucide-react';

interface PortfolioTableProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function PortfolioTable({ projects, onProjectClick }: PortfolioTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="ai-panel overflow-hidden border border-border-glass"
    >
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-glass">
              <th className="px-8 py-6 text-[9px] uppercase tracking-[0.4em] text-cool-grey font-bold border-b border-border-glass">
                <div className="flex items-center gap-2 italic"><Hash size={12} className="text-cyan-teal" /> Matrix_ID</div>
              </th>
              <th className="px-8 py-6 text-[9px] uppercase tracking-[0.4em] text-cool-grey font-bold border-b border-border-glass">
                <div className="flex items-center gap-2 italic"><ShieldCheck size={12} className="text-soft-violet" /> Designation</div>
              </th>
              <th className="px-8 py-6 text-[9px] uppercase tracking-[0.4em] text-cool-grey font-bold border-b border-border-glass">Structural Vector</th>
              <th className="px-8 py-6 text-[9px] uppercase tracking-[0.4em] text-cool-grey font-bold border-b border-border-glass">Coord_Point</th>
              <th className="px-8 py-6 text-[9px] uppercase tracking-[0.4em] text-cool-grey font-bold border-b border-border-glass">Time_Epoch</th>
              <th className="px-8 py-6 text-[9px] uppercase tracking-[0.4em] text-cool-grey font-bold border-b border-border-glass">Img_Cts</th>
              <th className="px-8 py-6 text-[9px] uppercase tracking-[0.4em] text-cool-grey font-bold border-b border-border-glass text-right">Access</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, idx) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.03 }}
                className="group border-b border-border-glass hover:bg-glass transition-all cursor-pointer"
                onClick={() => onProjectClick(project)}
              >
                <td className="px-8 py-6">
                  <span className="text-[11px] font-mono text-cyan-teal uppercase">
                    #{project.id.padStart(3, '0')}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 aspect-square rounded-2xl overflow-hidden flex-shrink-0 border border-border-glass grayscale group-hover:grayscale-0 group-hover:border-cyan-teal/50 transition-all duration-500">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-frost font-serif text-lg group-hover:text-cyan-teal transition-colors tracking-tight">{project.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1 h-1 bg-cyan-teal rounded-full animate-pulse" />
                        <p className="text-[9px] text-cool-grey uppercase tracking-widest font-bold">{project.status}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex flex-wrap gap-2">
                    {project.category.slice(0, 1).map((cat, i) => (
                      <span key={i} className="text-[10px] text-frost font-bold border border-border-glass px-3 py-1.5 rounded-xl bg-midnight/50">
                        {cat}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2 text-cool-grey text-xs">
                    <MapPin size={12} className="text-warm-coral" />
                    {project.location}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2 text-cool-grey text-xs font-mono">
                    <Calendar size={12} className="text-cyan-teal" />
                    {project.year}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2 text-cool-grey text-xs font-mono">
                    <Database size={12} className="text-soft-violet" />
                    06_UNIT
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="w-12 h-12 rounded-2xl border border-border-glass text-cyan-teal flex items-center justify-center group-hover:bg-cyan-teal group-hover:text-midnight group-hover:border-cyan-teal transition-all shadow-xl active:scale-95">
                    <Layout size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
