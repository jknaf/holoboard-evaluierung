import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Globe, Brain, GraduationCap } from 'lucide-react';

export default function Zukunftsperspektive() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineData = [
    {
      year: "2027",
      title: "Campusweite Skalierung",
      description: "Ausweitung des Holoboard-Systems auf mehrere Fakultäten. Standardisierte Integration in hybride Hörsäle.",
      icon: <Globe className="w-6 h-6 text-hm-blue" />
    },
    {
      year: "2028",
      title: "Multimodale KI-Tutoren",
      description: "Avatare verstehen nicht nur Sprache, sondern analysieren auch Gestik, Mimik und Verständnisprobleme der Studierenden in Echtzeit.",
      icon: <Brain className="w-6 h-6 text-hm-turquoise" />
    },
    {
      year: "2029",
      title: "Vollständige Personalisierung",
      description: "Jeder Studierende erhält einen individuellen KI-Lernbegleiter, der sich an das spezifische Lerntempo und Vorwissen anpasst.",
      icon: <GraduationCap className="w-6 h-6 text-hm-red" />
    },
    {
      year: "2030",
      title: "Immersive Holografie",
      description: "Wegfall der physischen Holobox-Grenzen. Frei im Raum stehende, volumetrische Projektionen von Lehrinhalten und Avataren.",
      icon: <Rocket className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="zukunft" ref={containerRef} className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-hm-blue/10 via-hm-red/5 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-sm font-bold tracking-widest text-hm-turquoise uppercase mb-3">Weiterentwicklung des Holoboards</h2>
          <h3 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Zukunftsperspektive
          </h3>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Die Roadmap für die nächsten Jahre zeigt den Weg von einem innovativen Prototypen hin zu einem allgegenwärtigen, hochschulweiten Standard für KI-gestützte Lehre.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-hm-turquoise via-hm-blue to-hm-red origin-top"
              style={{ scaleY: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]) }}
            />
          </div>

          <div className="space-y-24">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center group">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center md:-translate-x-1/2 z-10 group-hover:border-hm-turquoise group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    {item.icon}
                  </div>

                  {/* Content Left (for even items on desktop) */}
                  <div className={`hidden md:block w-1/2 pr-16 text-right ${!isEven ? 'invisible' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                    >
                      <span className="text-5xl font-black text-white/10 absolute -top-6 -right-4 pointer-events-none">{item.year}</span>
                      <h4 className="text-2xl font-bold text-white mb-3 relative z-10">{item.title}</h4>
                      <p className="text-gray-400 font-light leading-relaxed relative z-10">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Content Right (for odd items on desktop, and all items on mobile) */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-16 ${isEven ? 'md:invisible' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors relative"
                    >
                      <span className="text-5xl font-black text-white/10 absolute -top-6 -left-4 md:-left-4 pointer-events-none">{item.year}</span>
                      <h4 className="text-2xl font-bold text-white mb-3 relative z-10">{item.title}</h4>
                      <p className="text-gray-400 font-light leading-relaxed relative z-10">{item.description}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
