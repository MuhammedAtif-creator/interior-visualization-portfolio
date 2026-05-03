/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { MousePointer2, Box, Lightbulb, PenTool, Award, Users, TrendingUp, Cpu, Smartphone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-cinematic-black text-white selection:bg-accent-orange/30">
      <Navbar />
      
      <main>
        <Hero />
        
         {/* Profile Section */}
        <section className="py-32 px-6 md:px-12 bg-deep-grey overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="md:w-1/3"
             >
                <span className="text-[10px] uppercase tracking-[0.5em] text-accent-orange mb-6 block">The Visionary</span>
                <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight">Muhammed <br /> Atif.</h2>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="md:w-2/3"
             >
                <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-text">
                  A dedicated <span className="text-white font-medium">Interior Specialist</span> & 3D Visualizer, transforming complex architectural visions into atmospheric interior realities. With a portfolio of over <span className="text-accent-orange font-medium">100+ bespoke concepts</span>, I bridge the gap between technical precision and emotive design.
                </p>
                <div className="w-20 h-[2px] bg-accent-orange mt-12 glow-orange" />
             </motion.div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-32 px-6 md:px-12 bg-cinematic-black border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent-orange mb-6 block">Proven Impact</span>
              <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Systematic Excellence.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <TrendingUp size={24} />, title: "50% Engagement", desc: "Boosted client interaction using immersive 3D previews." },
                { icon: <Cpu size={24} />, title: "15% Efficiency", desc: "Reduction in project overhead through smart material strategies." },
                { icon: <Users size={24} />, title: "95% Trust", desc: "Top-tier client satisfaction across luxury projects." },
                { icon: <Box size={24} />, title: "30% Optimization", desc: "Spatial planning improvements in high-end residences." }
              ].map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-10 glass-panel group transition-all duration-500 hover:glow-orange"
                >
                  <div className="text-accent-orange mb-8 group-hover:scale-110 transition-transform origin-left">{ach.icon}</div>
                  <h4 className="text-xl font-medium mb-3 tracking-tight text-white">{ach.title}</h4>
                  <p className="text-sm font-light text-muted-text leading-relaxed">{ach.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioSection />
        
        {/* Tools & Expertise Section */}
        <section className="py-32 px-6 md:px-12 bg-deep-grey">
           <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                   <span className="text-[10px] uppercase tracking-[0.5em] text-accent-orange mb-6 block">Technical Mastery</span>
                   <h2 className="text-5xl md:text-6xl font-serif mb-16 tracking-tight">The Engine Room.</h2>
                   <div className="space-y-12">
                      <div>
                         <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-6">Software Stack</h4>
                         <div className="flex flex-wrap gap-4">
                            {['Blender', '3ds Max', 'V-Ray', 'AutoCAD', 'Photoshop', 'Illustrator'].map(tool => (
                              <span key={tool} className="px-8 py-3 bg-white/5 text-[11px] font-medium tracking-widest uppercase rounded-sm border border-white/10 hover:border-accent-orange hover:text-accent-orange transition-all cursor-default">{tool}</span>
                            ))}
                         </div>
                      </div>
                      <div>
                         <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-6">Core Specialization</h4>
                         <div className="flex flex-wrap gap-4">
                            {['Interior Design', 'Interior 3D Visualization', 'Space Planning', 'Lighting Narrative', 'Material Sourcing', 'Cinematic Rendering'].map(skill => (
                              <span key={skill} className="px-8 py-3 bg-accent-orange/5 text-[11px] font-medium tracking-widest uppercase rounded-sm border border-accent-orange/20 text-accent-orange hover:bg-accent-orange hover:text-white transition-all cursor-default">{skill}</span>
                            ))}
                         </div>
                      </div>
                   </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="glass-panel p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-accent-orange/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
                    <Award size={80} className="text-accent-orange mx-auto mb-8 relative z-10" />
                    <h3 className="text-3xl font-serif mb-6 text-white tracking-tight relative z-10">Quality Benchmark</h3>
                    <p className="text-lg font-light text-muted-text leading-relaxed max-w-sm mx-auto italic border-l-2 border-accent-orange/40 pl-6 relative z-10">
                      "Delivering hyper-realistic visualizations that don't just show a space, but define its atmospheric potential."
                    </p>
                </motion.div>
             </div>
           </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 md:px-12 bg-cinematic-black">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent-orange mb-6 block">Capabilities</span>
              <h2 className="text-5xl md:text-7xl font-serif tracking-tight">Design Solutions.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Box size={32} />, title: 'Interior Design', desc: 'Holistic spatial conceptualization focusing on luxury, flow, and architectural balance.' },
                { icon: <Lightbulb size={32} />, title: '3D Visualization', desc: 'Cinematic interior renders crafted with precision lighting and material high-fidelity.' },
                { icon: <PenTool size={32} />, title: 'Space Planning', desc: 'Data-driven layout strategies designed to maximize efficiency in premium projects.' },
                { icon: <MousePointer2 size={32} />, title: 'Lighting Design', desc: 'Atmospheric light simulations that define mood and emphasize architectural details.' },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-12 glass-panel group transition-all duration-500 bg-white/[0.02]"
                >
                  <div className="mb-10 text-accent-orange group-hover:scale-110 transition-transform origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-5 tracking-tight text-white">{service.title}</h3>
                  <p className="text-base font-light text-muted-text leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience / Timeline Section */}
        <section id="experience" className="py-32 px-6 md:px-12 bg-deep-grey border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/3"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent-orange mb-8 block">Career Arc</span>
              <h3 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight">Professional <br /> Journey.</h3>
              <p className="mt-8 text-muted-text font-light text-lg">Specialized growth within Dubai's elite design sector and international hubs.</p>
            </motion.div>
            <div className="md:w-2/3 space-y-12">
              {[
                { 
                  company: 'INTERIOFY SPACES — Dubai', 
                  role: '3D Visualizer', 
                  period: '2025 – Present', 
                  desc: 'Crafting high-fidelity 3D interior visuals for premium regional residences and commercial environments.'
                },
                { 
                  company: 'BRANDING SPARROW — Kochi, India', 
                  role: 'Interior Designer', 
                  period: '2022 – 2023',
                  desc: 'Executed 15+ architectural concepts annually, leveraging 3D previews to increase client satisfaction by 30%.'
                },
                { 
                  company: 'INTERIOR DESIGN ENGINEERS GUILD — Kochi, India', 
                  role: 'Interior Designer', 
                  period: '2021 – 2022',
                  desc: 'Pioneered VR review workflows and redesigned commercial offices achieving 30% improved spatial density.'
                },
                { 
                  company: 'DESIGN DESIRE STUDIO — Kochi, India', 
                  role: '3D Visualizer', 
                  period: '2020 – 2021',
                  desc: 'Technical specialist in high-end renders for residential projects across Kerala and regional markets.'
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 glass-panel group transition-all duration-500 hover:glow-orange"
                >
                  <div className="flex flex-col md:flex-row md:justify-between items-baseline mb-6 gap-6">
                    <div>
                      <h4 className="text-3xl font-serif tracking-tight text-white">{item.company}</h4>
                      <p className="text-accent-orange uppercase text-[9px] font-bold tracking-[0.4em] mt-3">{item.role}</p>
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase px-6 py-2 bg-white/5 rounded-full border border-white/10">{item.period}</span>
                  </div>
                  <p className="text-muted-text font-light leading-relaxed text-base">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

