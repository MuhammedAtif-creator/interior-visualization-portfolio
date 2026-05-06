import React from 'react';
import { motion } from 'motion/react';
import { 
  Box, 
  Maximize, 
  Layers, 
  Lightbulb, 
  PenTool, 
  PlayCircle
} from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'High-Fidelity Visualization',
    desc: 'Translating architectural blueprints into hyper-realistic digital twins with advanced light orchestration and physically-based material systems.',
    icon: <Box size={24} strokeWidth={1} />,
    expertise: ['Blender', '3ds Max', 'V-Ray', 'Corona']
  },
  {
    id: '02',
    title: 'Technical Space Planning',
    desc: 'Strategic optimization of interior floorplans to maximize efficiency, ergonomic flow, and spatial rhythm in high-luxury contexts.',
    icon: <Maximize size={24} strokeWidth={1} />,
    expertise: ['AutoCAD', 'Blueprint Analysis']
  },
  {
    id: '03',
    title: 'Furniture Curation',
    desc: 'Bespoke furniture positioning and material selection that balances visual weight with architectural necessity.',
    icon: <Layers size={24} strokeWidth={1} />,
    expertise: ['Material Science', 'Scale Mapping']
  },
  {
    id: '04',
    title: 'Lighting Direction',
    desc: 'Meticulous calculation of color temperatures and intensities to craft a cinematic spatial atmosphere.',
    icon: <Lightbulb size={24} strokeWidth={1} />,
    expertise: ['IES Simulation', 'Mood Boards']
  },
  {
    id: '05',
    title: 'Design Documentation',
    desc: 'Comprehensive execution drawings and material specifications for seamless design-to-construction transitions.',
    icon: <PenTool size={24} strokeWidth={1} />,
    expertise: ['Detailing', 'Material Specs']
  },
  {
    id: '06',
    title: 'Animated Walkthroughs',
    desc: 'Cinematic, high-definition journeys through architectural spaces, providing an immersive sensory narrative before execution.',
    icon: <PlayCircle size={24} strokeWidth={1} />,
    expertise: ['Animation', 'Art Direction']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-40 px-6 lg:px-24 bg-secondary-bg relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between mb-32 items-end gap-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="label-sm text-accent">CAPABILITIES</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl editorial-title leading-tight">
              Curated <br /> <span className="italic">Solutions.</span>
            </h2>
          </div>
          <p className="text-secondary-text text-lg font-light max-w-md leading-relaxed">
            A meticulous range of architectural services focused on precision, atmosphere, and the ultimate realization of space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-divider">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="group p-12 lg:p-16 border-r border-b border-divider hover:bg-main-bg transition-colors duration-700 relative overflow-hidden h-full flex flex-col"
            >
              <div className="flex justify-between items-start mb-16">
                 <div className="w-16 h-16 border border-divider group-hover:border-accent flex items-center justify-center text-primary-text group-hover:text-accent transition-colors duration-500">
                    {service.icon}
                 </div>
                 <span className="text-xs font-mono text-accent opacity-40">#{service.id}</span>
              </div>

              <div className="flex-1 space-y-6">
                 <h3 className="text-3xl editorial-title group-hover:text-accent transition-colors duration-500">{service.title}</h3>
                 <p className="text-secondary-text text-[15px] font-light leading-relaxed max-w-xs">
                   {service.desc}
                 </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                 {service.expertise.map(tool => (
                   <span key={tool} className="text-[9px] uppercase tracking-widest text-secondary-text border-b border-divider/40">
                     {tool}
                   </span>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software Expertise & Core Skills */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Software Expertise */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="label-sm text-accent">SOFTWARE EXPERTISE</span>
              <h3 className="text-4xl editorial-title text-primary-text">Technical <span className="italic">Stack.</span></h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'Blender', level: '85%' },
                { name: '3ds Max', level: '95%' },
                { name: 'V-Ray', level: '90%' },
                { name: 'AutoCAD', level: '92%' },
                { name: 'Photoshop', level: '88%' },
                { name: 'Illustrator', level: '80%' },
              ].map((software) => (
                <motion.div
                  key={software.name}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-main-bg border border-divider group hover:border-accent transition-all duration-500"
                >
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary-text">{software.name}</span>
                    <span className="text-[9px] font-mono text-accent opacity-40 group-hover:opacity-100">{software.level}</span>
                  </div>
                  <div className="h-[1px] bg-divider group-hover:bg-accent/30 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="label-sm text-accent">CORE SKILLS</span>
              <h3 className="text-4xl editorial-title text-primary-text">Functional <span className="italic">Depth.</span></h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4">
              {[
                'Interior Design', '3D Interior Visualization', 'Space Planning', 
                'Layout Design', 'Lighting Design', 'Material Selection',
                'Moodboard Direction', 'Rendering Optimization', 'Walkthrough Animation',
                'Client Presentation Visuals', 'Residential Interior Planning', 'Commercial Interior Concepts'
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-4 py-3 border-b border-divider group">
                  <div className="w-1.5 h-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-all rounded-full" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-secondary-text group-hover:text-primary-text transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
