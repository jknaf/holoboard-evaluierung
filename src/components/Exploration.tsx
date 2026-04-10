import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';

const gallerySlides = [
  // B. Früher Technologieansatz
  {
    phase: "Früher Technologieansatz",
    title: "Technische Zeichnung des ursprünglichen technologischen Ansatzes",
    description: "Technische Zeichnung des ursprünglichen technologischen Ansatzes. Gezeigt wird die erste Systemlogik auf Basis von Streaming- und Übertragungstechnologie.",
    image: "https://holoboard-assets.netlify.app/images/Holoboard.png"
  },
  {
    phase: "Früher Technologieansatz",
    title: "Teil des Prototypenaufbaus für den ersten Streaming-Ansatz",
    description: "Teil des Prototypenaufbaus für den ersten Streaming-Ansatz. Das Bild zeigt eine experimentelle technische Konfiguration.",
    image: "https://holoboard-assets.netlify.app/images/IMG_3677.JPG"
  },
  {
    phase: "Früher Technologieansatz",
    title: "Früher Proof of Concept für den Streaming-Ansatz",
    description: "Früher Proof of Concept für den Streaming-Ansatz. Die Aufnahme dokumentiert die erste praktische Validierung der ursprünglichen Technologieidee.",
    image: "https://holoboard-assets.netlify.app/images/IMG_3678.JPG"
  },
  {
    phase: "Früher Technologieansatz",
    title: "Bildmischer im technischen Setup",
    description: "Bildmischer im technischen Setup. Das Bild zeigt eine zentrale Komponente der Signalverarbeitung und Mediensteuerung.",
    image: "https://holoboard-assets.netlify.app/images/IMG_3680.JPG"
  },
  {
    phase: "Früher Technologieansatz",
    title: "Weiteres Element der Streaming-Technologie des ersten Ansatzes",
    description: "Weiteres Element der Streaming-Technologie des ersten Ansatzes. Die Aufnahme ergänzt die technische Dokumentation der frühen Pipeline.",
    image: "https://holoboard-assets.netlify.app/images/IMG_3682.JPG"
  },
  {
    phase: "Früher Technologieansatz",
    title: "Zusätzliche technische Komponente des ursprünglichen Streaming-Ansatzes",
    description: "Zusätzliche technische Komponente des ursprünglichen Streaming-Ansatzes. Das Bild gehört zur Dokumentation des ersten Prototypenaufbaus.",
    image: "https://holoboard-assets.netlify.app/images/Kamera_4D.png"
  },

  // A. Holoboard-Implementierung (Reihenfolge: 11, 4, 5, 6, 7, 8, 9, 10, 12, 1)
  {
    phase: "Holoboard-Implementierung",
    title: "Drei Teilbilder als Grundlage des Ganzkörper-Avatars",
    description: "Drei Teilbilder als Grundlage des Ganzkörper-Avatars. Die Darstellung zeigt, aus welchen visuellen Segmenten der finale Avatar zusammengesetzt wurde.",
    image: "https://holoboard-assets.netlify.app/images/Bildschirmfoto%202025-01-28%20um%2018.22.56.png"
  },
  {
    phase: "Holoboard-Implementierung",
    title: "Gesamte IT-Hardware des Holoboards",
    description: "Gesamte IT-Hardware des Holoboards. Das Bild dokumentiert die technische Infrastruktur, die für die Wiedergabe interaktiver Animationen und Inhalte benötigt wird.",
    image: "https://holoboard-assets.netlify.app/images/IT_Hardware_Holoboard.JPG"
  },
  {
    phase: "Holoboard-Implementierung",
    title: "Allerster Versuch beim Anbieter der Holobox",
    description: "Allerster Versuch beim Anbieter der Holobox. Das Bild dokumentiert eine sehr frühe Phase der praktischen Annäherung an das spätere System.",
    image: "https://holoboard-assets.netlify.app/images/Holobox.jpeg"
  },
  {
    phase: "Holoboard-Implementierung",
    title: "Weiterer Schritt beim Aufbau der Bildhintergründe",
    description: "Weiterer Schritt beim Aufbau der Bildhintergründe. Das Bild dokumentiert die Gestaltung und Anpassung der Szenenflächen.",
    image: "https://holoboard-assets.netlify.app/images/IMG_3815.JPG"
  },
  {
    phase: "Holoboard-Implementierung",
    title: "Weitere Hintergrundkonstruktion für das Holoboard",
    description: "Weitere Hintergrundkonstruktion für das Holoboard. Die Aufnahme zeigt einen ergänzenden Produktions- oder Gestaltungszustand.",
    image: "https://holoboard-assets.netlify.app/images/IMG_3816.JPG"
  },
  {
    phase: "Holoboard-Implementierung",
    title: "Aufbau der Hintergründe mit Prof. Dr. Joachim Knaf",
    description: "Aufbau der Hintergründe mit Prof. Dr. Joachim Knaf. Die Aufnahme zeigt, wie die visuelle Szene für die spätere Darstellung konstruiert wurde.",
    image: "https://holoboard-assets.netlify.app/images/IMG_3814.JPG"
  },
  {
    phase: "Holoboard-Implementierung",
    title: "Darstellung der Ganzkörper-Avatare in einer um 90 Grad gedrehten Ansicht",
    description: "Darstellung der Ganzkörper-Avatare in einer um 90 Grad gedrehten Ansicht. Das Bild zeigt einen technischen Zwischenschritt zur korrekten räumlichen Ausrichtung.",
    image: "https://holoboard-assets.netlify.app/images/Bildschirmfoto%202024-11-24%20um%2010.06.26.png"
  },
  {
    phase: "Holoboard-Implementierung",
    title: "Postproduktion des Ganzkörper-Avatars durch Maskierung",
    description: "Postproduktion des Ganzkörper-Avatars durch Maskierung. Die Aufnahme dokumentiert einen Bearbeitungsschritt bei der Freistellung und Zusammenführung.",
    image: "https://holoboard-assets.netlify.app/images/Bildschirmfoto%202025-01-28%20um%2010.17.43.png"
  },
  {
    phase: "Holoboard-Implementierung",
    title: "Weiterentwickelter Zwischenstand des Systems",
    description: "Weiterentwickelter Zwischenstand des Systems. Das Bild zeigt eine spätere Phase nach den ersten Grundversuchen.",
    image: "https://holoboard-assets.netlify.app/images/image2.jpeg",
    rotate: 'left'
  },
  {
    phase: "Holoboard-Implementierung",
    title: "Studio-Setup zur Produktion der Avatare",
    description: "Studio-Setup zur Produktion der Avatare. Das Bild dokumentiert die technische Umgebung für Aufnahme und Erstellung.",
    image: "https://holoboard-assets.netlify.app/images/image1.jpeg",
  },

  // C. Präsentation und Anwendung
  {
    phase: "Präsentation und Anwendung",
    title: "Prof. Dr. Joachim Knaf in der Holobox mit Interaktion auf der Scheibe",
    description: "Prof. Dr. Joachim Knaf in der Holobox mit Interaktion auf der Scheibe. Gezeigt wird ein Tic-Tac-Toe-Szenario, bei dem von außen der Start-Button betätigt wird und von innen direkt auf die Fläche geschrieben wird.",
    image: "https://holoboard-assets.netlify.app/images/Thumbnail%20Ansynchrone%20Lehre.png"
  },
  {
    phase: "Präsentation und Anwendung",
    title: "Web-App für die Präsentation des Holoboards im Kontext des Hochschulentwicklungsplans",
    description: "Web-App für die Präsentation des Holoboards im Kontext des Hochschulentwicklungsplans. Besucherinnen und Besucher konnten über ein interaktives Auswahlrad Fragen auswählen, die anschließend von Prof. Dr. Klaus Kreulich als KI-Avatar beantwortet wurden.",
    image: "https://holoboard-assets.netlify.app/images/IMG_1F7C0858-5792-44C8-B12D-9F0E1199333C.JPEG"
  },
  {
    phase: "Präsentation und Anwendung",
    title: "Prof. Dr. Joachim Knaf am Stand auf der TURN-Konferenz",
    description: "Prof. Dr. Joachim Knaf am Stand auf der TURN-Konferenz. Die Aufnahme zeigt das Projekt im Messe- und Präsentationskontext.",
    image: "https://holoboard-assets.netlify.app/images/20241115_114416.jpg"
  }
];

export default function Exploration() {
  const containerRef = useRef(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === gallerySlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? gallerySlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setIsGalleryOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen]);

  const timeline = [
    { year: "2022", title: "Ausgangspunkt in der Onlinelehre", description: "Die Erfahrungen aus der Onlinelehre machten sichtbar, dass videobasierte Formate zwar funktionieren, aber Präsenz, Aufmerksamkeit und direkte Interaktion nur unzureichend ersetzen. Daraus entstand die Suche nach einem neuen digitalen Lehrformat." },
    { year: "2022", title: "Erste Vision volumetrischer Lehre", description: "Im Projektantrag stand zunächst die Idee im Vordergrund, Lehrveranstaltungen als räumlich erfahrbare, volumetrische Lerninhalte weiterzuentwickeln. Ziel war eine neue Form digitaler Lehrpräsenz jenseits klassischer Videokonferenzen." },
    { year: "2023", title: "Technische Exploration mit LiDAR und 360-Video", description: "Die Exploration konzentrierte sich auf LiDAR, Point Clouds, Video-Stitching und AR-nahe Wiedergabe. Dabei wurde deutlich, wie hoch der technische Aufwand für Aufnahme, Synchronisation, Verarbeitung und Nutzung tatsächlich ist." },
    { year: "2023–2024", title: "Technologiewandel zum Holoboard", description: "Zwischen 2023 und 2024 vollzog sich der eigentliche Richtungswechsel. Statt einer aufwendigen volumetrischen Produktionspipeline rückte ein robusteres System in den Mittelpunkt, das mit realer Lehrpraxis, vorhandener Infrastruktur und didaktischen Anforderungen besser vereinbar ist.", highlight: true },
    { year: "2024", title: "Aufbau des Holoboards und KI-Systeme", description: "2024 wurde das Holoboard als konkrete Lösung aufgebaut und weiterentwickelt. Parallel dazu entstanden die technischen Grundlagen für lokale KI-Funktionen, Retrieval-Augmented Generation, mediale Steuerung und die Produktion der projektbezogenen Inhalte und Videos." },
    { year: "Q3 2025", title: "Fertigstellung des Prototyps", description: "Im dritten Quartal 2025 wurde der Holoboard-Prototyp in einer funktionsfähigen Form abgeschlossen. Damit lagen nicht nur Konzept und Architektur vor, sondern ein real demonstrierbares System." },
    { year: "Q4 2025", title: "Präsentation des fertigen Prototyps", description: "Im vierten Quartal 2025 wurde der fertige Prototyp präsentiert. Damit wurde aus einer frühen Vision ein sichtbar erprobtes Lehrsystem mit technischer, didaktischer und strategischer Relevanz." }
  ];

  return (
    <section id="exploration" ref={containerRef} className="relative h-[700vh] bg-gray-50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Fixed Title */}
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Phase 2 – Entwicklung</h2>
            <h3 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
              Forschungs- & <br/> Entwicklungsreise
            </h3>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              Vom Problem der Distanz in der Onlinelehre hin zu einem real demonstrierbaren, interaktiven System. 
              Eine Dokumentation der technologischen und didaktischen Evolution.
            </p>
            
            <div>
              <button 
                onClick={() => setIsGalleryOpen(true)}
                className="inline-flex items-center gap-3 bg-gray-900 hover:bg-hm-red text-white px-6 py-3 rounded-full font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ImageIcon className="w-5 h-5" />
                Die Entwicklung visuell nachvollziehen
              </button>
            </div>
          </div>

          {/* Right: Scrolling Content */}
          <div className="relative h-[60vh] flex items-center">
            {timeline.map((item, index) => {
              // Calculate opacity and y based on scroll progress for each item
              const step = 1 / timeline.length;
              const start = index * step;
              const end = start + step;
              
              const opacity = useTransform(scrollYProgress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, 0]);
              const y = useTransform(scrollYProgress, [start - 0.05, start, end - 0.05, end], [100, 0, 0, -100]);
              const scale = useTransform(scrollYProgress, [start - 0.05, start, end - 0.05, end], [0.8, 1, 1, 0.8]);

              return (
                <motion.div
                  key={index}
                  style={{ opacity, y, scale }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className={`text-[8vw] lg:text-[6vw] font-black mb-4 tracking-tighter leading-none transition-colors ${item.highlight ? 'text-hm-red' : 'text-gray-200'}`}>
                    {item.year}
                  </div>
                  <h4 className={`text-3xl font-bold mb-4 ${item.highlight ? 'text-gray-900' : 'text-hm-blue'}`}>
                    {item.title}
                  </h4>
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="text-white/70 font-mono text-sm tracking-widest uppercase">
                Entwicklungsdokumentation {currentSlide + 1} / {gallerySlides.length}
              </div>
              <button 
                onClick={() => setIsGalleryOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              {/* Image Area */}
              <div className="flex-1 relative flex items-center justify-center p-4 md:p-12">
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-md transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="relative w-full h-full flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={gallerySlides[currentSlide].image}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl ${gallerySlides[currentSlide].rotate === 'left' ? '-rotate-90 scale-75' : gallerySlides[currentSlide].rotate === 'right' ? 'rotate-90 scale-75' : ''}`}
                      alt={gallerySlides[currentSlide].title}
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>

                <button 
                  onClick={nextSlide}
                  className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-md transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption Area */}
              <div className="w-full md:w-96 bg-black/40 border-t md:border-t-0 md:border-l border-white/10 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <motion.div
                  key={`caption-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="text-hm-red font-bold text-xs tracking-widest uppercase mb-4">
                    {gallerySlides[currentSlide].phase}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">
                    {gallerySlides[currentSlide].title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-light text-lg">
                    {gallerySlides[currentSlide].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
