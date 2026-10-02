import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, MonitorPlay } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: "Ausprobieren",
    title: "Interaktiver Demonstrator",
    p1: "Das Erlebnis des Holoboards ist ein physisches Erlebnis im Raum.",
    p2a: "Um trotzdem einmal nachzuempfinden, wie sich die Live-Interaktion mit einem solchen Conversational AI Agent anfühlt, kann hier ein Test-Avatar von",
    p2b: "ausprobiert werden. Tavus zählt aktuell zu den sichtbarsten Anbietern in diesem Bereich. Seit Februar 2026 setzt auch SAP Tavus im Customer Experience Center in Palo Alto ein, um Besuchern die Interaktion mit menschlich wirkenden AI Agents live zu zeigen.",
    sapLink: "SAP Experience Centers",
    alt: "Tavus Conversational AI Avatar: Test-Demo",
    cta: "Test-Avatar ausprobieren",
    newTab: "öffnet in neuem Tab",
  },
  en: {
    eyebrow: "Try it yourself",
    title: "Interactive Demonstrator",
    p1: "The Holoboard is designed to be experienced in person, in a physical space.",
    p2a: "Even so, to get a feel for what live interaction with this kind of conversational AI agent is like, you can try out a test avatar from",
    p2b: "here. Tavus is currently one of the most prominent providers in this field. Since February 2026, SAP has also been using Tavus at its Customer Experience Center in Palo Alto to give visitors a live demonstration of interaction with lifelike AI agents.",
    sapLink: "SAP Experience Centers",
    alt: "Tavus conversational AI avatar: test demo",
    cta: "Try the test avatar",
    newTab: "opens in a new tab",
  },
};

const EASE = [0.16, 1, 0.3, 1] as const;
const TAVUS = "https://www.tavus.io/";

export default function Demonstrator() {
  const t = useT(T);
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  const links = [
    { href: TAVUS, label: "Tavus" },
    { href: "https://www.sap.com/germany/about/company/innovation/experience-centers.html", label: t.sapLink },
    { href: "https://www.linkedin.com/posts/tavus-io_were-proud-to-be-part-of-saps-brand-new-activity-7431757041649614848-xhXA/", label: "Tavus x SAP" },
  ];

  return (
    <section id="demonstrator" className="relative py-24 lg:py-32 bg-[#F4F4F1] text-[#111111]">
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24">
        <SectionHeader index="02.4" eyebrow={t.eyebrow} title={t.title} intro={t.p1} tone="light" />

        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div {...reveal()} className="lg:col-span-5 lg:order-2">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t.p2a}{' '}
              <a href={TAVUS} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#111111] underline decoration-hm-red decoration-2 underline-offset-4 hover:decoration-[#111111]">Tavus</a>{' '}
              {t.p2b}
            </p>

            <ul className="flex flex-wrap gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-[#111111] hover:border-hm-red transition-colors"
                  >
                    {l.label}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="sr-only">({t.newTab})</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className="lg:col-span-7 lg:order-1 relative rounded-3xl overflow-hidden bg-[#0b0b0b] aspect-[4/5] sm:aspect-[16/10]"
          >
            <img
              src="https://holoboard-assets.netlify.app/images/112-tavus-demo-thumbnail.png"
              alt={t.alt}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" aria-hidden="true" />

            <span className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <MonitorPlay className="w-4 h-4 text-hm-turquoise" aria-hidden="true" />
              Live Demo
            </span>

            <a
              href={TAVUS}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full bg-hm-red text-white text-lg font-bold shadow-[0_0_30px_rgba(252,85,85,0.35)] hover:bg-[#e94848] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.cta}
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">({t.newTab})</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
