import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useT } from '../i18n';

const T = {
  de: {
    badge: 'Innovationsprofessur Lehre',
    formula: ['KI-Avatar', 'interaktive Glasscheibe', 'eigene Wissensdatenbank'],
    subtitle: 'Interactive Learning Systems',
    text: 'Forschung und Entwicklung neuer KI-gestützter Lerntechnologien für interaktive und immersive Hochschullehre an der Hochschule München.',
    scroll: 'Scroll to explore',
  },
  en: {
    badge: 'Innovation Professorship for Teaching',
    formula: ['AI avatar', 'interactive glass panel', 'custom knowledge base'],
    subtitle: 'Interactive Learning Systems',
    text: 'Researching and developing new AI-powered learning technologies for interactive, immersive university teaching at Munich University of Applied Sciences (HM).',
    scroll: 'Scroll to explore',
  },
};

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
      className={`relative aspect-[9/16] w-full max-w-[20rem] mx-auto rounded-2xl overflow-hidden bg-black border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ${className}`}
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
        style={{ filter: 'contrast(1.08) saturate(1.12) brightness(0.96)' }}
      />
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover hidden motion-reduce:block"
        referrerPolicy="no-referrer"
      />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: 'inset 0 0 80px 10px rgba(0,0,0,0.55)',
        }}
      />
      {/* Subtle brand color wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-hm-blue/15 via-transparent to-hm-red/10 mix-blend-overlay" />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}

// Zeitplan der Einstiegsanimation in Sekunden
const TERM_DELAY = [0.4, 1.0, 1.6];
const EQUALS_DELAY = 2.2;
const TITLE_DELAY = 2.4;

// Begriff „schaltet sich ein“ wie ein Hologramm: Flackern, Unschärfe, versetzte Farbkanäle
const holoIn = (delay: number) => ({
  initial: { opacity: 0, y: 12, filter: 'blur(10px)', textShadow: '-4px 0 rgba(51,204,204,0.9), 4px 0 rgba(252,85,85,0.9)' },
  animate: { opacity: [0, 0.7, 0.25, 1], y: 0, filter: 'blur(0px)', textShadow: '0px 0 rgba(51,204,204,0), 0px 0 rgba(252,85,85,0)' },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1], opacity: { delay, duration: 0.5, times: [0, 0.3, 0.55, 1] } },
});

export default function Hero() {
  const t = useT(T);
  const reduceMotion = useReducedMotion();
  const anim = (props: object) => (reduceMotion ? {} : props);
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,32rem)_1fr] gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Video A — left on desktop, second on mobile */}
          <div className="order-2 lg:order-1">
            <VideoCard src={VIDEO_A} poster={POSTER_A} />
          </div>

          {/* Centered title block */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="order-1 lg:order-2 text-center max-w-xl mx-auto"
          >
            <div className="relative">
              {/* Scanlinie, läuft einmal über den Block */}
              {!reduceMotion && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-hm-turquoise to-transparent shadow-[0_0_12px_2px_rgba(51,204,204,0.6)]"
                  initial={{ top: '0%', opacity: 0 }}
                  animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                  transition={{ delay: 0.2, duration: 2.6, ease: 'easeInOut' }}
                />
              )}
              <motion.div
                {...anim({ initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } })}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-hm-red animate-pulse" />
                {t.badge}
              </motion.div>

              {/* Formel: drei Bausteine ergeben das Holoboard */}
              <p className="flex flex-wrap lg:flex-nowrap items-baseline justify-center gap-x-2 gap-y-1 lg:-mx-8 text-base md:text-xl lg:text-lg font-bold text-white tracking-wide">
                {t.formula.map((term, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <motion.span
                        aria-hidden="true"
                        className="text-hm-red"
                        {...anim({ initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { delay: TERM_DELAY[i] - 0.15, type: 'spring', stiffness: 400, damping: 15 } })}
                      >
                        +
                      </motion.span>
                    )}
                    <motion.span className="whitespace-nowrap" {...anim(holoIn(TERM_DELAY[i]))}>
                      {term}
                    </motion.span>
                  </React.Fragment>
                ))}
              </p>
              <motion.div
                aria-hidden="true"
                className="text-hm-red text-2xl md:text-3xl font-black leading-none my-3"
                {...anim({ initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { delay: EQUALS_DELAY, type: 'spring', stiffness: 400, damping: 15 } })}
              >
                =
              </motion.div>

              {/* Titel zieht sich aus weit gesperrter, unscharfer Schrift zusammen */}
              <motion.h1
                className="text-[14vw] sm:text-[14vw] lg:text-[5.5vw] xl:text-[6rem] leading-[0.85] font-black tracking-tighter text-white uppercase mb-6 drop-shadow-2xl"
                {...anim({
                  initial: { opacity: 0, letterSpacing: '0.3em', filter: 'blur(18px)', scale: 1.05 },
                  animate: { opacity: 1, letterSpacing: '-0.05em', filter: 'blur(0px)', scale: 1 },
                  transition: { delay: TITLE_DELAY, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                })}
              >
                <span className="holo-sheen">Holo</span><span className="holo-sheen text-hm-red">board</span>
              </motion.h1>

              <motion.div {...anim({ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: TITLE_DELAY + 0.6, duration: 0.8 } })}>
                <p className="text-lg md:text-2xl text-gray-300 font-light mb-8 tracking-wide">
                  {t.subtitle}
                </p>
                <p className="text-sm md:text-base text-gray-400 font-light">
                  {t.text}
                </p>
              </motion.div>
            </div>
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
        <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase">{t.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-hm-red to-transparent" />
      </motion.div>
    </section>
  );
}
