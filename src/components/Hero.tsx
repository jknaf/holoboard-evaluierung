import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useT } from '../i18n';

const T = {
  de: {
    badge: 'Innovationsprofessur Lehre',
    terms: ['KI-Avatar', 'interaktive Glasscheibe', 'eigene Wissensdatenbank'],
    text: 'Interaktive, KI-gestützte Lernsysteme für die Hochschule München.',
    scroll: 'Scroll to explore',
  },
  en: {
    badge: 'Innovation Professorship for Teaching',
    terms: ['AI avatar', 'interactive glass panel', 'custom knowledge base'],
    text: 'Interactive, AI-powered learning systems at Munich University of Applied Sciences.',
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

// Der dritte Begriff setzt sich aus durchlaufenden Zeichen zusammen (4,4–5,2 s, passend zu hero-t3 in index.css).
const SCRAMBLE_START = 4400;
const SCRAMBLE_DURATION = 800;
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%';

function useScramble(word: string) {
  const [text, setText] = useState({ done: '', rest: word });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText({ done: word, rest: '' });
      return;
    }
    const start = performance.now();
    const timer = window.setInterval(() => {
      const elapsed = performance.now() - start - SCRAMBLE_START;
      const k = Math.max(0, Math.min(word.length, Math.floor((elapsed / SCRAMBLE_DURATION) * word.length)));
      const rest = word
        .slice(k)
        .split('')
        .map((c) => (c === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
        .join('');
      setText({ done: word.slice(0, k), rest });
      if (k === word.length) window.clearInterval(timer);
    }, 45);
    return () => window.clearInterval(timer);
  }, [word]);

  return text;
}

// Begriffe stehen groß in der Bildmitte, genau über dem Titel
const TERM_CLASS =
  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(88vw,22rem)] lg:w-auto lg:whitespace-nowrap text-center text-3xl lg:text-6xl font-extrabold uppercase tracking-[0.04em] text-gray-100 pointer-events-none';

export default function Hero() {
  const t = useT(T);
  const scramble = useScramble(t.terms[2]);
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
          {/* Video A, links am Desktop, mobil an zweiter Stelle */}
          <div className="order-2 lg:order-1">
            <VideoCard src={VIDEO_A} poster={POSTER_A} className="hero-an hero-scene" />
          </div>

          {/* Titelblock: erst drei Begriffe nacheinander, dann der Titel */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="order-1 lg:order-2 text-center max-w-xl mx-auto w-full"
          >
            <div className="hero-an hero-badge inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 text-white text-[11px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-widest uppercase mb-14 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-hm-red animate-pulse" />
              {t.badge}
            </div>

            <div className="relative mb-16 lg:mb-20">
              <div aria-hidden="true" className="hero-an hero-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[400%] pointer-events-none" />
              <div aria-hidden="true" className="hero-an hero-flash absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[160%] pointer-events-none" />

              {/* 1 KI-Avatar: Hologramm-Projektion */}
              <div aria-hidden="true" className={TERM_CLASS}>
                <span className="hero-an hero-term hero-t1 relative block">{t.terms[0]}</span>
                <span className="hero-an hero-scan" />
              </div>
              {/* 2 Glasscheibe: wird auf Glas geschrieben */}
              <div aria-hidden="true" className={TERM_CLASS}>
                <span className="hero-an hero-glass" />
                <span className="hero-an hero-term hero-t2 relative block">{t.terms[1]}</span>
                <span className="hero-an hero-pen" />
              </div>
              {/* 3 Wissensdatenbank: Zeichen rasten ein */}
              <div aria-hidden="true" className={TERM_CLASS}>
                <span className="hero-an hero-term hero-t3 relative block">
                  {scramble.done}
                  <span className="text-hm-turquoise">{scramble.rest}</span>
                </span>
              </div>

              <div className="hero-an hero-dolly relative flex justify-center">
                <div className="hero-an hero-tclip relative shrink-0 text-[14vw] sm:text-[14vw] lg:text-[5.5vw] xl:text-[6rem] leading-[0.85] font-black tracking-tighter uppercase whitespace-nowrap">
                  {/* Screenreader lesen die drei Begriffe mit, die Animation selbst ist versteckt */}
                  <h1>
                    <span className="sr-only">{t.terms.join(', ')}: </span>
                    <span className="hero-mat hero-holo">Holo</span>
                    <span className="hero-mat hero-brd">board</span>
                  </h1>
                  <span aria-hidden="true" className="hero-an hero-ghost hero-gc absolute inset-0">Holoboard</span>
                  <span aria-hidden="true" className="hero-an hero-ghost hero-gr absolute inset-0">Holoboard</span>
                </div>
                <div
                  aria-hidden="true"
                  className="hero-an hero-refl absolute left-1/2 top-full mt-1 -translate-x-1/2 -scale-y-100 text-[14vw] sm:text-[14vw] lg:text-[5.5vw] xl:text-[6rem] leading-[0.85] font-black tracking-tighter uppercase whitespace-nowrap pointer-events-none"
                >
                  <span className="text-white">Holo</span>
                  <span className="text-hm-red">board</span>
                </div>
              </div>
            </div>

            <p className="hero-an hero-txt text-base md:text-lg text-gray-400 font-light">
              {t.text}
            </p>
          </motion.div>

          {/* Video B, rechts am Desktop, mobil an dritter Stelle */}
          <div className="order-3">
            <VideoCard src={VIDEO_B} poster={POSTER_B} className="hero-an hero-scene" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: opacityText }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
      >
        <span className="hero-an hero-txt text-white/50 text-[10px] font-bold tracking-widest uppercase">{t.scroll}</span>
        <div className="hero-an hero-txt w-px h-12 bg-gradient-to-b from-hm-red to-transparent" />
      </motion.div>
    </section>
  );
}
