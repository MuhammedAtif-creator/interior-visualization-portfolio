import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 lg:px-24 bg-main-bg relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-24">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <span className="label-sm text-accent">CONTACT ARCHIVE</span>
              </motion.div>
              <h2 className="text-6xl md:text-8xl editorial-title leading-tight">
                Get in <br /> <span className="italic">Touch.</span>
              </h2>
              <p className="text-secondary-text text-lg font-light leading-relaxed max-w-sm">
                Discussing new architectural opportunities and visualization commissions globally.
              </p>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <span className="label-sm text-accent">DIRECT LINES</span>
                <div className="space-y-2">
                  <a href="mailto:muhammedatif5041@gmail.com" className="text-2xl lg:text-3xl text-primary-text hover:text-accent transition-colors font-serif block">
                    muhammedatif5041@gmail.com
                  </a>
                  <a href="tel:+971582267604" className="text-2xl lg:text-3xl text-primary-text hover:text-accent transition-colors font-serif block">
                    +971 58 226 7604
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <span className="label-sm text-accent">STUDIO LOCATION</span>
                <p className="text-2xl lg:text-3xl text-primary-text font-serif">
                  Dubai, UAE <br />
                  <span className="text-lg italic opacity-40 font-light">Global Remote Service Available</span>
                </p>
                <div className="pt-4 p-6 border border-divider bg-secondary-bg/50">
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Availability Notice</p>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    Open for freelance commissions, studio collaborations, and presentation-ready interior development projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 pt-12 border-t border-divider">
                {['LinkedIn', 'Instagram', 'Behance'].map((social) => (
                  <a key={social} href="#" className="label-sm hover:text-accent transition-colors">{social}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="lg:col-span-7">
            <form className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-4 group">
                  <label className="label-sm opacity-60 group-focus-within:opacity-100 group-focus-within:text-accent transition-all">YOUR NAME</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-divider py-4 text-xl font-light text-primary-text focus:outline-none focus:border-accent transition-colors placeholder:opacity-20"
                    placeholder="Signature"
                  />
                </div>
                <div className="space-y-4 group">
                  <label className="label-sm opacity-60 group-focus-within:opacity-100 group-focus-within:text-accent transition-all">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-divider py-4 text-xl font-light text-primary-text focus:outline-none focus:border-accent transition-colors placeholder:opacity-20"
                    placeholder="example@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-4 group">
                <label className="label-sm opacity-60 group-focus-within:opacity-100 group-focus-within:text-accent transition-all">HOW CAN I HELP?</label>
                <div className="flex flex-wrap gap-4">
                  {['Residential', 'Commercial', 'Visualization', 'Consultation'].map((type) => (
                    <button 
                      key={type}
                      type="button"
                      className="px-8 py-3 border border-divider hover:border-accent hover:text-accent transition-all text-[10px] uppercase tracking-widest font-bold"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 group">
                <label className="label-sm opacity-60 group-focus-within:opacity-100 group-focus-within:text-accent transition-all">TELL ME ABOUT YOUR PROJECT</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent border-b border-divider py-4 text-xl font-light text-primary-text focus:outline-none focus:border-accent transition-colors resize-none placeholder:opacity-20"
                  placeholder="The details..."
                />
              </div>

              <button className="w-full lg:w-fit px-16 py-8 bg-accent text-main-bg text-xs uppercase tracking-[0.4em] font-bold hover:bg-hover-accent transition-all flex items-center justify-center gap-6 group">
                SEND MESSAGE
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
