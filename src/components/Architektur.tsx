import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Database, Server, User, Monitor, Cpu, Globe } from 'lucide-react';
import ActionCue from './ui/ActionCue';

export default function Architektur() {
  const containerRef = useRef(null);
  const [showDetails, setShowDetails] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="architektur" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Systemdesign</h2>
          <h3 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">Technische Architektur</h3>
        </div>

        <div className="relative max-w-5xl mx-auto aspect-[16/12] sm:aspect-[16/9] flex items-center justify-center mb-16">
          
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" viewBox="0 0 1000 600">
            {/* User to Web */}
            <motion.path
              d="M 200 150 L 500 150"
              fill="none"
              stroke="#FC5555"
              strokeWidth="4"
              strokeDasharray="10 10"
              style={{ pathLength, opacity }}
            />
            {/* Web to Holobox */}
            <motion.path
              d="M 500 150 L 800 150"
              fill="none"
              stroke="#3E46D9"
              strokeWidth="4"
              strokeDasharray="10 10"
              style={{ pathLength, opacity }}
            />
            {/* Web to LLM */}
            <motion.path
              d="M 500 150 L 500 450"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeDasharray="10 10"
              style={{ pathLength, opacity }}
            />
            {/* LLM to API */}
            <motion.path
              d="M 500 450 L 200 450"
              fill="none"
              stroke="#33CCCC"
              strokeWidth="4"
              strokeDasharray="10 10"
              style={{ pathLength, opacity }}
            />
            {/* LLM to RAG */}
            <motion.path
              d="M 500 450 L 800 450"
              fill="none"
              stroke="#33CCCC"
              strokeWidth="4"
              strokeDasharray="10 10"
              style={{ pathLength, opacity }}
            />
          </svg>

          {/* Nodes (Desktop Positioning) */}
          <div className="hidden sm:block">
            <div className="absolute top-[150px] left-[200px] -translate-x-1/2 -translate-y-1/2">
              <Node icon={<User />} label="User" color="bg-hm-red" delay={0} />
            </div>
            <div className="absolute top-[150px] left-[500px] -translate-x-1/2 -translate-y-1/2">
              <Node icon={<Globe />} label="Webplattform" color="bg-gray-900" delay={0.1} />
            </div>
            <div className="absolute top-[150px] left-[800px] -translate-x-1/2 -translate-y-1/2">
              <Node icon={<Monitor />} label="Holobox" color="bg-hm-turquoise" delay={0.2} />
            </div>
            <div className="absolute top-[450px] left-[200px] -translate-x-1/2 -translate-y-1/2">
              <Node icon={<Server />} label="Tavus API" color="bg-purple-600" delay={0.3} />
            </div>
            <div className="absolute top-[450px] left-[500px] -translate-x-1/2 -translate-y-1/2">
              <Node icon={<Cpu />} label="Lokales LLM" color="bg-hm-blue" delay={0.4} />
            </div>
            <div className="absolute top-[450px] left-[800px] -translate-x-1/2 -translate-y-1/2">
              <Node icon={<Database />} label="RAG System" color="bg-emerald-600" delay={0.5} />
            </div>
          </div>

          {/* Mobile Fallback Grid */}
          <div className="sm:hidden grid grid-cols-2 gap-8 w-full">
            <Node icon={<User />} label="User" color="bg-hm-red" delay={0} />
            <Node icon={<Globe />} label="Webplattform" color="bg-gray-900" delay={0.1} />
            <Node icon={<Monitor />} label="Holobox" color="bg-hm-turquoise" delay={0.2} />
            <Node icon={<Cpu />} label="Lokales LLM" color="bg-hm-blue" delay={0.3} />
            <Node icon={<Server />} label="Tavus API" color="bg-purple-600" delay={0.4} />
            <Node icon={<Database />} label="RAG System" color="bg-emerald-600" delay={0.5} />
          </div>

        </div>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="rounded-full border border-gray-200 bg-white px-3 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <ActionCue mode="expand" expanded={showDetails} accent="red" />
          </button>
        </div>

        {/* Technical Deep Dive Section */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 64 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="max-w-4xl mx-auto text-left overflow-hidden"
            >
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
                
                {/* Document Header */}
                <div className="mb-12 border-b border-gray-200 pb-8">
                  <h4 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tighter">Technische Dokumentation: Systemarchitektur des Holoboards</h4>
                  <p className="text-sm text-gray-500 font-mono">Stand: 12. März 2026</p>
                </div>

                {/* Section 1 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">1. Architekturziel und Systemverständnis</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                    Das Holoboard ist kein einzelnes Gerät, sondern ein verteiltes Echtzeitsystem für multimodale Mensch-Maschine-Interaktion. Die technische Besonderheit liegt nicht in der isolierten Nutzung einzelner Komponenten wie Avatar, Sprachmodell, Vektordatenbank oder transparentem Display, sondern in deren synchroner Kopplung unter Echtzeitbedingungen. Das System verbindet räumliche Darstellung in der Holobox, browserbasierte Interaktionslogik, avatarbasierte Videokommunikation, Retrieval-gestützte Wissensintegration, lokale Modellinferenz und workflowbasierte Orchestrierung.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    Aus den vorliegenden Projektunterlagen ergibt sich ein Architekturmodell mit zwei technisch relevanten Ausprägungen:
                  </p>
                  <ol className="list-decimal pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>Eine belegte Hauptintegration auf Basis von Tavus, Daily, browserseitiger Event-Verarbeitung und <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code> als Orchestrierungsschicht für Tool-Calls und RAG.</li>
                    <li>Eine zusätzlich dokumentierte Integrationsvariante mit LiveKit Agents und Tavus-Avatar-Plugin, die als alternative Transport- und Agent-Laufzeit für künftige Ausbaustufen dient.</li>
                  </ol>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                    Die Systemarchitektur ist deshalb am präzisesten als hybrides Echtzeit-Ökosystem zu beschreiben: Wahrnehmung, Sprachverarbeitung, Wissensabruf, Zustandssteuerung und räumliche Ausgabe sind entkoppelt implementiert, aber zur Laufzeit eng synchronisiert.
                  </p>
                  <figure className="my-12">
                    <img src="https://holoboard-assets.netlify.app/images/architektur-01-neu-gesamtarchitektur.png" alt="Gesamtarchitektur und Systemverständnis" className="w-full rounded-2xl shadow-md border border-gray-200" />
                    <figcaption className="text-sm text-gray-500 mt-3 text-center">Gesamtarchitektur und Systemverständnis</figcaption>
                  </figure>
                </div>

                {/* Section 2 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">2. Kernkomponenten und ihre technische Funktion</h3>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-xl font-bold text-hm-red mb-4">2.1 User als multimodale Eingangsquelle</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                        Der Nutzer ist im Holoboard keine reine Eingabeinstanz, sondern ein kontinuierlicher Signalgeber. In die Verarbeitung gehen gesprochene Sprache, prosodische Merkmale, Blickrichtung, sichtbare Reaktion, Präsenz im Kameraraum sowie gegebenenfalls Interaktion über Touch- oder Weboberflächen ein. In Tavus-basierten Szenarien werden diese Signale nicht nur transkribiert, sondern in der Perception-Schicht zusätzlich als visuelle und akustische Kontextsignale interpretiert.
                      </p>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-02-neu-multimodaler-user.png" alt="Multimodaler User" className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">Multimodaler User</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">2.2 Webplattform als operative Kontrollschicht</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Die Webplattform ist die zentrale Laufzeitumgebung für Sitzungserstellung, Frontend-Logik, API-Kommunikation, Event-Handling und Zustandswechsel. In den vorhandenen Implementierungen übernimmt sie insbesondere folgende Funktionen:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>Start einer Tavus-Konversation per API-Request mit <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">replica_id</code>, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">persona_id</code>, Sprach- und Callback-Parametern.</li>
                        <li>Übergabe der <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">conversation_id</code> an die eigentliche Call-Ansicht.</li>
                        <li>Einbettung des Tavus-/Daily-Calls im Browser über <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">daily-js</code>.</li>
                        <li>Registrierung eines <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">app-message</code>-Listeners für Tavus Interaction Events.</li>
                        <li>Extraktion von Tool-Call-Namen und Argumenten.</li>
                        <li>Weiterleitung des Tool-Calls an einen <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code>-Webhook.</li>
                        <li>Rückeinspeisung externer Antwortkontexte in die laufende Konversation mittels <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">conversation.echo</code> und <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">conversation.overwrite_llm_context</code>.</li>
                      </ul>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                        Damit ist die Webplattform die technisch kritische Vermittlungsschicht zwischen Tavus-Avatar, RAG-System, Workflow-Orchestrierung und Holobox-spezifischer Darstellung.
                      </p>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-03-neu-webplattform.png" alt="Webplattform" className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">Webplattform</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-hm-turquoise mb-4">2.3 Holobox als physisch-räumliche Ausgabeschicht</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Die Holobox ist nicht nur Displaygehäuse, sondern ein optisch-räumliches Interface. Frühere Projektdokumente belegen, dass Geometrie, Hintergrundfarbe, Schattenwurf, Signallayout, Bilddrehung und getrennte Quellenführung unmittelbaren Einfluss auf die wahrgenommene Tiefenwirkung haben. Bereits 2023 wurde festgehalten, dass die Eingabequelle im Format <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">9:16</code>, um 90 Grad gegen den Uhrzeigersinn gedreht, bereitgestellt werden muss. Ebenso wurden zwei getrennte Signalpfade vorgesehen: ein Signal für Dozent bzw. Avatar mit Schreibanteilen und ein zweites für Whiteboard-, Folien- oder UI-Inhalte, die in der Box separat überlagert werden.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Hinzu kommt eine in <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">Processing</code> prototypisch ausgearbeitete lokale Ausgabelogik, die für das Verständnis der Holobox wesentlich ist. Die Sketches im Ordner <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">07_Demos_und_Experimente/Processing</code> zeigen, dass die Box früh als zustandsbasiertes Präsentationssystem modelliert wurde: mit Vollbildausgabe im rotierten Koordinatensystem, klickbaren Hotspots, Home- und Submenüs, Medienwechseln zwischen Holoboard-, Lernvideo- und Studienberatungsmodus sowie einem direkten Übergang in die externe Tavus-Webanwendung. In <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">HoloboardDemo.pde</code> ist diese Logik als explizite Zustandsmaschine (<code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">MENU</code>, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">STUDIENBERATUNG</code>, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">HOLOBOARD</code>, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">SUB_1</code>, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">SUB_2</code>) umgesetzt; Interaktionsflächen werden nicht nur visualisiert, sondern über eine eigene 90-Grad-Rotationsfunktion geometrisch an das physische Display angepasst.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Auch die zweite Processing-Linie (<code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">HEP_sketch_251017a.pde</code>) ist architektonisch relevant, weil sie die Holobox als zeitkritischen Medienrenderer behandelt. Dort werden Video und Audio bewusst getrennt verarbeitet, das Bild um 90 Grad rotiert, formatgerecht eingepasst, Audio/Video per Soft-Sync nachgeregelt und Schleifen ohne hartes Seek neu gestartet. Processing war damit nicht bloß Demonstrationssoftware, sondern eine frühe Rendering- und Interaktionsschicht zur Erprobung genau jener physisch-räumlichen Randbedingungen, die später in der Web-/Tavus-Architektur weitergeführt wurden.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                        Die Holobox ist deshalb als Rendering-Endpunkt mit physischen und softwareseitigen Randbedingungen zu behandeln. Zur Architektur gehören nicht nur APIs und Modelle, sondern auch Lichtführung, Keying, Overlay-Komposition, Audioausleitung, formatgenaue Bildtransformation, rotierte Interaktionsgeometrie und zustandsbasierte Mediensteuerung.
                      </p>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-04-neu-holobox.png" alt="Holobox Architektur" className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">Holobox Architektur</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-purple-600 mb-4">2.4 Tavus als avatarbasierte Echtzeit-CVI</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Tavus bildet die avatarbezogene Echtzeit-Kommunikationsschicht. Laut aktueller offizieller Dokumentation arbeitet Tavus im Full-Pipeline-Modus mit konfigurierbaren Layern für Transport, Perception, STT, LLM und TTS; die Interaktion mit der laufenden Konversation erfolgt über das Interactions Protocol auf Basis des Daily-Datenkanals. Aktuelle Tavus-Unterlagen nennen <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">raven-1</code> als empfohlenes Perception-Modell und <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">Phoenix-4</code> als aktuelle Realtime-Rendering-Basis für expressive, emotional gesteuerte Repliken.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Für das Holoboard ist Tavus damit nicht bloß Videoausgabe, sondern eine vollständige Conversational-Video-Infrastruktur mit:
                      </p>
                      <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>multimodaler Wahrnehmung,</li>
                        <li>avatarisierter Antwortausgabe,</li>
                        <li>Echtzeit-Ereignissen für Tool-Calls,</li>
                        <li>dynamischer Kontextaktualisierung während laufender Gespräche.</li>
                      </ul>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-05-neu-tavus-pipeline.png" alt="Tavus Echtzeit-Avatar-Pipeline" className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">Tavus Echtzeit-Avatar-Pipeline</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">2.5 Daily als Medien- und Event-Transport</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                        Im belegten Implementierungsstand läuft der Avatar-Call über Daily. Der Browser erzeugt einen Daily-Frame, lädt die Gesprächssitzung und tritt ihr automatisch bei. Über denselben Kanal werden Tavus-Events als <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">app-message</code> empfangen und eigene Nachrichten zurück in die Konversation gesendet. Daily übernimmt damit im Holoboard die Transport- und Session-Ebene für Audio, Video und Interaktionsereignisse.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">2.6 <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xl font-mono text-gray-800">n8n</code> als No-/Low-Code-Orchestrierungsschicht</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code> ist in dieser Architektur keine Randkomponente, sondern die operative Kopplung zwischen LLM-Tool-Calling, RAG-Backend und Rückführung der Ergebnisse in die Livesitzung. Die lokale Integrationsdokumentation beschreibt exakt diesen Pfad: Tavus löst einen Tool-Call aus, das Frontend leitet ihn an einen <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code>-Webhook weiter, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code> ruft das RAG-System auf und liefert einen Antwortkontext zurück, der anschließend wieder in Tavus eingespeist wird.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Technisch ist <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code> hier aus drei Gründen relevant:
                      </p>
                      <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>als robustes Eingangs-Gateway für Webhooks,</li>
                        <li>als standardisierbare Workflow-Schicht zwischen heterogenen Diensten,</li>
                        <li>als entkoppelte Ausführungsumgebung für Retrieval, Datenanreicherung und Rückantwort.</li>
                      </ul>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-06-neu-n8n-orchestrierung.png" alt="n8n Orchestrierung" className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">n8n Orchestrierung</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-emerald-600 mb-4">2.7 RAG-System und Vektordatenbank</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Das RAG-System ist die Wissensschicht für projektspezifische, institutionelle oder studienbezogene Antworten. In den vorhandenen Dokumenten ist Pinecone als Vektordatenbank benannt. Das System dient dazu, generative Antworten an kuratierte Dokumente zu binden, statt sich allein auf das interne Weltwissen des Sprachmodells zu verlassen. Für das Holoboard ist das entscheidend, weil die Anwendungsfälle stark hochschul- und projektspezifisch sind und Nachvollziehbarkeit wichtiger ist als rein dialogische Eloquenz.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                        Ein zusätzlicher technischer Grund für die externe RAG-Schicht ist die aktuelle Tavus-Produktlage: Die offizielle Tavus Knowledge Base unterstützt derzeit Dokumente vor allem für englische Inhalte. Für deutschsprachige Hochschul- und Projektdokumente ist daher eine externe RAG-Pipeline architektonisch plausibel und in diesem Projekt technisch sinnvoll.
                      </p>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-07-neu-rag-system.png" alt="RAG Wissenssystem" className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">RAG Wissenssystem</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-hm-blue mb-4">2.8 Lokales LLM mit Ollama und <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xl font-mono text-gray-800">gpt-oss:20b</code></h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Für lokale Inferenzszenarien ist ein On-Premise-Modellpfad über Ollama dokumentiert. <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">gpt-oss-20b</code> ist seit August 2025 offiziell als OpenAI-Open-Weight-Modell verfügbar und wird von Ollama als <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">gpt-oss:20b</code> lokal ausführbar bereitgestellt. Diese Schicht ist für Datenschutz, institutionelle Kontrolle, Offline-Demos, reproduzierbare Experimente und anpassbare Systemprompts relevant.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Technisch sinnvoll ist das lokale LLM im Holoboard vor allem in drei Rollen:
                      </p>
                      <ul className="list-disc pl-6 mb-4 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>als kontrollierbare Inferenzinstanz für sensible oder interne Wissensbestände,</li>
                        <li>als Agenten- oder RAG-Backend außerhalb der Tavus-Standard-LLM-Ausführung,</li>
                        <li>als Fallback- oder Forschungsmodus für prototypische Lehr- und Demonstrationsszenarien.</li>
                      </ul>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                        Dabei ist wichtig: In der Tavus-Full-Pipeline kann das antwortgenerierende LLM Tavus-hosted oder OpenAI-kompatibel extern sein. Das lokale Modell ersetzt deshalb nicht zwangsläufig Tavus, sondern erweitert die Gesamtarchitektur um eine souveräne, lokal betreibbare Intelligenzschicht.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">2.9 LiveKit als alternative Agenten- und Transportarchitektur</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Die Unterlagen enthalten zusätzlich eine technisch konsistente LiveKit-Variante. Lokal dokumentiert sind sowohl eine Komponentenübersicht als auch eine Windows-Checkliste mit <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">livekit-agents[tavus,openai,silero]</code>, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">AvatarSession</code>, separater <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">.env</code>-Konfiguration und Python-basiertem Agent-Worker. Die offizielle LiveKit-Dokumentation bestätigt diese Integrationsrichtung: Tavus kann über das Avatar-Plugin in LiveKit Agents eingebunden werden, wenn die Persona im Tavus-Kontext auf <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">pipeline_mode: "echo"</code> und <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">transport_type: "livekit"</code> konfiguriert wird.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                        Architektonisch bedeutet das:
                      </p>
                      <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>Daily/Tavus ist die belegte Hauptstrecke der bisherigen Holobox-Integration.</li>
                        <li>LiveKit ist eine ausbaufähige alternative Agentenlaufzeit, insbesondere dann, wenn STT, LLM, TTS und Turn-Taking stärker in eine eigene Agentenarchitektur verlagert werden sollen.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">3. Echtzeit-Verarbeitungspipeline</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                    Die derzeit am besten belegte Pipeline des Holoboards lässt sich wie folgt beschreiben:
                  </p>
                  
                  <ol className="list-decimal pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>Der Nutzer spricht zur Holobox oder interagiert mit dem Browser-Frontend.</li>
                    <li>Das Frontend erstellt über die Tavus-API eine neue Konversation und erhält <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">conversation_id</code> beziehungsweise <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">conversation_url</code>.</li>
                    <li>Ein eingebetteter Daily-Client verbindet den Browser mit dem Tavus-Gesprächsraum.</li>
                    <li>Die Tavus-Perception-Schicht interpretiert Audio- und Videosignale des Nutzers; im aktuellen Tavus-Stack ist <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">raven-1</code> das empfohlene Modell.</li>
                    <li>Die STT-Schicht transkribiert die Nutzereingabe.</li>
                    <li>Die LLM-Schicht entscheidet, ob sie direkt antwortet oder ein konfiguriertes Tool aufrufen muss.</li>
                    <li>Wenn ein Tool benötigt wird, sendet Tavus ein <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">conversation.tool_call</code>-Event über den Daily-Datenkanal.</li>
                    <li>Das Frontend empfängt dieses Event über <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">callFrame.on("app-message", ...)</code>, extrahiert <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">properties.name</code> und <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">properties.arguments</code> und baut daraus einen strukturierten Request.</li>
                    <li>Dieser Request wird per HTTP <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">POST</code> an einen <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code>-Webhook gesendet.</li>
                    <li><code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code> ruft die nachgelagerte RAG- oder Agentenlogik auf, verarbeitet Retrieval, Datenanreicherung und Antwortbildung und liefert ein JSON-Ergebnis zurück, im belegten Stand mit einem Feld <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">ragContext</code>.</li>
                    <li>Das Frontend sendet den erhaltenen Text mit <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">conversation.echo</code> zurück an Tavus, damit die Replica den Inhalt unmittelbar aussprechen kann.</li>
                    <li>Zusätzlich wird derselbe Kontext mit <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">conversation.overwrite_llm_context</code> in die laufende Tavus-Konversation injiziert, damit Folgeäußerungen auf demselben Wissensstand aufbauen.</li>
                    <li>Tavus rendert Sprache, Lippenbewegung, Mimik und Reaktionsverhalten in Echtzeit.</li>
                    <li>Die Ausgabe wird innerhalb der Holobox perspektivisch korrekt, gedreht, skaliert und mit Hintergrund- bzw. Overlayebenen kombiniert dargestellt.</li>
                  </ol>

                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    Der entscheidende technische Punkt ist hier die Verteilung der Verantwortung:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>Tavus erkennt, wann ein Tool erforderlich ist.</li>
                    <li>Das Frontend führt das Tool nicht selbst fachlich aus, sondern delegiert an <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code>.</li>
                    <li><code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code> orchestriert RAG und externe Dienste.</li>
                    <li>Das Frontend übernimmt die Rückkopplung in die Livesitzung.</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                    Genau diese Entkopplung macht die Architektur erweiterbar, erhöht aber auch die Latenz- und Fehleranforderungen an jede Zwischenschicht.
                  </p>
                  <figure className="my-12">
                    <img src="https://holoboard-assets.netlify.app/images/architektur-00-neu-gesamtpipeline.png" alt="Gesamtpipeline" className="w-full rounded-2xl shadow-md border border-gray-200" />
                    <figcaption className="text-sm text-gray-500 mt-3 text-center">Gesamtpipeline</figcaption>
                  </figure>
                </div>

                {/* Section 4 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">4. Tool-Calling, Wahrnehmung und Kontextsteuerung</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    Für das Holoboard ist Tool-Calling der Übergabepunkt zwischen generativem Dialog und verifiziertem Wissen. Laut Tavus-Dokumentation werden Tool-Calls nicht serverseitig von Tavus selbst ausgeführt. Die Runtime muss im Frontend oder in einer eigenen Logikschicht auf entsprechende Events hören und die gewünschte Funktion außerhalb von Tavus ausführen. Die lokale Projektimplementierung entspricht genau diesem Muster.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    Zusätzlich erlaubt Tavus neben klassischen LLM-Tool-Calls auch wahrnehmungsbasierte Tool-Auslösung. Mit <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">raven-1</code> stehen audio- und visuell ausgelöste Tools zur Verfügung. Damit ist perspektivisch nicht nur ein semantischer, sondern auch ein situationsbasierter Systempfad möglich, etwa wenn der Nutzer auf ein Objekt zeigt, einen bestimmten Zustand auf dem Screen präsentiert oder per Stimmlage Unsicherheit signalisiert.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    Die Persona ist in diesem Zusammenhang kein statischer Prompt, sondern eine Konfigurationsoberfläche für:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>Rollenverständnis,</li>
                    <li>Antwortstil,</li>
                    <li>Tool-Schema,</li>
                    <li>Wissensgrenzen,</li>
                    <li>Reaktionslogik,</li>
                    <li>Modell- und Layerparameter.</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                    Im Holoboard muss Persona-Steuerung deshalb immer zusammen mit RAG, Tool-Definitionen und Kontextinjektion gedacht werden.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">5. Räumliche Darstellung und holoboxspezifisches Rendering</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    Die räumliche Ausgabe folgt anderen Gesetzen als ein Standard-Videochat. Projektunterlagen aus 2023 und 2024 zeigen, dass Bildaufbereitung und Szenografie integrale Teile der Systemarchitektur sind. Relevant sind insbesondere:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>erzwungene Bildrotation und Formattransformation für das Box-Display,</li>
                    <li>weißer statt schwarzer Hintergrund zur Unterstützung des Tiefeneindrucks,</li>
                    <li>harte statt diffuse Beleuchtung zur Erzeugung präziser Schatten,</li>
                    <li>Keying- und Freistellungslogik für Protagonist bzw. Avatar,</li>
                    <li>getrennte Overlay- und Hintergrundebenen,</li>
                    <li>externer Audioabgriff über Aktivlautsprecher statt alleiniger Box-Audioausgabe.</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                    Die lokale <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">call.html</code> bestätigt außerdem eine eigenständige Darstellungslogik mit Hintergrundvideo, Overlays und Tastatur-gesteuerten Zustandswechseln für Größen- und Perspektivwechsel. Die Holobox ist damit weder ein neutraler Monitor noch bloßes Gehäuse, sondern eine eigene Rendering-Zielumgebung mit dedizierter Kompositionslogik.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">6. Historische Prototypenschicht: Processing</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    In frühen Entwicklungs- und Demophasen wurde Processing nicht nur zur Visualisierung, sondern als lokale Steuer- und Renderumgebung eingesetzt. Die Sketches belegen vier technisch relevante Funktionen:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>Modellierung der Holobox als zustandsbasiertes Interface mit Menüs, Hotspots und Rücksprunglogik.</li>
                    <li>Anpassung von Interaktionsgeometrien an die physisch gedrehte Displayachse über eigene Rotations- und Hit-Test-Funktionen.</li>
                    <li>Test von Medienwechseln zwischen lokal abgespielten Videos und externer Avatar-Webanwendung.</li>
                    <li>Untersuchung synchronisierter Audio-/Video-Wiedergabe unter Vollbild- und Rotationsbedingungen.</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                    Diese Processing-Schicht ist für die heutige Zielarchitektur nicht mehr die zentrale Laufzeitbasis, aber sie war der erste Ort, an dem die Holobox als kombinierter Raum aus Rendering, Navigation, Medienlogik und Übergang in eine KI-gestützte Gesprächsanwendung technisch konkretisiert wurde.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">7. Technische Hauptkomplexität</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    Die eigentliche Ingenieurleistung des Holoboards liegt in der Synchronisation heterogener Zeitskalen und Protokolle:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>WebRTC-/Daily-Transport arbeitet paket- und verbindungsorientiert.</li>
                    <li>Tavus verarbeitet Wahrnehmung, Sprachmodell und Rendering in einer latenzkritischen CVI-Pipeline.</li>
                    <li><code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code> arbeitet workflowbasiert und damit semantisch, aber nicht primär für ultrakurze Reaktionszeiten optimiert.</li>
                    <li>Das RAG-System benötigt Retrieval, Ranking, Kontextkomposition und Antwortübergabe.</li>
                    <li>Lokale LLMs bringen zusätzliche Rechen- und Speicheranforderungen mit sich.</li>
                    <li>Die Holobox erzwingt physische Constraints bei Bildformat, Freistellung, Licht und Audioausleitung.</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    Aus diesen Randbedingungen ergeben sich die architektonisch relevanten Qualitätsziele:
                  </p>
                  <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>minimale End-to-End-Latenz,</li>
                    <li>robuste Fehlerbehandlung bei ausbleibenden Tool-Responses,</li>
                    <li>klar definierte Zuständigkeiten zwischen Frontend, Tavus und <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code>,</li>
                    <li>deterministische Kontextübergabe an das Sprachmodell,</li>
                    <li>präzise Bildkomposition für die Holobox,</li>
                    <li>kontrollierbarer Wechsel zwischen Cloud- und lokaler Intelligenzschicht.</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">8. Architekturfazit</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    Das Holoboard ist technisch am treffendsten als multimodale, verteilte Echtzeitarchitektur für räumlich eingebettete Wissensinteraktion zu beschreiben. Die operative Hauptlinie koppelt Tavus Full Pipeline, Daily-Datenkanal, browserseitige Eventlogik, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">n8n</code>-Workflows und eine externe RAG-Schicht. Ergänzt wird sie durch lokale LLM-Ressourcen auf Ollama-Basis und eine dokumentierte LiveKit-Agentenvariante für weitergehende Agentenarchitekturen.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Gerade diese Schichtung macht das System technisch anspruchsvoll und forschungsrelevant: Das Holoboard verbindet nicht nur Avatar-Rendering mit LLMs, sondern integriert Wahrnehmung, Kontextsteuerung, Tool-Calling, dokumentengebundenes Wissen und räumliche Ausgabe in einer einzigen Lehr- und Interaktionsumgebung.
                  </p>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

function Node({ icon, label, color, delay }: { icon: React.ReactNode, label: string, color: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-3 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 min-w-[140px]"
    >
      <div className={`w-16 h-16 rounded-full ${color} text-white flex items-center justify-center shadow-inner`}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
      </div>
      <span className="font-bold text-gray-900 tracking-tight text-sm uppercase">{label}</span>
    </motion.div>
  );
}
