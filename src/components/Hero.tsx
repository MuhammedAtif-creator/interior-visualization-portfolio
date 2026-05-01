import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.15]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal flex items-center justify-center">
      <motion.div 
        style={{ y, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-charcoal/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2072&auto=format&fit=crop" 
          alt="Premium Interior Visualization" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-ivory">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
              }
            }
          }}
          className="max-w-3xl glass-dark p-8 md:p-12 border border-white/5"
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.8, y: 0 }
            }}
            className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 block font-medium"
          >
            Muhammed Atif
          </motion.span>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-5xl md:text-8xl font-serif leading-tight tracking-tight mb-6"
          >
            Interior Designer & <br />
            <span className="text-luxury-gold italic">3D Visualizer.</span>
          </motion.h1>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.9, y: 0 }
            }}
            className="text-base md:text-xl font-light mb-10 max-w-xl leading-relaxed opacity-80"
          >
            Crafting refined interiors through design, detail, and visual storytelling.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-wrap gap-6 items-center"
          >
            <a href="#portfolio" className="bg-luxury-gold text-charcoal px-8 py-4 rounded-[12px] text-xs uppercase tracking-widest hover:bg-ivory transition-all shadow-xl hover:-translate-y-1">
              View Portfolio
            </a>
            <a href="#contact" className="border border-white/20 backdrop-blur-sm text-ivory px-8 py-4 rounded-[12px] text-xs uppercase tracking-widest hover:bg-white/10 transition-all hover:-translate-y-1">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 2, 
          duration: 1,
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-ivory/50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
        <div className="w-[1px] h-12 bg-ivory/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-4 bg-luxury-gold absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
