import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Table as TableIcon } from 'lucide-react';
import { projects } from '../../data/projects';
import { Project, ProjectCategory } from '../../types';
import PortfolioGrid from './PortfolioGrid';
import PortfolioTable from './PortfolioTable';
import ProjectModal from './ProjectModal';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('year-desc');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: (ProjectCategory | 'All')[] = [
    'All', 'Residential', 'Villa', 'Apartment', 'Living Rooms', 'Bedrooms', 'Commercial', '3D Visualization', 'Space Planning'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category.includes(selectedCategory as ProjectCategory);
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-cinematic-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] text-accent-orange mb-6 block"
            >
              Curated Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-white tracking-tight"
            >
              Selected Works.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-light text-muted-text leading-relaxed"
            >
              Focusing strictly on high-end interior concepts, 3D visualizations, and intellectual space planning.
            </motion.p>
          </div>

          <div className="flex items-center gap-2 glass-panel p-2 border border-white/10">
            <button 
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all duration-500 ${
                viewMode === 'grid' ? 'bg-white text-black shadow-xl scale-105' : 'text-white/40 hover:bg-white/5'
              }`}
            >
              <LayoutGrid size={14} /> Grid
            </button>
            <button 
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all duration-500 ${
                viewMode === 'table' ? 'bg-white text-black shadow-xl scale-105' : 'text-white/40 hover:bg-white/5'
              }`}
            >
              <TableIcon size={14} /> Table
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 border ${
                selectedCategory === cat 
                ? 'bg-accent-orange border-accent-orange text-white shadow-lg shadow-accent-orange/30' 
                : 'glass-panel border-white/10 text-muted-text hover:border-accent-orange hover:text-accent-orange'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <PortfolioGrid projects={filteredProjects} onOpenModal={setSelectedProject} />
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <PortfolioTable 
                projects={filteredProjects} 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                sortOption={sortOption}
                setSortOption={setSortOption}
                onProjectClick={setSelectedProject}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {filteredProjects.length === 0 && viewMode === 'grid' && (
          <div className="py-32 text-center">
            <p className="text-muted font-light italic">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
