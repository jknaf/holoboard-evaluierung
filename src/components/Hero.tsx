import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VIDEO_A = "https://holoboard-videos-a.netlify.app/videos/108-hero_demo_box_a.mp4";
const POSTER_A = "https://holoboard-videos-a.netlify.app/videos/108-hero_demo_box_a.jpg";
const VIDEO_B = "https://holoboard-videos-a.netlify.app/videos/109-hero_demo_box_b.mp4";
const POSTER_B = "https://holoboard-videos-a.netlify.app/videos/109-hero_demo_box_b.jpg";

type VideoCardProps = {
  src: string;
  poster: string;
  className?: string;
};

function VideoCard({ src, poster, className = '' }: VideoCardProps) {
  return (
    <div
      className={`relative aspect-[9/16] w-full max-w-[22rem] mx-auto rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl ${className}`}
    >
      <video
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="w-full h-full object-cover motion-reduce:hidden"
      />
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover hidden motion-reduce:block"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="hero" className="min-h-screen relative overflow-hidden bg-hm-black flex items-center">
      {/* Subtle vertical gradient to ease transition into next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hm-black z-10 pointer-events-none" />

      <div className="relative z-20 w-full max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-10 items-center">
          {/* Video A — left on desktop, second on mobile */}
          <div className="order-2 lg:order-1">
            <VideoCard src={VIDEO_A} poster={POSTER_A} />
          </div>

          {/* Centered title block */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="order-1 lg:order-2 text-center max-w-xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-hm-red animate-pulse" />
                Innovationsprofessur Lehre
              </div>
              <h1 className="text-[18vw] sm:text-[14vw] lg:text-[8vw] xl:text-[7rem] leading-[0.85] font-black tracking-tighter text-white uppercase mb-6 drop-shadow-2xl">
                Holo<span className="text-hm-red">board</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-light mb-8 tracking-wide">
                Interactive Learning Systems
              </p>
              <p className="text-sm md:text-base text-gray-400 font-light">
                Forschung und Entwicklung neuer KI-gestützter Lerntechnologien für interaktive und immersive Hochschullehre an der Hochschule München.
              </p>
            </motion.div>
          </motion.div>

          {/* Video B — right on desktop, third on mobile */}
          <div className="order-3">
            <VideoCard src={VIDEO_B} poster={POSTER_B} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: opacityText }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
      >
        <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-hm-red to-transparent" />
      </motion.div>
    </section>
  );
}
