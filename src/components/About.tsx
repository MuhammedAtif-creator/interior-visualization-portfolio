import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-40 bg-deep-grey overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
                alt="Muhammed Atif Interior Design" 
                className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 glass-panel p-10 rounded-[28px] shadow-2xl hidden md:block border border-accent-orange/20 bg-black/60 backdrop-blur-3xl"
            >
              <span className="text-5xl font-serif text-accent-orange mb-3 block glow-text-orange">100+</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60">Architectural <br /> Visualizations</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-10"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent-orange mb-10 block">The Professional Persona</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-[1.1] tracking-tight text-white">
              Design is the <br /> <span className="italic text-accent-orange">soul of space.</span>
            </h2>
            <div className="space-y-8 text-muted-text leading-relaxed font-light text-xl">
              <p>
                I am <span className="text-white font-medium">Muhammed Atif</span>, an interior visualizer committed to the pursuit of atmospheric realism. My process integrates technical data with emotional intent, ensuring every render captures not just light and material, but the lived experience of a space.
              </p>
              <p>
                Based in the architectural heart of <span className="text-white font-medium underline decoration-accent-orange/30 underline-offset-8">Dubai</span>, I specialize in interior environments that demand a synthesis of form, function, and cinematic clarity.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/5 pt-16">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-orange block mb-4">Philosophy</span>
                <p className="text-sm text-white/60 leading-relaxed">Spatial narratives driven by light, shadow, and materiality.</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-orange block mb-4">Output</span>
                <p className="text-sm text-white/60 leading-relaxed">High-fidelity visuals that serve as a bridge to reality.</p>
              </div>
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="mt-16 group flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold text-white transition-all hover:text-accent-orange"
            >
              Explore the Journey
              <span className="p-4 border border-white/10 rounded-full group-hover:bg-accent-orange group-hover:border-accent-orange transition-all shadow-lg">
                <ArrowRight size={16} />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
