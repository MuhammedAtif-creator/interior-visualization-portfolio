import { motion } from 'motion/react';
import { Send, ChevronDown } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-ivory">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.5em] text-muted mb-6 block">Inquiry</span>
        <h2 className="text-4xl md:text-6xl font-serif mb-8">Let's craft your vision.</h2>
        <p className="text-muted font-light text-xl">
          Whether it's a bespoke residence or a grand commercial project, <br />
          we're here to elevate your space.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { label: 'Connect via Phone', value: '+971 582267604', sub: 'UAE Line' },
            { label: 'Direct Email', value: 'muhammedatif5041@gmail.com', sub: 'Project Inquiries' },
            { label: 'Office/Studio', value: 'Dubai, UAE', sub: 'Regional Presence' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
              className="p-10 glass-panel border border-black/5 text-center group transition-all duration-500"
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-muted mb-4 block group-hover:text-luxury-gold transition-colors">{item.label}</span>
              <p className="text-lg font-serif mb-1 text-charcoal">{item.value}</p>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted/60">{item.sub}</span>
            </motion.div>
          ))}
      </div>

      <div className="max-w-3xl mx-auto p-12 glass-panel border border-black/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 blur-3xl -mr-16 -mt-16 rounded-full" />
        
        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-10 relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative group">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted mb-3 block">Full Identity</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-stone/30 py-4 outline-none focus:border-luxury-gold transition-all font-light text-charcoal"
                placeholder="Enter your name"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-gold group-focus-within:w-full transition-all duration-700" />
            </div>
            <div className="relative group">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted mb-3 block">Digital Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-stone/30 py-4 outline-none focus:border-luxury-gold transition-all font-light text-charcoal"
                placeholder="email@example.com"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-gold group-focus-within:w-full transition-all duration-700" />
            </div>
          </div>

          <div className="relative group">
            <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted mb-3 block">Interested Service</label>
            <select className="w-full bg-transparent border-b border-stone/30 py-4 outline-none focus:border-luxury-gold transition-all font-light text-charcoal appearance-none cursor-pointer">
              <option>Residential Interior Design</option>
              <option>3D Interior Visualization</option>
              <option>Commercial Visualization</option>
              <option>FF&E Selection & Lighting</option>
            </select>
            <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-gold group-focus-within:w-full transition-all duration-700" />
            <div className="absolute right-0 bottom-4 pointer-events-none group-hover:translate-y-1 transition-transform">
              <ChevronDown size={14} className="text-luxury-gold" />
            </div>
          </div>

          <div className="relative group">
            <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted mb-3 block">Project Vision</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-stone/30 py-4 outline-none focus:border-luxury-gold transition-all font-light text-charcoal resize-none"
              placeholder="Tell me about your architectural aspirations..."
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-gold group-focus-within:w-full transition-all duration-700" />
          </div>

          <div className="pt-8 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, letterSpacing: '0.4em' }}
              whileTap={{ scale: 0.98 }}
              className="group bg-charcoal text-ivory px-16 py-6 rounded-[12px] text-xs uppercase tracking-[0.3em] flex items-center gap-6 hover:bg-luxury-gold transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-4">
                Transmit Inquiry
                <Send size={14} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
