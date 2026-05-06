import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Minus } from 'lucide-react';
import { projects } from '../../data/projects';
import { Project, ProjectCategory } from '../../types';
import PortfolioGrid from './PortfolioGrid';
import ProjectModal from './ProjectModal';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: (ProjectCategory | 'All')[] = [
    'All', 'Residential Villa', 'Luxury Residential Apartment', 'Commercial Interior', '3D Visualization'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      return activeCategory === 'All' || project.category.includes(activeCategory as ProjectCategory);
    });
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-24 bg-secondary-bg relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto relative z-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="label-sm text-accent">CURATED ARCHIVE</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl editorial-title leading-tight">
              Interior <br /> <span className="italic">Exhibitions.</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 lg:gap-12 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative py-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 overflow-hidden group ${
                  activeCategory === cat ? 'text-accent' : 'text-secondary-text hover:text-primary-text'
                }`}
              >
                {cat}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent transform transition-transform duration-500 origin-left ${
                  activeCategory === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <PortfolioGrid 
          projects={filteredProjects} 
          onProjectClick={setSelectedProject} 
        />

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center"
          >
            <h3 className="text-2xl font-serif text-primary-text mb-2">No Projects Found</h3>
            <p className="text-secondary-text text-sm font-light">Try adjusting your filters.</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
