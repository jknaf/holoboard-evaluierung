import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Users, Video, Lightbulb } from 'lucide-react';

export default function Ausgangspunkt() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const cards = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Hintergrund der Onlinelehre",
      shortDesc: "Digitale Lehre zwischen Pragmatismus und Erschöpfung",
      description: "Zwischen 2020 und 2022 wurde videobasierte Lehre an Hochschulen zum Normalfall. Zoom-Meetings, Lernvideos und digitale Plattformen ermöglichten zwar Kontinuität, machten aber auch ihre Grenzen sichtbar: geringe Interaktion, sinkende Aufmerksamkeit und ein wachsendes Gefühl von Distanz zwischen Lehrenden und Lernenden.",
      image: "https://holoboard-assets.netlify.app/images/090-confluence_media-image1.jpeg",
      color: "from-hm-red/90 to-hm-red/20"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Die Ursprungsidee",
      shortDesc: "Präsenz und Interaktion digital neu denken",
      description: "Als Gegenentwurf zur klassischen Bildschirmlehre entstand die Vision eines Systems, das synchrone Kommunikation, sichtbare Lehrpräsenz, Tafelanschrieb und interaktive Inhalte in einer gemeinsamen Lernszene verbindet. Ziel war nicht nur ein neues Display, sondern eine neue Form digitaler Präsenz.",
      image: "https://holoboard-assets.netlify.app/images/104-confluence_media-proof-of-concept.png",
      color: "from-hm-blue/90 to-hm-blue/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Zielgruppen",
      shortDesc: "Lehrende, Studierende und Hochschule im Fokus",
      description: "Im Mittelpunkt standen Lehrende, die ohne komplexe Produktionsumgebungen interaktive Inhalte bereitstellen sollen, Studierende, die von mehr Präsenz und Beteiligung profitieren, sowie die Hochschule München, die digitale Lehre nicht nur verwalten, sondern aktiv weiterentwickeln will.",
      image: "https://holoboard-assets.netlify.app/images/084-confluence_media-img-1086.jpg",
      color: "from-hm-turquoise/90 to-hm-turquoise/20"
    }
  ];

  return (
    <section id="ausgangspunkt" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Phase 1 – Ausgangsvision 2022</h2>
          <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">Der Ausgangspunkt</h3>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Der ursprüngliche Projektantrag fokussierte sich auf die Erforschung immersiver Lehrformate. 
            Das Ziel war es, die Distanz in der digitalen Lehre durch neue Technologien zu überwinden und eine stärkere Interaktion zu ermöglichen.
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
