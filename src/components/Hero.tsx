import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Instagram, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-cinematic-black flex items-center">
      {/* Cinematic Background */}
      <motion.div 
        style={{ y, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cinematic-black via-cinematic-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-orange/10 blur-[150px] z-10 rounded-full mix-blend-screen" />
        
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.3 }
            }
          }}
          className="lg:col-span-7"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            className="flex items-center gap-4 text-accent-orange mb-8"
          >
            <div className="w-12 h-[2px] bg-accent-orange" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold">Muhammed Atif</span>
          </motion.div>
          
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="text-6xl md:text-[100px] font-serif leading-[0.9] tracking-tighter mb-8"
          >
            Interior Designer <br />
            <span className="text-white/40">& </span>
            <span className="text-accent-orange glow-text-orange italic">3D Visualizer.</span>
          </motion.h1>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-base md:text-xl font-light mb-12 max-w-xl leading-relaxed text-muted-text"
          >
            Crafting refined interiors through design, detail, and visual storytelling. Transforming concepts into cinematic architectural realities.
          </motion.p>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-8 items-center"
          >
            <a href="#portfolio" className="group flex items-center gap-3 bg-accent-orange text-white px-10 py-5 rounded-[4px] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-accent-dark transition-all shadow-[0_10px_40px_rgba(255,90,31,0.3)]">
              View Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="text-white hover:text-accent-orange transition-colors text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-1">
              Contact Me
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-20 flex gap-16 border-t border-white/5 pt-10"
          >
            <div>
              <span className="text-3xl font-serif block mb-1">100+</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-muted-text">Bespoke Designs</span>
            </div>
            <div>
              <span className="text-3xl font-serif block mb-1">95%</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-muted-text">Client Trust</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Glass Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="glass-panel p-10 rounded-[20px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/5 blur-[50px] -mr-16 -mt-16 rounded-full" />
            
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-8 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Muhammed Atif" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-text font-bold">Status</span>
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-green-400 font-bold">
                  <CheckCircle2 size={12} /> Available for projects
                </span>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-serif text-white/60 italic block mb-4">"Transforming dimensions into experiences."</span>
                <div className="flex gap-4">
                  <motion.a whileHover={{ y: -3, color: '#FF5A1F' }} href="#" className="p-3 glass-panel rounded-full text-white/50 hover:border-accent-orange">
                    <Instagram size={18} />
                  </motion.a>
                  <motion.a whileHover={{ y: -3, color: '#FF5A1F' }} href="#" className="p-3 glass-panel rounded-full text-white/50 hover:border-accent-orange">
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a whileHover={{ y: -3, color: '#FF5A1F' }} href="mailto:muhammedatif5041@gmail.com" className="p-3 glass-panel rounded-full text-white/50 hover:border-accent-orange">
                    <Mail size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] font-bold">Inhale</span>
        <div className="w-1 h-12 bg-white/5 rounded-full relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-4 bg-accent-orange rounded-full shadow-[0_0_10px_rgba(255,90,31,0.5)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
