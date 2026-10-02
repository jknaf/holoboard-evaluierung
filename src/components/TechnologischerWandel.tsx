import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useT } from '../i18n';

const T = {
  de: {
    phase: 'Phase 3 – Technologischer Wandel (2023–2024)',
    oldTitle: 'Ursprünglicher Ansatz',
    oldText: 'Volumetrische Video- und LiDAR-basierte Lernformate sollten räumliche Präsenz erzeugen. Der Ansatz war technologisch spannend, aber in Produktion, Synchronisation, Stitching und Ausspielung sehr aufwendig.',
    newEyebrow: 'Der Richtungswechsel',
    newTitle: 'Fokus auf das Holoboard',
    newText: 'Zwischen 2023 und 2024 verschob sich der Fokus hin zu einem System, das mit vorhandener Medientechnik, klarer Interaktion und besserer didaktischer Anschlussfähigkeit realistisch umgesetzt werden konnte: dem Holoboard.',
  },
  en: {
    phase: 'Phase 3: A Technological Shift (2023–2024)',
    oldTitle: 'Original Approach',
    oldText: 'Volumetric video and LiDAR-based learning formats were intended to create a sense of spatial presence. Technologically, the approach was exciting, but production, synchronisation, stitching and playback all proved extremely labour-intensive.',
    newEyebrow: 'A Change of Direction',
    newTitle: 'Focus on the Holoboard',
    newText: 'Between 2023 and 2024, the focus shifted to a system that could realistically be built with existing media technology, offered clear interaction and fitted far more readily into pedagogical practice: the Holoboard.',
  },
};

// Vorher/Nachher nebeneinander. Früher lief das als 300vh-Scroll-Wipe, bei dem in der Mitte
// beide Texte ausgeblendet waren (alt bis 30 %, neu erst ab 70 %): ein Bildschirm voll leerer Fläche.
export default function TechnologischerWandel() {
  const t = useT(T);
  const reduced = useReducedMotion();

  return (
    <section id="wandel" className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh]">
      {/* Vorher: ursprünglicher Ansatz */}
      <div className="flex items-center bg-gray-100 px-6 py-20 sm:px-10 lg:p-16 xl:p-24">
        <div className="max-w-xl">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">{t.phase}</h2>
          <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">{t.oldTitle}</h3>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">{t.oldText}</p>
        </div>
      </div>

      {/* Nachher: wischt einmal von links herein, sobald sichtbar */}
      <motion.div
        initial={reduced ? false : { clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center bg-hm-blue text-white px-6 py-20 sm:px-10 lg:p-16 xl:p-24"
      >
        <div className="max-w-xl">
          <h2 className="text-sm font-bold tracking-widest text-hm-turquoise uppercase mb-3">{t.newEyebrow}</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">{t.newTitle}</h3>
          <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed">{t.newText}</p>
        </div>
      </motion.div>
    </section>
  );
}
