import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TechnologischerWandel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade out Layer 1 text early before the wipe starts
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Clip path for a wipe effect from left to right
  const clipPath = useTransform(scrollYProgress, [0.2, 0.8], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  
  // Fade in Layer 2 text after the wipe has mostly covered the screen
  const opacity2 = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <section id="wandel" ref={containerRef} className="relative h-[300vh] bg-hm-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

        {/* Layer 1: Old Approach */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <motion.div style={{ opacity: opacity1 }} className="max-w-4xl w-full text-center p-8 relative z-10">
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">Phase 3 – Technologischer Wandel (2023–2024)</h2>
            <h3 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter">Ursprünglicher Ansatz</h3>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Volumetrische Video- und LiDAR-basierte Lernformate sollten räumliche Präsenz erzeugen. Der Ansatz war technologisch spannend, aber in Produktion, Synchronisation, Stitching und Ausspielung sehr aufwendig.
            </p>
          </motion.div>
        </div>

        {/* Layer 2: New Approach (Wipes in from right) */}
        <motion.div 
          style={{ clipPath }}
          className="absolute inset-0 flex items-center justify-center bg-hm-blue text-white"
        >
          <motion.div style={{ opacity: opacity2 }} className="max-w-4xl w-full text-center p-8">
            <h2 className="text-sm font-bold tracking-widest text-hm-turquoise uppercase mb-3">Der Richtungswechsel</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Fokus auf das Holoboard</h3>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto">
              Zwischen 2023 und 2024 verschob sich der Fokus hin zu einem System, das mit vorhandener Medientechnik, klarer Interaktion und besserer didaktischer Anschlussfähigkeit realistisch umgesetzt werden konnte: dem Holoboard.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold tracking-widest uppercase flex flex-col items-center gap-4 mix-blend-difference z-10">
          <span>Scroll to transform</span>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
