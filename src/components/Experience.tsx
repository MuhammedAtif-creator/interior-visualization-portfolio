import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Interiofy Spaces',
    location: 'Dubai, UAE',
    role: '3D Visualizer',
    period: 'Jan 2025 – Present',
    desc: 'Creating high-quality interior visualizations for apartments, villas, and commercial spaces. Developing realistic textures, lighting, and models to improve client understanding and engagement.',
    expertise: ['3ds Max', 'V-Ray', 'Cinematic Viz']
  },
  {
    company: 'Branding Sparrow',
    location: 'Kochi, India',
    role: 'Interior Designer',
    period: 'Aug 2022 – Aug 2023',
    desc: 'Designed and executed 15+ interior projects annually. Specialized in sustainable material sourcing and coordinating custom interior solutions for residential and commercial units.',
    expertise: ['Visualization', 'Sustainable Design', 'Project Mgmt']
  },
  {
    company: 'Interior Design Engineers Guild',
    location: 'Kochi, India',
    role: 'Interior Designer',
    period: 'Jul 2021 – Jul 2022',
    desc: 'Designed commercial interior layouts, improving spatial efficiency and functional planning. Worked on space planning and material concepts for diverse commercial projects.',
    expertise: ['Space Planning', 'Commercial Layouts', 'Efficiency']
  },
  {
    company: 'Design Desire Studio',
    location: 'Kochi, India',
    role: '3D Visualizer',
    period: 'Jan 2020 – Jan 2021',
    desc: 'Produced architectural and interior visualizations for residential and commercial design projects. Created realistic render compositions and walkthrough animations.',
    expertise: ['Blender', '3ds Max', 'Visual Narrative']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-40 px-6 lg:px-24 bg-main-bg relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between mb-32 items-end gap-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="label-sm text-accent">CHRONOLOGY</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl editorial-title leading-tight">
              The Path <br /> <span className="italic">of Design.</span>
            </h2>
          </div>
          <p className="text-secondary-text text-lg font-light max-w-md leading-relaxed">
            A selective history of architectural contributions and professional evolution within the global interior landscape.
          </p>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="group py-16 border-t border-divider first:border-t-0 hover:bg-secondary-bg transition-colors duration-700 px-0 lg:px-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Year & Role */}
                <div className="lg:col-span-3 space-y-4">
                  <span className="label-sm text-accent opacity-50 group-hover:opacity-100 transition-opacity">/{exp.period}</span>
                  <div className="h-px w-12 bg-divider group-hover:w-24 transition-all duration-700" />
                  <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-primary-text">{exp.role}</h3>
                </div>

                {/* Company & Details */}
                <div className="lg:col-span-6 space-y-6">
                   <h4 className="text-4xl editorial-title group-hover:text-accent transition-colors duration-500">{exp.company}</h4>
                   <p className="text-secondary-text text-sm font-light leading-relaxed max-w-xl">
                     {exp.desc}
                   </p>
                </div>

                {/* Expertise & Location */}
                <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-6">
                   <span className="label-sm opacity-60 italic">{exp.location}</span>
                   <div className="flex flex-wrap lg:justify-end gap-3">
                      {exp.expertise.map(skill => (
                        <span key={skill} className="px-3 py-1 border border-divider text-[10px] uppercase tracking-widest text-secondary-text group-hover:text-primary-text transition-colors">
                          {skill}
                        </span>
                      ))}
                   </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Bottom Decoration */}
        <div className="mt-32 pt-32 border-t border-divider flex justify-between items-center opacity-30 select-none">
           <span className="label-sm uppercase">End of Log</span>
           <div className="flex gap-4">
              <span className="text-4xl font-serif italic">MA.</span>
              <span className="text-4xl font-serif">2024</span>
           </div>
        </div>

      </div>
    </section>
  );
}
