import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Compass, Briefcase, Minus } from 'lucide-react';

export default function About() {
  const achievements = [
    { label: 'Visual Concepts Developed', value: '100+' },
    { label: 'Client Engagement Increase', value: '50%' },
    { label: 'Spatial Efficiency Gain', value: '30%' },
    { label: 'Project Cost Reduction', value: '15%' },
  ];

  const languages = ['English', 'Malayalam', 'Hindi'];

  return (
    <section id="about" className="py-32 px-6 lg:px-24 bg-main-bg relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left: Cinematic Portrait & Stats */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] overflow-hidden group border border-divider"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="Muhammed Atif"
                className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 border-[15px] border-main-bg pointer-events-none" />
              <div className="absolute bottom-12 left-12">
                 <span className="label-sm text-white mix-blend-difference">DESIGN_OPERATOR // M. ATIF</span>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-12 border-y border-divider">
              {achievements.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-serif text-accent tracking-tighter">{item.value}</span>
                  </div>
                  <h4 className="label-sm opacity-60 leading-tight">{item.label}</h4>
                </motion.div>
              ))}
            </div>

            {/* Professional Mobility Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-divider bg-secondary-bg space-y-4"
            >
              <div className="flex items-center gap-4 text-accent">
                <Compass size={20} strokeWidth={1.5} />
                <h4 className="label-sm text-primary-text">Professional Mobility</h4>
              </div>
              <p className="text-xs uppercase tracking-widest text-primary-text font-bold">Valid UAE Driving License Holder</p>
              <p className="text-secondary-text text-[11px] font-light leading-relaxed">
                Available for on-site meetings, project coordination, and site supervision across all Emirates.
              </p>
            </motion.div>
          </div>

          {/* Right: Detailed CV Information */}
          <div className="lg:col-span-7 flex flex-col pt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              {/* Profile Intro */}
              <div className="space-y-8">
                <span className="label-sm text-accent">PROFESSIONAL PROFILE</span>
                <h2 className="text-5xl md:text-7xl editorial-title leading-tight">
                  Passionate <span className="italic block">Interior Architect.</span>
                </h2>
                <div className="space-y-6 text-secondary-text text-xl font-light leading-relaxed max-w-2xl">
                  <p>
                    Muhammed Atif is a dedicated Interior Designer & 3D Visualizer with extensive experience delivering high-quality concepts, realistic visualizations, and presentation-ready solutions across residential and commercial sectors in UAE and India.
                  </p>
                  <p className="text-base text-accent italic">
                    Specialized in transforming architectural concepts into realistic visuals that improve client engagement and project communication.
                  </p>
                </div>
              </div>

              {/* Education & Focus */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-divider">
                <div className="space-y-8">
                  <h4 className="label-sm text-accent">Academic Credential</h4>
                  <div className="space-y-4">
                    <p className="text-2xl font-serif text-primary-text">Diploma in Interior Design</p>
                    <p className="label-sm opacity-60">Srishti Interior Design Kerala, India<br/>Class of 2020</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <h4 className="label-sm text-accent">Academic Focus</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {['Residential & Retail Design', 'Office Renovation Concepts', 'Space Planning Strategies', 'Material & Lighting Science'].map(item => (
                      <li key={item} className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-secondary-text">
                        <Minus size={12} className="text-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Languages */}
              <div className="pt-16 border-t border-divider space-y-8">
                <h4 className="label-sm text-accent">Linguistic Proficiency</h4>
                <div className="flex flex-wrap gap-4">
                  {languages.map(lang => (
                    <span key={lang} className="px-8 py-3 border border-divider text-[10px] uppercase tracking-[0.2em] font-bold text-primary-text hover:border-accent transition-colors">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

