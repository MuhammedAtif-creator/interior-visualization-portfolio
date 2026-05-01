import { motion } from 'motion/react';
import { Project } from '../../types';
import { Search, ChevronDown, Maximize2 } from 'lucide-react';

interface PortfolioTableProps {
  projects: Project[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  onProjectClick: (project: Project) => void;
}

export default function PortfolioTable({
  projects,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
  onProjectClick
}: PortfolioTableProps) {
  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOption === 'year-desc') return b.year - a.year;
    if (sortOption === 'year-asc') return a.year - b.year;
    if (sortOption === 'name-asc') return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between pb-8 border-b border-stone/30">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={16} />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, location..."
            className="w-full glass-panel border border-stone/20 rounded-xl py-3.5 pl-12 pr-4 text-sm font-light outline-none focus:border-luxury-gold/50 transition-all shadow-inner"
          />
        </div>
        
        <div className="flex items-center gap-6 w-full md:w-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted whitespace-nowrap">Sort By</span>
          <div className="relative">
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none bg-white/5 border border-stone/20 rounded-xl px-6 py-3 text-[10px] uppercase tracking-[0.2em] outline-none focus:border-luxury-gold/50 cursor-pointer pr-10"
            >
              <option value="year-desc">Year (Newest)</option>
              <option value="year-asc">Year (Oldest)</option>
              <option value="name-asc">Alphabetical</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto glass-panel border border-black/5 shadow-2xl no-scrollbar">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead>
            <tr className="bg-charcoal/5 border-b border-stone/20">
              <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-muted">Project</th>
              <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-muted">Category</th>
              <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-muted">Location</th>
              <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-muted">Year</th>
              <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-muted">Scope</th>
              <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-muted">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedProjects.map((project, index) => (
              <motion.tr 
                key={project.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group border-b border-stone/10 last:border-0 hover:bg-luxury-gold/[0.03] transition-all cursor-pointer"
                onClick={() => onProjectClick(project)}
              >
                <td className="p-8">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-black/5 group-hover:scale-105 transition-transform">
                      <img src={project.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-serif text-xl tracking-tight group-hover:text-luxury-gold transition-colors">{project.title}</span>
                  </div>
                </td>
                <td className="p-8 text-sm">
                  <div className="flex flex-wrap gap-2">
                    {project.category.slice(0, 2).map(c => (
                      <span key={c} className="text-[10px] border border-stone/30 px-3 py-1 rounded-full uppercase tracking-widest text-muted">{c}</span>
                    ))}
                  </div>
                </td>
                <td className="p-8 text-xs uppercase tracking-widest text-muted font-light">{project.location}</td>
                <td className="p-8 font-serif text-xl text-charcoal/70">{project.year}</td>
                <td className="p-8 text-xs font-light text-muted uppercase tracking-widest">{project.details.scope.slice(0, 2).join(' / ')}</td>
                <td className="p-8">
                  <button className="text-[9px] uppercase tracking-[0.3em] font-bold text-charcoal/40 flex items-center gap-3 group-hover:text-luxury-gold transition-all">
                    View <Maximize2 size={12} className="text-luxury-gold" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        {sortedProjects.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center gap-4">
            <Search size={40} className="text-stone" />
            <p className="text-muted font-light">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
