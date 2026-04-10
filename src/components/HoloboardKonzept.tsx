import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Cpu, MessageSquare, Layout, X, BookOpen, ArrowRight } from 'lucide-react';
import ActionCue from './ui/ActionCue';

export default function HoloboardKonzept() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [isConceptExpanded, setIsConceptExpanded] = useState(false);

  const features = [
    {
      id: 1,
      icon: <Cpu className="w-6 h-6 text-hm-turquoise" />,
      title: "Lokale KI und RAG",
      description: "Datensouveräne Intelligenz direkt am System",
      detailedText: (
        <div className="space-y-4">
          <p>Ein zentraler Bestandteil des Holoboards ist eine lokal laufende KI-Infrastruktur. „Lokal“ bedeutet hier, dass Modelle, Datenverarbeitung und Wissenszugriff nicht zwingend über externe Cloud-Dienste laufen müssen, sondern direkt auf eigener Hardware betrieben werden können. Das ist besonders relevant, wenn sensible Inhalte, interne Dokumente oder hochschulnahe Daten verarbeitet werden.</p>
          <p>RAG („Retrieval-Augmented Generation“) ergänzt die KI um gezielten Dokumentenzugriff. Das System antwortet dann nicht nur aus einem allgemeinen Modellwissen heraus, sondern auf Basis konkreter, projektbezogener Inhalte. So entstehen nachvollziehbarere, kontextbezogene und für Lehre und Demonstration nutzbare Antworten.</p>
          <div>
            <p className="font-bold mb-2">Vorteile:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>kontrollierbare Datenverarbeitung</li>
              <li>geringere Abhängigkeit von externen Plattformen</li>
              <li>gezielter Zugriff auf projektspezifisches Wissen</li>
              <li>robuste Grundlage für interaktive Lehr- und Assistenzszenarien</li>
            </ul>
          </div>
        </div>
      ),
      image: "https://holoboard-assets.netlify.app/images/102-confluence_media-pc.jpg"
    },
    {
      id: 2,
      icon: <Monitor className="w-6 h-6 text-hm-red" />,
      title: "Lightboard 2.0",
      description: "Weiterentwicklung eines etablierten Lehrprinzips",
      detailedText: (
        <div className="space-y-4">
          <p>Das Holoboard baut auf dem bekannten Lightboard-Prinzip auf, bei dem Lehrende direkt in ein transparentes Schreibmedium hinein erklären und Inhalte für Lernende sichtbar machen. Für das Projekt wurde dieses Prinzip nicht einfach übernommen, sondern technisch und räumlich weiterentwickelt.</p>
          <p>Entscheidend war die Frage, wie sich das direkte Erklären, Schreiben und Zeigen mit einer neuen Form digitaler Präsenz verbinden lässt. Aus dem klassischen Lightboard wurde so eine erweiterte Systemidee, die stärker auf Interaktion, hybride Nutzung und visuelle Wirkung ausgelegt ist.</p>
        </div>
      ),
      image: "https://holoboard-assets.netlify.app/images/084-confluence_media-img-1086.jpg",
      secondaryImage: "https://holoboard-assets.netlify.app/images/103-confluence_media-processed-f8697a99-ce94-4f1b-b1d2-1b1ae2f28c11.jpeg"
    },
    {
      id: 3,
      icon: <Layout className="w-6 h-6 text-hm-blue" />,
      title: "Interaktive Holobox",
      description: "Display, Präsenzraum und Interaktionsfläche",
      detailedText: (
        <div className="space-y-4">
          <p>Die Holobox ist das zentrale räumliche Display des Konzepts. Sie verbindet visuelle Präsenz, Präsentationsfläche und Interaktion in einem gemeinsamen System. Dadurch entsteht nicht nur eine technische Oberfläche, sondern ein neuer Wahrnehmungsraum für digitale Lehre.</p>
          <p>Im Projekt wurde untersucht, wie eine solche Box nicht nur Inhalte anzeigen, sondern Kommunikation, Blickbezug, räumliche Wirkung und Interaktion unterstützen kann. Die Holobox ist damit nicht bloß Hardware, sondern ein integraler Teil des didaktischen Erlebnisses.</p>
        </div>
      ),
      image: "https://holoboard-assets.netlify.app/images/103-confluence_media-processed-f8697a99-ce94-4f1b-b1d2-1b1ae2f28c11.jpeg",
      video: "https://holoboard-videos-a.netlify.app/videos/087-confluence_media-holobox-deu.mp4"
    },
    {
      id: 4,
      icon: <MessageSquare className="w-6 h-6 text-gray-700" />,
      title: "Digitale Avatare",
      description: "Vom Talking Head zum Ganzkörper-Avatar",
      detailedText: (
        <div className="space-y-4">
          <p>Ein zentraler Entwicklungsschritt im Projekt war die Frage, wie sich digitale Avatare nicht nur als klassische Kopf-Schulter-Darstellung, sondern als glaubwürdige Ganzkörper-Präsenz einsetzen lassen. Genau hier liegt eine besondere technische Herausforderung: Viele bestehende Anbieter konzentrieren sich auf Avatare im Gesichts- oder Brustbereich, weil Ganzkörperdarstellungen deutlich komplexer in Aufbau, Steuerung und Wirkung sind.</p>
          <p>Im Holoboard-Kontext wurde deshalb untersucht, wie sich mit einem besonderen Verfahren eine erweiterte Avatarform realisieren lässt, die über übliche Talking-Head-Systeme hinausgeht. Ziel war eine digitale Präsenz, die stärker verkörpert wirkt und damit besser zu einem räumlichen, interaktiven Lehrsystem passt.</p>
          <p>Diese Arbeit ist nicht nur eine Ergänzung des Konzepts, sondern ein eigenständiger Innovationsbeitrag: die Verbindung von Avatar-Technologie mit einer glaubwürdigeren, körperlicheren Form digitaler Interaktion.</p>
        </div>
      ),
      image: "https://holoboard-assets.netlify.app/images/081-confluence_media-bildschirmfoto-2025-01-28-um-18.22.56.png"
    }
  ];

  return (
    <section id="konzept" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none flex justify-center z-0">
        <span className="text-[20vw] font-black whitespace-nowrap tracking-tighter">HOLOBOARD</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Phase 4 – Weiterentwicklung</h2>
          <h3 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">Das Holoboard Konzept</h3>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Klicken Sie auf die Kacheln, um tiefer in die technologischen Details der einzelnen Komponenten einzutauchen.
          </p>
        </motion.div>

        {/* Didactic Concept Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-gray-200 shadow-sm mb-24 overflow-hidden group hover:shadow-md transition-shadow"
        >
          <div 
            className="p-8 md:p-12 cursor-pointer"
            onClick={() => setIsConceptExpanded(!isConceptExpanded)}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                  <BookOpen className="w-6 h-6 text-hm-red" />
                </div>
                <h4 className="text-3xl font-black text-gray-900 tracking-tighter">Didaktisches Lehrkonzept</h4>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                Das Grundproblem digitaler Lehre ist multidimensional: Es reicht nicht aus, Lerninhalte nur technisch verfügbar zu machen. Forschung zu Online-Lernen zeigt, dass digitale Formate besonders dann an Wirksamkeit verlieren, wenn soziale Präsenz, emotionale Bindung und sichtbare Lehrendenpräsenz fehlen.
              </p>

              {!isConceptExpanded ? (
                <div className="pt-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Zwei Lehrszenarien im Detail</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut' }}
                      className="px-5 py-4 rounded-xl bg-hm-red text-white hover:bg-hm-red/90 hover:scale-[1.02] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
                    >
                      <div className="text-sm font-bold mb-1">Synchrone Lehre</div>
                      <div className="text-xs text-white/70 font-light mb-3">Full-Body-KI-Avatar für Live-Interaktion</div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90">
                        <span>Szenario aufklappen</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut', delay: 0.3 }}
                      className="px-5 py-4 rounded-xl bg-hm-blue text-white hover:bg-hm-blue/90 hover:scale-[1.02] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
                    >
                      <div className="text-sm font-bold mb-1">Asynchrone Lehre</div>
                      <div className="text-xs text-white/70 font-light mb-3">Holoboard als interaktives Lehrmedium</div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90">
                        <span>Szenario aufklappen</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              ) : (
                <div className="pt-2">
                  <ActionCue mode="expand" expanded={isConceptExpanded} accent="red" />
                </div>
              )}
            </div>
          </div>

          <AnimatePresence>
            {isConceptExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-8 md:p-12 pt-0 border-t border-gray-100">
                  <div className="max-w-4xl mx-auto pt-8">
                    <p className="text-lg text-gray-700 leading-relaxed font-light mb-12">
                      Passive Bildschirmformate fördern häufig weder nachhaltige Aufmerksamkeit noch tiefes Engagement. Erfolgreiche digitale Lehre braucht deshalb mehr als Medientechnik: Sie braucht Interaktion, Personalisierung, Authentizität und eine als menschlich wahrnehmbare Lernumgebung.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                      {/* Szenario 1 */}
                      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h5 className="text-xl font-bold text-hm-red mb-4">Synchrone Lehre mit Full-Body-KI-Avatar</h5>
                        <p className="text-gray-700 leading-relaxed font-light">
                          Für Live-Situationen entsteht ein KI-gestützter Full-Body-Avatar, der in Echtzeit mit Lernenden interagiert. Er basiert auf einem Retrieval-Augmented-Generation-System (RAG), das über eine No-Code-Plattform eingebunden ist. So können auch technisch wenig versierte Lehrende oder Ausstellende Inhalte pflegen, aktualisieren und steuern. Der didaktische Mehrwert liegt in der Verbindung von Interaktion, Personalisierung und Authentizität: Inhalte erscheinen nicht als anonyme Systemantwort, sondern in der verkörperten Form vertrauter Personen wie Lehrender, Forschender oder Projektverantwortlicher. Dadurch wird digitale Kommunikation sozial anschlussfähiger, glaubwürdiger und emotional wirksamer.
                        </p>
                        <DidacticVideo 
                          src="https://holoboard-videos-b.netlify.app/videos/073-final_videos-webseite-ger.mp4" 
                          title="Demonstration: Synchrone Lehre mit Full-Body-KI-Avatar" 
                        />
                      </div>

                      {/* Szenario 2 */}
                      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h5 className="text-xl font-bold text-hm-blue mb-4">Asynchrone Lehre mit Holoboard</h5>
                        <p className="text-gray-700 leading-relaxed font-light">
                          Für aufgezeichnete Lehrinhalte wird das klassische Lightboard zum Holoboard weiterentwickelt. Lehrende schreiben auf einer transparenten Glasfläche und können gleichzeitig digitale Elemente wie Animationen, Videos oder zusätzliche visuelle Ebenen einblenden. Dank eines infrarotgesteuerten Touchscreens ist das Board interaktiv nutzbar. Didaktisch entsteht dadurch ein Format, das sichtbare Lehrendenpräsenz, Anschrieb, Gestik, Visualisierung und mediale Erweiterung in einer gemeinsamen Lernszene verbindet. Die Holoboard schafft so eine immersive und visuell prägnante Lernumgebung, die asynchrone Formate aktiver, verständlicher und engagementstärker macht.
                        </p>
                        <DidacticVideo 
                          src="https://video.hm.edu/getMedium/default/8ff6a30eadda7484c8df6efe74a78163.mp4" 
                          title="Demonstration: Asynchrone Lehre mit Holoboard" 
                        />
                      </div>
                    </div>

                    <div className="bg-gray-900 text-white p-8 rounded-2xl text-center mb-8">
                      <p className="text-xl font-light leading-relaxed">
                        Das Holoboard ist deshalb nicht nur ein technisches System, sondern ein didaktischer Ansatz zur Wiedergewinnung von Präsenz, Interaktion und Authentizität in digitalen Lernumgebungen.
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-500 italic">
                        Wissenschaftliche Grundlage: Community of Inquiry, Social Presence, Instructor Presence, ICAP, Personalization Principle.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-900 relative transform-gpu hover:rotate-y-12 hover:rotate-x-12 transition-transform duration-700 ease-out p-8 flex items-center justify-center">
              <img 
                src="https://holoboard-assets.netlify.app/images/083-confluence_media-d.png" 
                alt="Holoboard Setup Visualization" 
                className="w-full h-full object-contain opacity-95 relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-hm-blue/20 to-hm-red/10 mix-blend-overlay pointer-events-none" />
              
              {/* Abstract UI Elements overlay */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-hm-turquoise/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <SpotlightCard 
                key={feature.id} 
                feature={feature} 
                index={index} 
                onClick={() => setSelectedFeature(feature.id)} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Modal for Content */}
      <AnimatePresence>
        {selectedFeature !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] cursor-pointer"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 sm:p-6">
              <motion.div
                layoutId={`card-${selectedFeature}`}
                className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
              >
                {features.map(f => f.id === selectedFeature && (
                  <React.Fragment key={f.id}>
                    <div className="relative h-64 sm:h-80 w-full bg-gray-900 flex-shrink-0">
                      {f.video ? (
                        <video 
                          src={f.video} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover opacity-90"
                        />
                      ) : (
                        <img 
                          src={f.image} 
                          alt={f.title} 
                          className="w-full h-full object-cover opacity-90"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                      <button 
                        onClick={() => setSelectedFeature(null)}
                        className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-8 sm:p-12 overflow-y-auto">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                          {f.icon}
                        </div>
                        <h4 className="text-3xl font-bold text-gray-900">{f.title}</h4>
                      </div>
                      <div className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                        {f.description}
                      </div>
                      <div className="h-px w-full bg-gray-100 mb-6" />
                      <div className="text-gray-700 leading-relaxed">
                        {f.detailedText}
                      </div>
                      {f.secondaryImage && (
                        <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                          <img src={f.secondaryImage} alt={`${f.title} Detail`} className="w-full h-auto" referrerPolicy="no-referrer" />
                        </div>
                      )}
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
function SpotlightCard({ feature, index, onClick }: { key?: React.Key, feature: any, index: number, onClick: () => void }) {
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
      layoutId={`card-${feature.id}`}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      {/* Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(62, 70, 217, 0.08), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
          {feature.icon}
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
        <p className="text-gray-500 leading-relaxed font-light text-sm mb-6">{feature.description}</p>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <ActionCue mode="detail" accent="blue" />
        </div>
      </div>
    </motion.div>
  );
}

function DidacticVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 bg-black aspect-video shadow-sm">
      <video
        src={src}
        title={title}
        aria-label={title}
        controls
        preload="metadata"
        playsInline
        className="w-full h-full"
      >
        Ihr Browser unterstützt das Video-Tag nicht.
      </video>
    </div>
  );
}
