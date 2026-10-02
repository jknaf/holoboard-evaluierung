import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, Download as DownloadIcon } from 'lucide-react';
import { useT } from '../i18n';
import SectionHeader from './ui/SectionHeader';

const T = {
  de: {
    badge: 'Projektzusammenfassung',
    title: 'Zusammenfassung der Innovationsprofessur',
    text: 'Die Projektzusammenfassung auf einer Seite: Ausgangslage, technische Innovation, aufgebaute Expertise, Nutzen für die Hochschule und Ausblick 2027–2030. Sie öffnet sich als druckbare Seite und lässt sich über Cmd+P (Mac) oder Strg+P (Windows) als PDF speichern.',
    button: 'Zusammenfassung öffnen',
    note: '(PDF-Druck)',
  },
  en: {
    badge: 'Project Summary',
    title: 'The Innovation Professorship at a Glance',
    text: 'The whole project summarised on a single page: background, technical innovation, expertise developed, benefits for the university and the outlook for 2027–2030. It opens as a printable page, which you can save as a PDF using Cmd+P (Mac) or Ctrl+P (Windows).',
    button: 'Open Summary',
    note: '(print to PDF)',
  },
};

// Stilisierte Seite: nur Titel und Platzhalterlinien, kein Inhalt.
const LINES = ['w-full', 'w-11/12', 'w-4/5', 'w-full', 'w-2/3'];

export default function Download() {
  const t = useT(T);
  const reduce = useReducedMotion();
  return (
    <section id="download" className="relative overflow-hidden bg-[#F4F4F1] text-[#111111] py-24 lg:py-32">
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] gap-16 lg:gap-24 items-center">
        <div className="flex flex-col gap-10">
          <SectionHeader index="05.2" eyebrow={t.badge} title={t.title} intro={t.text} tone="light" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="/holoboard-zusammenfassung.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 min-h-[44px] self-start rounded-full bg-hm-red px-8 py-5 text-lg font-bold text-white shadow-[0_12px_30px_rgba(252,85,85,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(252,85,85,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-hm-red/30"
            >
              <DownloadIcon aria-hidden="true" className="w-6 h-6 transition-transform group-hover:translate-y-0.5" />
              {t.button}
            </a>
            <span className="text-sm text-gray-600">{t.note}</span>
          </div>
        </div>

        {/* Seitenvorschau, leicht gekippt (rein dekorativ) */}
        <motion.div
          aria-hidden="true"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group mx-auto w-full max-w-[18rem] sm:max-w-[20rem] [perspective:1400px]"
        >
          <div className="relative aspect-[1/1.414] [transform:rotateX(14deg)_rotateY(-16deg)_rotateZ(-5deg)] motion-safe:transition-transform motion-safe:duration-700 group-hover:[transform:rotateX(6deg)_rotateY(-6deg)_rotateZ(-2deg)]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-white/70 border border-gray-200" />
            <div className="absolute inset-0 flex flex-col gap-5 rounded-2xl bg-white border border-gray-200 p-7 shadow-[0_40px_80px_-20px_rgba(17,17,17,0.35)]">
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-10 rounded-full bg-hm-red" />
                <FileText className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-3xl font-extrabold tracking-tight text-[#111111]">Holoboard</p>
              <div className="flex flex-col gap-2.5">
                {LINES.map((w, i) => (
                  <span key={i} className={`h-2 rounded-full bg-gray-200 ${w}`} />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <span className="h-16 rounded-lg bg-[#F4F4F1]" />
                <span className="h-16 rounded-lg bg-hm-turquoise/15" />
              </div>
              <div className="flex flex-col gap-2.5">
                {LINES.slice(0, 3).map((w, i) => (
                  <span key={i} className={`h-2 rounded-full bg-gray-200 ${w}`} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
