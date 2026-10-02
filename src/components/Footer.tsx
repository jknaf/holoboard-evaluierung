import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LegalModal from './LegalModal';
import { useT } from '../i18n';

const T = {
  de: {
    logoAlt: 'Hochschule München',
    agendaAlt: 'Hightech Agenda Bayern',
    description: 'Digitale Dokumentation der Innovationsprofessur Lehre. Ein Projekt zur Erforschung und Integration von KI-Avataren in der Hochschullehre.',
    navigation: 'Navigation',
    nav: ['Ausgangspunkt', 'Exploration', 'Wandel', 'Konzept', 'Architektur', 'Prototyp', 'Evaluation', 'Ausblick'],
    contact: 'Kontakt',
    legal: 'Rechtliches',
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung',
    rights: 'Hochschule München. Alle Rechte vorbehalten.',
    terms: ['KI-Avatar', 'Interaktive Glasscheibe', 'Eigene Wissensdatenbank'],
  },
  en: {
    logoAlt: 'Munich University of Applied Sciences',
    agendaAlt: 'Hightech Agenda Bayern',
    description: 'Digital documentation of the Innovation Professorship for Teaching: a project researching AI avatars and integrating them into university teaching.',
    navigation: 'Navigation',
    nav: ['Starting Point', 'Exploration', 'Tech Shift', 'Concept', 'Architecture', 'Prototype', 'Evaluation', 'Outlook'],
    contact: 'Contact',
    legal: 'Legal',
    imprint: 'Legal Notice',
    privacy: 'Privacy Policy',
    rights: 'Munich University of Applied Sciences. All rights reserved.',
    terms: ['AI avatar', 'Interactive glass panel', 'Custom knowledge base'],
  },
};

export default function Footer() {
  const t = useT(T);
  const [legalType, setLegalType] = useState<'impressum' | 'datenschutz' | null>(null);

  const navIds = ['ausgangspunkt', 'exploration', 'wandel', 'konzept', 'architektur', 'prototyp', 'evaluation', 'ausblick'];
  const navItems = navIds.map((id, i) => ({ id, label: t.nav[i] }));

  // Laufband: zwei gleiche Hälften, die Spur wandert um -50 % und setzt nahtlos neu an.
  const half = [...t.terms, ...t.terms];
  const link = 'inline-flex items-center min-h-[44px] text-sm text-gray-400 hover:text-hm-red transition-colors';

  return (
    <>
      <footer className="bg-black text-white border-t border-white/10">
        <style>{'@keyframes footer-marquee { to { transform: translateX(-50%); } }'}</style>
        <div aria-hidden="true" className="overflow-hidden border-b border-white/10 py-8 lg:py-10">
          <div className="flex w-max animate-[footer-marquee_45s_linear_infinite] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {half.map((term, i) => (
                  <span key={i} className="flex items-center">
                    <span
                      className={`px-8 lg:px-12 text-5xl lg:text-7xl font-black uppercase tracking-tighter whitespace-nowrap ${
                        i % 2 ? 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]' : 'text-white'
                      }`}
                    >
                      {term}
                    </span>
                    <span className="h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-hm-red shadow-[0_0_16px_rgba(252,85,85,0.7)]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[90rem] mx-auto px-6 lg:px-24 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">

            {/* Marke */}
            <div>
              <div className="flex flex-col gap-6 mb-8">
                <img
                  src="https://holoboard-assets.netlify.app/brand/062-logo_assets-hm-schriftzuglogo-rgb.png"
                  alt={t.logoAlt}
                  className="h-12 w-auto object-contain object-left brightness-0 invert opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://holoboard-assets.netlify.app/brand/hightech-agenda-bayern-vertikal.jpg"
                  alt={t.agendaAlt}
                  className="h-12 w-auto object-contain object-left rounded-sm"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-gray-400 font-light leading-relaxed mb-6">{t.description}</p>
              <p className="font-extrabold tracking-tight text-white">Prof. Dr. Joachim Knaf</p>
            </div>

            {/* Navigation */}
            <nav aria-label={t.navigation}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-hm-turquoise mb-4">{t.navigation}</h4>
              <ul className="grid grid-cols-2 gap-x-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={link}>{item.label}</a>
                  </li>
                ))}
                <li>
                  <a href="#kontakt" className={link}>{t.contact}</a>
                </li>
              </ul>
            </nav>

            {/* Rechtliches */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-hm-turquoise mb-4">{t.legal}</h4>
              <ul>
                <li>
                  <button type="button" onClick={() => setLegalType('impressum')} className={link}>
                    {t.imprint}
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => setLegalType('datenschutz')} className={link}>
                    {t.privacy}
                  </button>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm font-light">
              &copy; {new Date().getFullYear()} {t.rights}
            </p>
            <div className="text-gray-500 text-sm font-mono">v1.0.0</div>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={legalType !== null} 
        onClose={() => setLegalType(null)} 
        type={legalType} 
      />
    </>
  );
}
