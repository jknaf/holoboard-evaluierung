import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useT } from '../i18n';

const T = {
  de: {
    benefits: [
      "Etablierung neuer, interaktiver Lehrformate",
      "Aufbau einer modernen technologischen Infrastruktur",
      "Steigerung der KI-Kompetenz bei Lehrenden und Studierenden",
      "Starke Innovationsimpulse für die gesamte Hochschule",
      "Positionierung der HM als Vorreiter in der digitalen Lehre",
      "Förderung interdisziplinärer Zusammenarbeit"
    ],
    alt: "Holoboard-Projekt auf der TURN-Konferenz",
    eyebrow: "Mehrwert",
    title: "Nutzen für die Hochschule München",
    intro: "Die Innovationsprofessur liefert einen direkten und nachhaltigen Mehrwert für die Hochschule München, der weit über das eigentliche Projekt hinausgeht.",
  },
  en: {
    benefits: [
      "Establishing new, interactive teaching formats",
      "Building modern technological infrastructure",
      "Strengthening AI skills among instructors and students",
      "Powerful impetus for innovation across the university",
      "Positioning HM as a pioneer in digital teaching",
      "Fostering interdisciplinary collaboration"
    ],
    alt: "Holoboard project at the TURN Conference",
    eyebrow: "Added Value",
    title: "Benefits for Munich University of Applied Sciences",
    intro: "The Innovation Professorship delivers direct, lasting value for Munich University of Applied Sciences (HM), reaching far beyond the project itself.",
  },
};

export default function Nutzen() {
  const t = useT(T);

  return (
    <section id="nutzen" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white bg-white relative">
              <img 
                src="https://holoboard-assets.netlify.app/images/075-confluence_media-20241115-114416.jpg" 
                alt={t.alt} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-hm-red/20 mix-blend-multiply" />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-hm-blue rounded-full opacity-20 blur-xl" />
            <div className="absolute bottom-10 -right-10 w-32 h-32 bg-hm-turquoise rounded-full opacity-20 blur-xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">{t.eyebrow}</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{t.title}</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              {t.intro}
            </p>

            <ul className="space-y-4">
              {t.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-hm-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
