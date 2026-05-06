import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Download, Box, Maximize, Briefcase, PencilRuler } from 'lucide-react';

export default function HireMe() {
  const services = [
    { title: 'Interior Design', icon: <PencilRuler size={24} />, desc: 'Bespoke conceptualization for primary residential and commercial spaces.' },
    { title: '3D Visualization', icon: <Box size={24} />, desc: 'Hyper-realistic digital twins and cinematic walkthroughs.' },
    { title: 'Freelance Support', icon: <Briefcase size={24} />, desc: 'Flexible studio support and integrated visualization services.' },
    { title: 'Space Planning', icon: <Maximize size={24} />, desc: 'Ergonomic optimization and efficient layout orchestration.' },
  ];

  const handleDownloadCV = () => {
    // In a real scenario, this would link to a PDF
    alert("CV Download initiated. (Draft v2.0)");
  };

  return (
    <section id="hire-me" className="py-40 px-6 lg:px-24 bg-main-bg relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left: CTA */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="label-sm text-accent">COLLABORATION</span>
              <h2 className="text-6xl md:text-8xl editorial-title leading-tight">
                Build your <br /> <span className="italic">Vision.</span>
              </h2>
              <p className="text-secondary-text text-xl font-light leading-relaxed max-w-md">
                Available for high-end interior design, freelance visualization, and presentation-ready spatial development globally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact" 
                className="px-12 py-6 bg-accent text-main-bg text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-hover-accent transition-all flex items-center justify-center gap-4 group"
              >
                Hire Me
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <button 
                onClick={handleDownloadCV}
                className="px-12 py-6 border border-divider text-primary-text text-[10px] uppercase tracking-[0.4em] font-bold hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-4 group"
              >
                Download CV
                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Service Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 border border-divider hover:border-accent/40 bg-secondary-bg transition-all duration-500 group"
              >
                <div className="w-16 h-16 border border-divider group-hover:border-accent flex items-center justify-center text-secondary-text group-hover:text-accent transition-all mb-8">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-primary-text mb-4">{item.title}</h3>
                <p className="text-xs text-secondary-text font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
