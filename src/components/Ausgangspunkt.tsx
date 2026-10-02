import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Video, Lightbulb } from 'lucide-react';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: "Phase 1 – Ausgangsvision 2022",
    title: "Der Ausgangspunkt",
    intro: `Der ursprüngliche Projektantrag fokussierte sich auf die Erforschung immersiver Lehrformate. 
            Das Ziel war es, die Distanz in der digitalen Lehre durch neue Technologien zu überwinden und eine stärkere Interaktion zu ermöglichen.`,
    cards: [
      {
        title: "Hintergrund der Onlinelehre",
        shortDesc: "Digitale Lehre zwischen Pragmatismus und Erschöpfung",
        description: "Zwischen 2020 und 2022 wurde videobasierte Lehre an Hochschulen zum Normalfall. Zoom-Meetings, Lernvideos und digitale Plattformen ermöglichten zwar Kontinuität, machten aber auch ihre Grenzen sichtbar: geringe Interaktion, sinkende Aufmerksamkeit und ein wachsendes Gefühl von Distanz zwischen Lehrenden und Lernenden.",
      },
      {
        title: "Die Ursprungsidee",
        shortDesc: "Präsenz und Interaktion digital neu denken",
        description: "Als Gegenentwurf zur klassischen Bildschirmlehre entstand die Vision eines Systems, das synchrone Kommunikation, sichtbare Lehrpräsenz, Tafelanschrieb und interaktive Inhalte in einer gemeinsamen Lernszene verbindet. Ziel war nicht nur ein neues Display, sondern eine neue Form digitaler Präsenz.",
      },
      {
        title: "Zielgruppen",
        shortDesc: "Lehrende, Studierende und Hochschule im Fokus",
        description: "Im Mittelpunkt standen Lehrende, die ohne komplexe Produktionsumgebungen interaktive Inhalte bereitstellen sollen, Studierende, die von mehr Präsenz und Beteiligung profitieren, sowie die Hochschule München, die digitale Lehre nicht nur verwalten, sondern aktiv weiterentwickeln will.",
      },
    ],
  },
  en: {
    eyebrow: "Phase 1: The 2022 Vision",
    title: "The Starting Point",
    intro: `The original project proposal centred on exploring immersive teaching formats. 
            The aim was to use new technologies to bridge the distance inherent in digital teaching and to foster greater interaction.`,
    cards: [
      {
        title: "The Context of Online Teaching",
        shortDesc: "Digital teaching, caught between pragmatism and fatigue",
        description: "Between 2020 and 2022, video-based teaching became standard practice in higher education. Zoom meetings, instructional videos and digital platforms kept teaching going, but they also laid bare their limitations: little interaction, waning attention and a growing sense of distance between instructors and learners.",
      },
      {
        title: "The Original Idea",
        shortDesc: "Reimagining presence and interaction in digital teaching",
        description: "As a counterpoint to conventional screen-based teaching, a vision took shape: a system that brings together synchronous communication, a visible teaching presence, board writing and interactive content within a single shared learning space. The aim was not simply a new display, but a new form of digital presence.",
      },
      {
        title: "Target Groups",
        shortDesc: "Centred on instructors, students and the university",
        description: "At the heart of the project were instructors, who should be able to provide interactive content without complex production set-ups; students, who benefit from greater presence and participation; and Munich University of Applied Sciences (HM), which aims not merely to manage digital teaching but to actively shape its development.",
      },
    ],
  },
};

const CARD_META = [
  { icon: <Video className="w-6 h-6" />, image: "https://holoboard-assets.netlify.app/images/110-unsplash-stress-laptop.jpg", color: "from-hm-red/90 to-hm-red/20" },
  { icon: <Lightbulb className="w-6 h-6" />, image: "https://holoboard-assets.netlify.app/images/104-confluence_media-proof-of-concept.png", color: "from-hm-blue/90 to-hm-blue/20" },
  { icon: <Users className="w-6 h-6" />, image: "https://holoboard-assets.netlify.app/images/111-unsplash-lecture-hall.jpg", color: "from-hm-turquoise/90 to-hm-turquoise/20" },
];

export default function Ausgangspunkt() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const t = useT(T);
  const cards = t.cards.map((c, i) => ({ ...CARD_META[i], ...c }));

  return (
    <section id="ausgangspunkt" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">{t.eyebrow}</h2>
          <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">{t.title}</h3>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            {t.intro}
          </p>
        </motion.div>

        {/* Interactive Horizontal Accordion */}
        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] gap-4 w-full">
          {cards.map((card, index) => {
            const isActive = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  layout: { type: "spring", stiffness: 200, damping: 30 },
                  opacity: { delay: index * 0.1 }
                }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0 lg:flex-shrink ${
                  isActive ? 'lg:flex-[3] flex-[3]' : 'lg:flex-[1] flex-[1]'
                }`}
              >
                {/* Background Image */}
                <motion.img 
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ 
                    scale: isActive ? 1.05 : 1,
                    filter: isActive ? 'grayscale(0%)' : 'grayscale(80%)'
                  }}
                  transition={{ duration: 0.7 }}
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} mix-blend-multiply opacity-60 transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-40'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 text-white transition-all duration-500 ${isActive ? 'bg-white/20 scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-black/20'}`}>
                      {card.icon}
                    </div>
                    
                    {/* Vertical Title (visible when collapsed on desktop) */}
                    <div className={`lg:hidden text-white font-bold tracking-wide whitespace-nowrap ${isActive ? 'hidden' : 'block'}`}>
                      {card.title}
                    </div>
                    <div className={`hidden lg:block absolute bottom-12 left-24 origin-left -rotate-90 text-white font-bold tracking-widest uppercase whitespace-nowrap transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                      {card.title}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <motion.h4 
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-2"
                    >
                      {card.title}
                    </motion.h4>
                    <motion.p 
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-gray-300 font-light mb-4 text-sm md:text-base"
                    >
                      {card.shortDesc}
                    </motion.p>
                    <motion.div 
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="h-px w-12 bg-white/30 mb-4"
                    />
                    <motion.p 
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="text-gray-200 leading-relaxed font-light text-sm md:text-base max-w-xl"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
