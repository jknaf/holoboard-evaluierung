import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, CheckCircle2, Users, Building2, Lightbulb, X } from 'lucide-react';
import ActionCue from './ui/ActionCue';

export default function Evaluation() {
  const [selectedCriterion, setSelectedCriterion] = useState<number | null>(null);

  const criteria = [
    {
      id: 1,
      icon: <Target className="w-6 h-6 text-hm-red" />,
      title: "Zukünftige Relevanz des Themenfeldes",
      desc: "Das Projekt adressiert ein hochaktuelles Zukunftsfeld an der Schnittstelle von generativer KI, KI-Agenten, Voice Agents und digitaler Lehre.",
      examples: ["Generative KI in der Lehre", "KI-Agenten und Voice Agents", "Technische und didaktische Tiefenerschließung des Themenfeldes"],
      detailedText: "Das Themenfeld ist in hohem Maße zukunftsrelevant, weil Hochschulen sich zunehmend mit generativer KI, agentischen Systemen und sprachbasierten Assistenzsystemen auseinandersetzen müssen. Das Holoboard-Projekt hat dieses Feld nicht nur oberflächlich aufgegriffen, sondern in einer besonderen technischen und didaktischen Tiefe bearbeitet. Damit gehört es zu den prägenden Projekten der Innovationsprofessur Lehre, weil es die Verbindung von KI-Technologien, Interaktion, Präsenz und Hochschuldidaktik frühzeitig und substanziell erschlossen hat.",
      image: "https://holoboard-assets.netlify.app/images/ki-hochschule-zukunft.png",
      altText: "KI als integraler Bestandteil der Hochschullehre"
    },
    {
      id: 2,
      icon: <CheckCircle2 className="w-6 h-6 text-hm-blue" />,
      title: "Umsetzung der Projektziele",
      desc: "Das Projekt war technisch außerordentlich anspruchsvoll und wurde auch während eines tiefgreifenden Technologieschifts souverän weiterentwickelt.",
      examples: ["Hohe technische Komplexität", "Souveräner Umgang mit dem Technologieshift", "Tiefe fachliche Einarbeitung in das Thema KI"],
      detailedText: "Die Umsetzung der Projektziele ist besonders positiv zu bewerten, weil das Vorhaben technisch außerordentlich anspruchsvoll war. Während der Projektlaufzeit kam es zu einem grundlegenden Technologieshift im KI-Bereich, auf den nicht defensiv, sondern souverän und produktiv reagiert wurde. Statt an früheren Ansätzen festzuhalten, wurden Architektur, Prototypik und didaktisches Konzept konsequent weiterentwickelt. Zugleich zeigt das Projekt, dass eine sehr tiefe fachliche Einarbeitung in das Themenfeld KI stattgefunden hat, die weit über eine bloße Anwendung bestehender Werkzeuge hinausgeht.",
      image: "https://holoboard-assets.netlify.app/images/architektur-03-webplattform.png",
      altText: "Technische Integration des Holoboard-Systems mit Avatar-Ausgabe"
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-hm-turquoise" />,
      title: "Qualität der Zusammenarbeit",
      desc: "Das Projekt war hochschulintern sichtbar, interdisziplinär vernetzt und insbesondere in der Zusammenarbeit mit Studierenden und innerhalb des Studiengangs sehr intensiv.",
      examples: ["Präsentation im Rahmen des Hochschulentwicklungsplans", "Intensive Zusammenarbeit mit Studierenden", "Hohe Sichtbarkeit innerhalb der Hochschule"],
      detailedText: "Die Qualität der Zusammenarbeit ist klar positiv zu bewerten. Das Projekt wurde im Rahmen der Präsentation zum Hochschulentwicklungsplan einem zentralen Kreis relevanter Akteurinnen und Akteure der Hochschule vorgestellt. Dadurch wurde das Thema hochschulweit sichtbar und gezielt in den Fokus gerückt. Besonders stark war zudem die Zusammenarbeit innerhalb des Studiengangs und mit den beteiligten Studierenden, die sehr intensiv in Entwicklung, Reflexion und prototypische Umsetzung eingebunden waren.",
      image: "https://holoboard-assets.netlify.app/images/IMG_3815.JPG",
      altText: "Holoboard im Präsentations- und Interaktionskontext mit Besucherinnen und Besuchern"
    },
    {
      id: 4,
      icon: <Building2 className="w-6 h-6 text-gray-700" />,
      title: "Nutzen für die HM",
      desc: "Das Projekt stiftet Nutzen für die Hochschule durch Sichtbarkeit, Kompetenzaufbau, Transfer in die Lehre und eine klare Verbindung der HM mit einem relevanten Zukunftsthema.",
      examples: ["Sichtbarkeit auf Kongressen und in Fachkontexten", "Transfer in Lehre und Hochschule", "Profilbildung der HM im Themenfeld KI"],
      detailedText: "Der Nutzen für die Hochschule München geht über das eigentliche Projekt deutlich hinaus. Das Thema wurde in verschiedenen fachlichen und öffentlichen Kontexten vorgestellt, unter anderem auf Kongressen wie der TURN-Konferenz sowie im Rahmen von Einreichungen und Beiträgen zu wissenschaftlichen und transferorientierten Formaten. Dadurch wird die Hochschule mit diesem Zukunftsthema sichtbar verbunden. Zugleich entstehen hochschulintern wertvolle Kompetenzen, Erfahrungswissen und Anschlusspunkte für weitere Entwicklungen in Lehre, Forschung und Transfer.",
      image: "https://holoboard-assets.netlify.app/images/20241115_114416.jpg",
      altText: "Holobox mit digitalem Avatar im realen Einsatz"
    },
    {
      id: 5,
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      title: "Innovationspotential",
      desc: "Das Innovationspotenzial ist noch lange nicht ausgeschöpft, sondern beginnt mit der Etablierung der Technologie erst in seinen besonders spannenden Anwendungsszenarien.",
      examples: ["Prüfungsagenten für mündliche Prüfungen", "Neue KI-gestützte Lehr- und Assistenzszenarien", "Weiterentwicklung über den aktuellen Prototyp hinaus"],
      detailedText: "Das Innovationspotenzial des Projekts ist noch lange nicht ausgeschöpft. Mit der Etablierung der technologischen Grundlage beginnen erst die besonders spannenden Use Cases. Dazu gehören insbesondere KI-gestützte Prüfungsagenten, die perspektivisch mündliche Prüfungen strukturiert abnehmen können, ebenso wie personalisierte Assistenzsysteme und neue interaktive Lehrszenarien. Das Holoboard ist deshalb nicht als abgeschlossene Einzelanwendung zu verstehen, sondern als Ausgangspunkt für eine ganze Reihe weiterführender Innovationen.",
      image: "https://holoboard-assets.netlify.app/images/architektur-00-gesamtpipeline.png",
      altText: "Technische Komposition eines Ganzkörper-Avatars als Grundlage zukünftiger KI- Anwendungen"
    }
  ];

  return (
    <section id="evaluation" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Zusammenfassung</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Evaluation auf einen Blick</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((criterion, index) => (
            <SpotlightCard 
              key={criterion.id} 
              criterion={criterion} 
              index={index} 
              onClick={() => setSelectedCriterion(criterion.id)} 
            />
          ))}
        </div>
      </div>

      {/* Expandable Modal for Content */}
      <AnimatePresence>
        {selectedCriterion !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCriterion(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] cursor-pointer"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 sm:p-6">
              <motion.div
                layoutId={`eval-${selectedCriterion}`}
                className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
              >
                {criteria.map(c => c.id === selectedCriterion && (
                  <React.Fragment key={c.id}>
                    <div className="relative h-64 sm:h-80 w-full bg-gray-900 flex-shrink-0">
                      <img 
                        src={c.image} 
                        alt={c.altText || c.title} 
                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                      <button 
                        onClick={() => setSelectedCriterion(null)}
                        className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-8 sm:p-12 overflow-y-auto">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                          {c.icon}
                        </div>
                        <h4 className="text-3xl font-bold text-gray-900">{c.title}</h4>
                      </div>
                      <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                        {c.desc}
                      </p>
                      <div className="h-px w-full bg-gray-100 mb-6" />
                      
                      {c.id === 2 ? (
                        <div className="mb-8">
                          <h5 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">Interaktive Zeitleiste</h5>
                          <div className="relative border-l-2 border-gray-100 ml-3 space-y-8 pb-4">
                            {[
                              { date: "2022", title: "Ausgangsvision", desc: "Entwicklung einer interaktiven Zielperspektive für digitale Lehre mit stärkerer Präsenz, Interaktion und technologischer Innovation." },
                              { date: "2023", title: "Technische Vertiefung", desc: "Aufbau und Erprobung erster technischer Bausteine im Bereich Holobox, Lightboard, Interaktion, Wissensanbindung und KI." },
                              { date: "2024", title: "Technologieshift und Neuausrichtung", desc: "Reaktion auf den tiefgreifenden Wandel im KI-Bereich durch konzeptionelle und technische Neuausrichtung des Projekts." },
                              { date: "2025/2026", title: "Konsolidierung und Ausblick", desc: "Zusammenführung der Ergebnisse in eine belastbare Architektur und Überführung in weiterführende Szenarien wie KI-gestützte Prüfungsagenten." }
                            ].map((step, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 + 0.2 }}
                                className="relative pl-8"
                              >
                                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-hm-blue shadow-sm" />
                                <span className="text-xs font-bold text-hm-blue tracking-widest uppercase mb-1 block">{step.date}</span>
                                <h6 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h6>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-700 leading-relaxed mb-8">
                          {c.detailedText}
                        </p>
                      )}
                      
                      <h5 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Kernpunkte</h5>
                      <ul className="space-y-3">
                        {c.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <div className="w-2 h-2 rounded-full bg-hm-red mt-2 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

// Spotlight Card Component
function SpotlightCard({ criterion, index, onClick }: { key?: React.Key, criterion: any, index: number, onClick: () => void }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      layoutId={`eval-${criterion.id}`}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col h-full"
    >
      {/* Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(252, 85, 85, 0.08), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
          {criterion.icon}
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3">{criterion.title}</h4>
        <p className="text-gray-500 leading-relaxed font-light text-sm mb-6 flex-grow">{criterion.desc}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <ActionCue mode="detail" accent="red" />
        </div>
      </div>
    </motion.div>
  );
}
