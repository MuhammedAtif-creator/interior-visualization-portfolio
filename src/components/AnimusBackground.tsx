import React from 'react';
import { motion } from 'motion/react';

export default function AnimusBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-main-bg">
      {/* Subtle Texture Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      {/* Calm Atmospheric Wash */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(196,164,132,0.05),transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_80%_80%,rgba(196,164,132,0.03),transparent_50%)]" />

      {/* Very Slow Cinematic Light Sweep */}
      <motion.div
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          x: ['-20%', '20%']
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: 'easeInOut'
        }}
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent blur-[150px]"
      />
    </div>
  );
}
