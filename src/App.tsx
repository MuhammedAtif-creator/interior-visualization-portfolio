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
    <div className="min-h-screen bg-ivory selection:bg-luxury-gold/30">
      <Navbar />
      
      <main>
        <Hero />
        
         {/* Profile Section */}
        <section className="py-32 px-6 md:px-12 bg-ivory overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="md:w-1/3"
             >
                <span className="text-[10px] uppercase tracking-[0.5em] text-muted mb-6 block">The Designer</span>
                <h2 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight">Muhammed Atif.</h2>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="md:w-2/3"
             >
                <p className="text-xl md:text-2xl font-light leading-relaxed text-charcoal/80">
                  A dedicated <span className="text-luxury-gold font-medium">Interior Specialist</span> & 3D Visualizer, transforming complex architectural visions into atmospheric interior realities. With a portfolio of over <span className="text-luxury-gold font-medium">100+ bespoke concepts</span>, I bridge the gap between technical precision and emotive design.
                </p>
                <div className="w-20 h-1 bg-luxury-gold/30 mt-10" />
             </motion.div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-32 px-6 md:px-12 bg-stone/5 border-y border-black/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <span className="text-[10px] uppercase tracking-[0.5em] text-muted mb-6 block">Proven Impact</span>
              <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Career Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: <TrendingUp size={24} />, title: "Boosted Engagement", desc: "50% increase in client engagement using immersive interior design previews." },
                { icon: <Cpu size={24} />, title: "Reduced Costs", desc: "15% reduction in project costs through smart sustainable material strategies." },
                { icon: <Users size={24} />, title: "Interior Excellence", desc: "100+ high-quality interior visualizations delivered with high client satisfaction." },
                { icon: <Box size={24} />, title: "Improved Efficiency", desc: "30% improvement in spatial efficiency for commercial and residential layouts." },
                { icon: <Smartphone size={24} />, title: "Client Satisfaction", desc: "95% satisfaction rate through tailored interior design solutions." },
                { icon: <TrendingUp size={24} />, title: "Business Impact", desc: "Increased repeat clients by 25% and overall project revenue by 20%." }
              ].map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="p-10 glass-panel border border-black/5 group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="text-luxury-gold mb-8 group-hover:scale-110 transition-transform origin-left">{ach.icon}</div>
                  <h4 className="text-xl font-medium mb-3 tracking-tight text-charcoal">{ach.title}</h4>
                  <p className="text-sm font-light text-muted leading-relaxed">{ach.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioSection />
        
        {/* Tools & Expertise Section */}
        <section className="py-32 px-6 md:px-12 bg-sand/20">
           <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                   <span className="text-[10px] uppercase tracking-[0.5em] text-muted mb-6 block">Capabilities</span>
                   <h2 className="text-5xl md:text-6xl font-serif mb-16 tracking-tight">Technical Arsenal</h2>
                   <div className="space-y-12">
                      <div>
                         <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Expert Software</h4>
                         <div className="flex flex-wrap gap-4">
                            {['Blender', '3ds Max', 'V-Ray', 'AutoCAD', 'Photoshop', 'Adobe Premiere'].map(tool => (
                              <span key={tool} className="px-8 py-3 glass-panel text-[11px] font-medium tracking-widest uppercase rounded-full border border-black/5 hover:border-luxury-gold hover:text-luxury-gold transition-all cursor-default">{tool}</span>
                            ))}
                         </div>
                      </div>
                      <div>
                         <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Area of Mastery</h4>
                         <div className="flex flex-wrap gap-4">
                            {['Interior Design', '3D Visualization', 'Space Planning', 'Lighting Design', 'Material Sourcing', 'Cinematic Rendering'].map(skill => (
                              <span key={skill} className="px-8 py-3 bg-charcoal/5 text-[11px] font-medium tracking-widest uppercase rounded-full border border-black/5 text-charcoal/70 hover:bg-charcoal hover:text-ivory transition-all cursor-default">{skill}</span>
                            ))}
                         </div>
                      </div>
                   </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="glass-panel rounded-[40px] p-20 text-center border border-black/5 shadow-2xl bg-white/40"
                >
                    <Award size={80} className="text-luxury-gold mx-auto mb-8" />
                    <h3 className="text-3xl font-serif mb-6 text-charcoal tracking-tight">Design Quality Index</h3>
                    <p className="text-lg font-light text-muted leading-relaxed max-w-sm mx-auto italic border-l-2 border-luxury-gold/20 pl-6">
                      "Delivering hyper-realistic visualizations that don't just show a space, but tell its story."
                    </p>
                </motion.div>
             </div>
           </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 md:px-12 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <span className="text-[10px] uppercase tracking-[0.5em] text-muted mb-6 block">Bespoke Solutions</span>
              <h2 className="text-5xl md:text-7xl font-serif tracking-tight">Strategic Design</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: <Box size={32} />, title: 'Interior Design', desc: 'Holistic spatial conceptualization with a focus on luxury, flow, and functional architectural balance.' },
                { icon: <Lightbulb size={32} />, title: '3D Visualization', desc: 'Cinematic interior renders crafted with precision, lighting expertise, and high-fidelity material simulation.' },
                { icon: <PenTool size={32} />, title: 'Space Planning', desc: 'Data-driven layout strategies designed to maximize efficiency in both residential and commercial projects.' },
                { icon: <MousePointer2 size={32} />, title: 'Mood curation', desc: 'Developing immersive sensory narratives through material selection, lighting, and tactile material palettes.' },
                { icon: <Cpu size={32} />, title: 'Technical Execution', desc: 'Detailed 3D models and lighting setups optimized for high-performance rendering and clear client vision.' },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-12 glass-panel border border-black/5 hover:border-luxury-gold transition-all duration-500 group bg-white/20"
                >
                  <div className="mb-10 text-luxury-gold group-hover:scale-110 transition-transform origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-5 tracking-tight text-charcoal">{service.title}</h3>
                  <p className="text-base font-light text-muted leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience / Timeline Section */}
        <section id="experience" className="py-32 px-6 md:px-12 bg-stone/5 border-t border-black/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/3"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-muted mb-8 block">Project Record</span>
              <h3 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight">Professional Pedigree.</h3>
              <p className="mt-8 text-muted font-light text-lg">Four years of specialized growth across Dubai and international design capitals.</p>
            </motion.div>
            <div className="md:w-2/3 space-y-20">
              {[
                { 
                  company: 'INTERIOFY SPACES', 
                  location: 'Dubai, UAE',
                  role: '3D Visualizer', 
                  period: 'Jan 2025 – Present',
                  points: [
                    'Producing studio-grade 3D interior visuals for premium regional developments.',
                    'Engineered realistic lighting pipelines for high-stakes client presentations.',
                    'Developed custom material libraries for luxury villa projects.'
                  ]
                },
                { 
                  company: 'BRANDING SPARROW', 
                  location: 'Kochi, India',
                  role: 'Interior Designer', 
                  period: '2022 – 2024',
                  points: [
                    'Led the design execution of 15+ high-end residential projects annually.',
                    'Achieved a 30% satisfaction surge using advanced 3D visualization previews.',
                    'Optimized material budgets by 15% without compromising architectural integrity.'
                  ]
                },
                { 
                  company: 'INTERIOR DESIGN ENGINEERS GUILD', 
                  location: 'Kochi, India',
                  role: 'Interior Designer', 
                  period: '2021 – 2022',
                  points: [
                    'Pioneered VR-integrated design reviews increasing engagement by 50%.',
                    'Redesigned commercial offices achieving 30% improved spatial density.',
                    'Maintained a 95% client project success and retention rate.'
                  ]
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 glass-panel border border-black/5 hover:border-luxury-gold/50 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:justify-between items-baseline mb-10 gap-6">
                    <div>
                      <h4 className="text-3xl font-serif tracking-tight text-charcoal">{item.company}</h4>
                      <p className="text-luxury-gold uppercase text-[9px] font-bold tracking-[0.4em] mt-3">{item.location} — {item.role}</p>
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase px-6 py-2 glass-dark rounded-full whitespace-nowrap text-white">{item.period}</span>
                  </div>
                  <ul className="space-y-6">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex gap-6 text-muted font-light leading-relaxed group">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/40 mt-3 shrink-0 group-hover:bg-luxury-gold transition-colors" />
                        <span className="text-base group-hover:text-charcoal transition-colors">{pt}</span>
                      </li>
                    ))}
                  </ul>
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

