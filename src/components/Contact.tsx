import { motion } from 'motion/react';
import { Send, ChevronDown } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-cinematic-black">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <span className="text-[10px] uppercase tracking-[0.5em] text-accent-orange mb-6 block">Inquiry</span>
        <h2 className="text-4xl md:text-7xl font-serif mb-8 text-white tracking-tight">Let's craft your vision.</h2>
        <p className="text-muted-text font-light text-xl leading-relaxed">
          Whether it's a bespoke residence or a grand commercial visualization, <br />
          we're here to elevate your space into a cinematic reality.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { label: 'Connect via Phone', value: '+971 582267604', sub: 'Project Inquiries (UAE)' },
            { label: 'Direct Email', value: 'muhammedatif5041@gmail.com', sub: '24-hour response cycle' },
            { label: 'Base of Operations', value: 'Dubai, UAE', sub: 'Regional Architectural Hub' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 glass-panel border border-white/5 text-center group transition-all duration-500 bg-white/[0.02] hover:glow-orange"
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-muted-text mb-5 block group-hover:text-accent-orange transition-colors">{item.label}</span>
              <p className="text-lg font-serif mb-2 text-white group-hover:text-white transition-colors">{item.value}</p>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">{item.sub}</span>
            </motion.div>
          ))}
      </div>

      <div className="max-w-3xl mx-auto p-12 md:p-16 glass-panel border border-white/5 shadow-2xl relative overflow-hidden bg-white/[0.01]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/5 blur-3xl -mr-32 -mt-32 rounded-full opacity-50" />
        
        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12 relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent-orange mb-4 block">Full Identity</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/10 py-5 outline-none focus:border-accent-orange transition-all font-light text-white"
                placeholder="Name of individual or firm"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-orange group-focus-within:w-full transition-all duration-700 glow-orange" />
            </div>
            <div className="relative group">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent-orange mb-4 block">Digital Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/10 py-5 outline-none focus:border-accent-orange transition-all font-light text-white"
                placeholder="Official reachability"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-orange group-focus-within:w-full transition-all duration-700 glow-orange" />
            </div>
          </div>

          <div className="relative group">
            <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent-orange mb-4 block">Primary Goal</label>
            <select className="w-full bg-transparent border-b border-white/10 py-5 outline-none focus:border-accent-orange transition-all font-light text-white appearance-none cursor-pointer">
              <option className="bg-cinematic-black">Full Interior Design Lifecycle</option>
              <option className="bg-cinematic-black">Interior 3D Visualization</option>
              <option className="bg-cinematic-black">Space Planning & Layout Logic</option>
              <option className="bg-cinematic-black">Lighting & Material Narration</option>
            </select>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-orange group-focus-within:w-full transition-all duration-700 glow-orange" />
            <div className="absolute right-0 bottom-6 pointer-events-none group-hover:translate-y-1 transition-transform">
              <ChevronDown size={14} className="text-accent-orange" />
            </div>
          </div>

          <div className="relative group">
            <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent-orange mb-4 block">The Brief & Vision</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-white/10 py-5 outline-none focus:border-accent-orange transition-all font-light text-white resize-none"
              placeholder="Outline your architectural aspirations..."
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-orange group-focus-within:w-full transition-all duration-700 glow-orange" />
          </div>

          <div className="pt-8 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, letterSpacing: '0.4em' }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white text-black px-16 py-7 rounded-[12px] text-xs uppercase tracking-[0.3em] flex items-center gap-6 hover:bg-accent-orange hover:text-white transition-all duration-500 shadow-2xl relative overflow-hidden"
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
