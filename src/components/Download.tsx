import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download as DownloadIcon } from 'lucide-react';

export default function Download() {
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
              Management Summary
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Zusammenfassung der Innovationsprofessur</h3>
            <p className="text-lg text-blue-100 font-light leading-relaxed">
              Laden Sie sich die kompakte Zusammenfassung aller Ergebnisse, Learnings und der technologischen Architektur des Holoboard-Projekts als PDF herunter. Ideal für Entscheider und Interessierte im Bereich der digitalen Hochschullehre.
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
              Zusammenfassung öffnen
              <span className="text-sm font-normal text-gray-500 ml-2">(PDF-Druck)</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
