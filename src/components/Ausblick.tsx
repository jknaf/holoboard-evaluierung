import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Cpu, FileText } from 'lucide-react';

export default function Ausblick() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="ausblick" ref={containerRef} className="relative bg-black text-white h-[400vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        {/* Background Glows that move with scroll */}
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.4, 0.1])
          }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-hm-blue rounded-full blur-[150px] pointer-events-none"
        />
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.4, 0.1])
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hm-red rounded-full blur-[150px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Text Content that fades in/out based on progress */}
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold tracking-widest text-hm-turquoise uppercase mb-3">Ausblick</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Weiterführung 2027 bis 2030
            </h3>

            <div className="relative h-[40vh]">
              <ScrollText
                progress={scrollYProgress}
                range={[0, 0.33]}
                icon={<FileText className="w-10 h-10 text-hm-red mb-6" />}
                title="Das Szenario: KI-gestützte mündliche Prüfungen"
                desc="In Zeiten generativer KI verlieren schriftliche Seminar- und Modularbeiten an Aussagekraft. Mündliche Prüfungen gewinnen an Bedeutung, weil sie echtes Verständnis prüfen — skalieren aber nicht. Die Lösung: Der KI-Avatar des Professors führt die mündliche Prüfung in der Holobox. Ihre Größe ist kein Problem mehr — sie wird zur festen Prüfungsstation."
              />
              <ScrollText
                progress={scrollYProgress}
                range={[0.33, 0.66]}
                icon={<ShieldCheck className="w-10 h-10 text-hm-blue mb-6" />}
                title="Komplexe Fragen — tragfähige Grundlagen"
                desc="Ein solches Szenario wirft große und berechtigte Fragen auf: Datenschutz, einfache Bedienbarkeit, niedrigschwellige Zugänglichkeit, faire Bewertung. Das Projekt hat hier bereits wichtige Ergebnisse geliefert — lokale KI-Infrastruktur, RAG-basierte Wissenssysteme, No-Code-Steuerung — die jetzt gezielt weiterentwickelt und in die neue Technologie integriert werden können."
              />
              <ScrollText
                progress={scrollYProgress}
                range={[0.66, 1]}
                icon={<Cpu className="w-10 h-10 text-hm-turquoise mb-6" />}
                title="Von der Forschung in den Regelbetrieb"
                desc="Alles, was dafür gebraucht wird, existiert bereits als Prototyp: lokale KI-Infrastruktur, RAG-System, Avatar-Technologie und Voice Agents. Der Schritt von 2027 bis 2030 ist die Überführung vom Forschungsprototyp in ein institutionell verankertes, datenschutzkonformes Prüfungswerkzeug mit echtem Mehrwert für die Hochschule."
              />
            </div>
          </div>

          {/* Right: Exam Scenario Image */}
          <div className="relative flex items-center justify-center">
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0.6, 1]) }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
            >
              <img
                src="https://holoboard-assets.netlify.app/images/ausblick-pruefungsszenario.png"
                alt="Prüfungsszenario: Studentin vor der Holobox mit KI-Avatar als Prüfer"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="bg-white/5 backdrop-blur-sm border-t border-white/10 px-6 py-4">
                <p className="text-sm text-gray-400 font-light text-center">Vision: KI-gestützte mündliche Prüfung mit Avatar-Prüfer in der Holobox</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ScrollText({ progress, range, icon, title, desc }: any) {
  const opacity = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [50, 0, 0, -50]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      {icon}
      <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h4>
      <p className="text-xl text-gray-400 leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}

