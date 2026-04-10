import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LegalModal from './LegalModal';

export default function Footer() {
  const [legalType, setLegalType] = useState<'impressum' | 'datenschutz' | null>(null);

  const navItems = [
    { id: 'ausgangspunkt', label: 'Ausgangspunkt' },
    { id: 'exploration', label: 'Exploration' },
    { id: 'wandel', label: 'Wandel' },
    { id: 'konzept', label: 'Konzept' },
    { id: 'architektur', label: 'Architektur' },
    { id: 'prototyp', label: 'Prototyp' },
    { id: 'evaluation', label: 'Evaluation' },
    { id: 'ausblick', label: 'Ausblick' },
  ];

  return (
    <>
      <footer className="bg-hm-black text-white pt-24 pb-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            
            {/* Brand */}
            <div>
              <div className="flex flex-col gap-6 mb-8">
                <img 
                  src="https://holoboard-assets.netlify.app/brand/062-logo_assets-hm-schriftzuglogo-rgb.png" 
                  alt="Hochschule München" 
                  className="h-12 w-auto object-contain object-left brightness-0 invert opacity-90"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://holoboard-assets.netlify.app/brand/hightech-agenda-bayern-vertikal.jpg"
                  alt="Hightech Agenda Bayern"
                  className="h-12 w-auto object-contain object-left rounded-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Digitale Dokumentation der Innovationsprofessur Lehre. Ein Projekt zur Erforschung und Integration von KI-Avataren in der Hochschullehre.
              </p>
              <p className="text-gray-300 font-medium">Prof. Dr. Joachim Knaf</p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">Navigation</h4>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      className="text-gray-400 hover:text-hm-red transition-colors text-sm font-light"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#kontakt" className="text-gray-400 hover:text-hm-red transition-colors text-sm font-light">Kontakt</a>
                </li>
              </ul>
            </div>

            {/* Legal / Contact Info */}
            <div>
              <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">Rechtliches</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => setLegalType('impressum')}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setLegalType('datenschutz')}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                  >
                    Datenschutzerklärung
                  </button>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm font-light">
              &copy; {new Date().getFullYear()} Hochschule München. Alle Rechte vorbehalten.
            </p>
            <div className="text-gray-600 text-sm font-mono">
              v1.0.0
            </div>
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
