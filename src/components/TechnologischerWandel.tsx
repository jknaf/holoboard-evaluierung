import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useT } from '../i18n';
import Aurora from './ui/Aurora';

const T = {
  de: {
    phase: 'Phase 3: Technologischer Wandel (2023–2024)',
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
      <div className="flex items-center bg-[#F4F4F1] px-6 py-20 sm:px-10 lg:p-16 xl:p-24">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.24em] text-hm-red uppercase mb-4"><span className="mr-2">01.3</span>{t.phase}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] mb-6 leading-[0.95] tracking-[-0.04em]">{t.oldTitle}</h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">{t.oldText}</p>
        </div>
      </div>

      {/* Nachher: blaue Fläche immer sichtbar, nur der Text blendet ein (ein Wisch per clip-path ließ sie leer) */}
      <div className="relative overflow-hidden flex items-center bg-black text-white px-6 py-20 sm:px-10 lg:p-16 xl:p-24">
        <Aurora />
        <motion.div
          className="relative max-w-xl"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold tracking-[0.24em] text-hm-turquoise uppercase mb-4">{t.newEyebrow}</p>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[0.95] tracking-[-0.04em]">{t.newTitle}</h3>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">{t.newText}</p>
        </motion.div>
      </div>
    </section>
  );
}
