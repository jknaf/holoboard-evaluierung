import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download as DownloadIcon } from 'lucide-react';
import { useT } from '../i18n';

const T = {
  de: {
    badge: 'Projektzusammenfassung',
    title: 'Zusammenfassung der Innovationsprofessur',
    text: 'Die Projektzusammenfassung auf einer Seite: Ausgangslage, technische Innovation, aufgebaute Expertise, Nutzen für die Hochschule und Ausblick 2027–2030. Öffnet als druckbare Seite — über Cmd+P (Mac) oder Strg+P (Windows) als PDF speichern.',
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

export default function Download() {
  const t = useT(T);
  return (
    <section id="download" className="py-32 bg-hm-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
              <FileText className="w-4 h-4" />
              {t.badge}
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t.title}</h3>
            <p className="text-lg text-blue-100 font-light leading-relaxed">
              {t.text}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <a
              href="/holoboard-zusammenfassung.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-hm-blue px-8 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />
              <DownloadIcon className="w-6 h-6" />
              {t.button}
              <span className="text-sm font-normal text-gray-500 ml-2">{t.note}</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
