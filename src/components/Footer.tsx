import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col mb-10"
            >
              <span className="text-3xl font-serif tracking-[0.2em] leading-none mb-3 uppercase">Muhammed Atif</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-luxury-gold/50" />
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-luxury-gold">Interior Specialist</span>
              </div>
            </motion.div>
            <p className="text-ivory/50 font-light text-base leading-relaxed max-w-xs italic">
              Crafting defined interior worlds through cinematic 3D visualization and architectural precision.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-white border-l-2 border-luxury-gold/30 pl-4">Navigation</h4>
            <ul className="space-y-5 text-sm font-light text-ivory/60">
              <li><a href="#portfolio" className="hover:text-luxury-gold transition-colors block">Portfolio</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors block">Services</a></li>
              <li><a href="#about" className="hover:text-luxury-gold transition-colors block">About</a></li>
              <li><a href="#experience" className="hover:text-luxury-gold transition-colors block">Experience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-white border-l-2 border-luxury-gold/30 pl-4">Contact Detail</h4>
            <ul className="space-y-5 text-sm font-light text-ivory/60">
              <li>muhammedatif5041@gmail.com</li>
              <li>+971 582267604</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-white border-l-2 border-luxury-gold/30 pl-4">Social Network</h4>
            <ul className="space-y-5 text-sm font-light text-ivory/60">
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-luxury-gold transition-colors block">Instagram</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-luxury-gold transition-colors block">Behance</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-luxury-gold transition-colors block">LinkedIn</motion.a></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-ivory/30">
            © {new Date().getFullYear()} Muhammed Atif — Architectural Visualization Studio
          </span>
          <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] font-medium text-ivory/30">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
