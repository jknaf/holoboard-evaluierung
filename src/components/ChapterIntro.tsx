import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useT } from '../i18n';

// Kapitel-Auftakt: dunkles Vollbild vor jedem der fünf Kapitel, im Look des Heros.
const IMAGES: Record<string, string> = {
  projekt: 'https://holoboard-assets.netlify.app/images/Thumbnail%20Ansynchrone%20Lehre.png',
  technik: 'https://holoboard-videos-a.netlify.app/videos/109-hero_demo_box_b.jpg',
  praxis: 'https://holoboard-assets.netlify.app/images/20241115_114416.jpg',
  evaluation: 'https://holoboard-assets.netlify.app/images/Kamera_4D.png',
  ausblick: 'https://holoboard-videos-a.netlify.app/videos/108-hero_demo_box_a.jpg',
};

const T = {
  de: {
    of: (n: number) => `Kapitel ${n} von 5`,
    lines: {
      projekt: 'Vom Problem der Distanz in der Onlinelehre zu einem neuen Lehrformat.',
      technik: 'Wie aus KI-Avatar, Glasscheibe und eigener Wissensdatenbank ein Echtzeitsystem wird.',
      praxis: 'Wo das Holoboard wirkt: im Netzwerk, in Abschlussarbeiten und im Wissenstransfer.',
      evaluation: 'Was das Projekt erreicht hat und was wir daraus gelernt haben.',
      ausblick: 'Wie es weitergeht: vom Prototyp zur KI-gestützten Prüfung.',
    } as Record<string, string>,
  },
  en: {
    of: (n: number) => `Chapter ${n} of 5`,
    lines: {
      projekt: 'From the problem of distance in online teaching to a new teaching format.',
      technik: 'How an AI avatar, a glass panel and a custom knowledge base become one real-time system.',
      praxis: 'Where the Holoboard makes a difference: in our network, in theses and in knowledge transfer.',
      evaluation: 'What the project achieved, and what we learned along the way.',
      ausblick: 'What comes next: from prototype to AI-supported examinations.',
    } as Record<string, string>,
  },
};

type ChapterIntroProps = {
  index: number;
  id: string;
  title: string;
  items: { id: string; label: string }[];
  onSelect: (id: string) => void;
};

export default function ChapterIntro({ index, id, title, items, onSelect }: ChapterIntroProps) {
  const t = useT(T);
  const number = String(index).padStart(2, '0');

  return (
    <section id={`kapitel-${id}`} className="relative min-h-[90vh] overflow-hidden bg-black text-white flex items-center">
      <img
        src={IMAGES[id]}
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        className="chapter-drift absolute inset-y-0 right-0 h-full w-full lg:w-[55%] object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black/80 to-black/60" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0_1px,transparent_1px_4px)]" />
      <div aria-hidden="true" className="chapter-scan absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-hm-turquoise to-transparent" />

      <span
        aria-hidden="true"
        className="absolute left-2 lg:left-10 top-16 lg:top-24 text-[13rem] lg:text-[26rem] font-black leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.16)] select-none"
      >
        {number}
      </span>

      <div className="relative w-full max-w-[90rem] mx-auto px-6 lg:px-24 py-32 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_28rem] gap-14 lg:gap-24 items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 pt-40 lg:pt-56"
        >
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-hm-turquoise">{t.of(index)}</span>
          <h2 className="text-[12vw] sm:text-6xl lg:text-[7rem] font-black uppercase leading-[0.9] tracking-tighter">{title}</h2>
          <p className="max-w-xl text-lg lg:text-2xl font-light leading-relaxed text-gray-300">{t.lines[id]}</p>
        </motion.div>

        <motion.nav
          aria-label={title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-white/15"
        >
          {items.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(item.id);
              }}
              className="group grid grid-cols-[3.5rem_1fr_1.5rem] items-center min-h-[3.5rem] lg:py-5 border-t border-white/15 text-white hover:text-hm-red transition-colors"
            >
              <span className="text-xs font-bold tracking-widest text-hm-red">
                {number}.{i + 1}
              </span>
              <span className="text-lg lg:text-2xl font-medium tracking-tight">{item.label}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
