import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';
import { useT } from '../i18n';

type Phase = 'early' | 'impl' | 'pres';

// Bilder und Phase je Folie; die Texte stehen in T.<lang>.slides (gleiche Reihenfolge).
const slideMeta: { phase: Phase; image: string; rotate?: 'left' | 'right' }[] = [
  // B. Früher Technologieansatz
  { phase: 'early', image: "https://holoboard-assets.netlify.app/images/Holoboard.png" },
  { phase: 'early', image: "https://holoboard-assets.netlify.app/images/IMG_3677.JPG" },
  { phase: 'early', image: "https://holoboard-assets.netlify.app/images/IMG_3678.JPG" },
  { phase: 'early', image: "https://holoboard-assets.netlify.app/images/IMG_3680.JPG" },
  { phase: 'early', image: "https://holoboard-assets.netlify.app/images/IMG_3682.JPG" },
  { phase: 'early', image: "https://holoboard-assets.netlify.app/images/Kamera_4D.png" },

  // A. Holoboard-Implementierung (Reihenfolge: 11, 4, 5, 6, 7, 8, 9, 10, 12, 1)
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/Bildschirmfoto%202025-01-28%20um%2018.22.56.png" },
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/IT_Hardware_Holoboard.JPG" },
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/Holobox.jpeg" },
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/IMG_3815.JPG" },
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/IMG_3816.JPG" },
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/IMG_3814.JPG" },
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/Bildschirmfoto%202024-11-24%20um%2010.06.26.png" },
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/Bildschirmfoto%202025-01-28%20um%2010.17.43.png" },
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/image2.jpeg", rotate: 'left' },
  { phase: 'impl', image: "https://holoboard-assets.netlify.app/images/image1.jpeg" },

  // C. Präsentation und Anwendung
  { phase: 'pres', image: "https://holoboard-assets.netlify.app/images/Thumbnail%20Ansynchrone%20Lehre.png" },
  { phase: 'pres', image: "https://holoboard-assets.netlify.app/images/IMG_1F7C0858-5792-44C8-B12D-9F0E1199333C.JPEG" },
  { phase: 'pres', image: "https://holoboard-assets.netlify.app/images/20241115_114416.jpg" },
];

// Jahr und Kartenbild (Index in slideMeta) je Zeitstrahl-Eintrag; die Texte stehen in T.<lang>.timeline.
const timelineMeta: { year: string; slide: number }[] = [
  { year: "2022", slide: 1 },       // erster Streaming-Prototyp
  { year: "2022", slide: 0 },       // Zeichnung des ursprünglichen Ansatzes
  { year: "2023", slide: 5 },       // Kamera 4D
  { year: "2023–2024", slide: 8 },  // erster Versuch beim Holobox-Anbieter
  { year: "2024", slide: 7 },       // IT-Hardware des Holoboards
  { year: "Q3 2025", slide: 16 },   // Holobox mit Interaktion
  { year: "Q4 2025", slide: 17 },   // Präsentation zum Hochschulentwicklungsplan
];

const T = {
  de: {
    eyebrow: 'Phase 2 – Entwicklung',
    titleA: 'Forschungs- &',
    titleB: 'Entwicklungsreise',
    intro: 'Vom Problem der Distanz in der Onlinelehre hin zu einem real demonstrierbaren, interaktiven System. Eine Dokumentation der technologischen und didaktischen Evolution.',
    galleryBtn: (n: number) => `Entwicklungsdokumentation: ${n} Bilder`,
    galleryHeader: 'Entwicklungsdokumentation',
    close: 'Schließen',
    back: 'Zurück',
    forward: 'Weiter',
    stops: ['Ausgangspunkt', 'Vision', 'Exploration', 'Wandel', 'Aufbau', 'Prototyp', 'Präsentation'],
    prev: 'Vorheriges Bild',
    next: 'Nächstes Bild',
    phases: {
      early: 'Früher Technologieansatz',
      impl: 'Holoboard-Implementierung',
      pres: 'Präsentation und Anwendung',
    },
    slides: [
      { title: "Technische Zeichnung des ursprünglichen technologischen Ansatzes", description: "Technische Zeichnung des ursprünglichen technologischen Ansatzes. Gezeigt wird die erste Systemlogik auf Basis von Streaming- und Übertragungstechnologie." },
      { title: "Teil des Prototypenaufbaus für den ersten Streaming-Ansatz", description: "Teil des Prototypenaufbaus für den ersten Streaming-Ansatz. Das Bild zeigt eine experimentelle technische Konfiguration." },
      { title: "Früher Proof of Concept für den Streaming-Ansatz", description: "Früher Proof of Concept für den Streaming-Ansatz. Die Aufnahme dokumentiert die erste praktische Validierung der ursprünglichen Technologieidee." },
      { title: "Bildmischer im technischen Setup", description: "Bildmischer im technischen Setup. Das Bild zeigt eine zentrale Komponente der Signalverarbeitung und Mediensteuerung." },
      { title: "Weiteres Element der Streaming-Technologie des ersten Ansatzes", description: "Weiteres Element der Streaming-Technologie des ersten Ansatzes. Die Aufnahme ergänzt die technische Dokumentation der frühen Pipeline." },
      { title: "Zusätzliche technische Komponente des ursprünglichen Streaming-Ansatzes", description: "Zusätzliche technische Komponente des ursprünglichen Streaming-Ansatzes. Das Bild gehört zur Dokumentation des ersten Prototypenaufbaus." },
      { title: "Drei Teilbilder als Grundlage des Ganzkörper-Avatars", description: "Drei Teilbilder als Grundlage des Ganzkörper-Avatars. Die Darstellung zeigt, aus welchen visuellen Segmenten der finale Avatar zusammengesetzt wurde." },
      { title: "Gesamte IT-Hardware des Holoboards", description: "Gesamte IT-Hardware des Holoboards. Das Bild dokumentiert die technische Infrastruktur, die für die Wiedergabe interaktiver Animationen und Inhalte benötigt wird." },
      { title: "Allerster Versuch beim Anbieter der Holobox", description: "Allerster Versuch beim Anbieter der Holobox. Das Bild dokumentiert eine sehr frühe Phase der praktischen Annäherung an das spätere System." },
      { title: "Weiterer Schritt beim Aufbau der Bildhintergründe", description: "Weiterer Schritt beim Aufbau der Bildhintergründe. Das Bild dokumentiert die Gestaltung und Anpassung der Szenenflächen." },
      { title: "Weitere Hintergrundkonstruktion für das Holoboard", description: "Weitere Hintergrundkonstruktion für das Holoboard. Die Aufnahme zeigt einen ergänzenden Produktions- oder Gestaltungszustand." },
      { title: "Aufbau der Hintergründe mit Prof. Dr. Joachim Knaf", description: "Aufbau der Hintergründe mit Prof. Dr. Joachim Knaf. Die Aufnahme zeigt, wie die visuelle Szene für die spätere Darstellung konstruiert wurde." },
      { title: "Darstellung der Ganzkörper-Avatare in einer um 90 Grad gedrehten Ansicht", description: "Darstellung der Ganzkörper-Avatare in einer um 90 Grad gedrehten Ansicht. Das Bild zeigt einen technischen Zwischenschritt zur korrekten räumlichen Ausrichtung." },
      { title: "Postproduktion des Ganzkörper-Avatars durch Maskierung", description: "Postproduktion des Ganzkörper-Avatars durch Maskierung. Die Aufnahme dokumentiert einen Bearbeitungsschritt bei der Freistellung und Zusammenführung." },
      { title: "Weiterentwickelter Zwischenstand des Systems", description: "Weiterentwickelter Zwischenstand des Systems. Das Bild zeigt eine spätere Phase nach den ersten Grundversuchen." },
      { title: "Studio-Setup zur Produktion der Avatare", description: "Studio-Setup zur Produktion der Avatare. Das Bild dokumentiert die technische Umgebung für Aufnahme und Erstellung." },
      { title: "Prof. Dr. Joachim Knaf in der Holobox mit Interaktion auf der Scheibe", description: "Prof. Dr. Joachim Knaf in der Holobox mit Interaktion auf der Scheibe. Gezeigt wird ein Tic-Tac-Toe-Szenario, bei dem von außen der Start-Button betätigt wird und von innen direkt auf die Fläche geschrieben wird." },
      { title: "Web-App für die Präsentation des Holoboards im Kontext des Hochschulentwicklungsplans", description: "Web-App für die Präsentation des Holoboards im Kontext des Hochschulentwicklungsplans. Besucherinnen und Besucher konnten über ein interaktives Auswahlrad Fragen auswählen, die anschließend von Prof. Dr. Klaus Kreulich als KI-Avatar beantwortet wurden." },
      { title: "Prof. Dr. Joachim Knaf am Stand auf der TURN-Konferenz", description: "Prof. Dr. Joachim Knaf am Stand auf der TURN-Konferenz. Die Aufnahme zeigt das Projekt im Messe- und Präsentationskontext." },
    ],
    timeline: [
      { title: "Ausgangspunkt in der Onlinelehre", description: "Die Erfahrungen aus der Onlinelehre machten sichtbar, dass videobasierte Formate zwar funktionieren, aber Präsenz, Aufmerksamkeit und direkte Interaktion nur unzureichend ersetzen. Daraus entstand die Suche nach einem neuen digitalen Lehrformat." },
      { title: "Erste Vision volumetrischer Lehre", description: "Im Projektantrag stand zunächst die Idee im Vordergrund, Lehrveranstaltungen als räumlich erfahrbare, volumetrische Lerninhalte weiterzuentwickeln. Ziel war eine neue Form digitaler Lehrpräsenz jenseits klassischer Videokonferenzen." },
      { title: "Technische Exploration mit LiDAR und 360-Video", description: "Die Exploration konzentrierte sich auf LiDAR, Point Clouds, Video-Stitching und AR-nahe Wiedergabe. Dabei wurde deutlich, wie hoch der technische Aufwand für Aufnahme, Synchronisation, Verarbeitung und Nutzung tatsächlich ist." },
      { title: "Technologiewandel zum Holoboard", description: "Zwischen 2023 und 2024 vollzog sich der eigentliche Richtungswechsel. Statt einer aufwendigen volumetrischen Produktionspipeline rückte ein robusteres System in den Mittelpunkt, das mit realer Lehrpraxis, vorhandener Infrastruktur und didaktischen Anforderungen besser vereinbar ist." },
      { title: "Aufbau des Holoboards und KI-Systeme", description: "2024 wurde das Holoboard als konkrete Lösung aufgebaut und weiterentwickelt. Parallel dazu entstanden die technischen Grundlagen für lokale KI-Funktionen, Retrieval-Augmented Generation, mediale Steuerung und die Produktion der projektbezogenen Inhalte und Videos." },
      { title: "Fertigstellung des Prototyps", description: "Im dritten Quartal 2025 wurde der Holoboard-Prototyp in einer funktionsfähigen Form abgeschlossen. Damit lagen nicht nur Konzept und Architektur vor, sondern ein real demonstrierbares System." },
      { title: "Präsentation des fertigen Prototyps", description: "Im vierten Quartal 2025 wurde der fertige Prototyp präsentiert. Damit wurde aus einer frühen Vision ein sichtbar erprobtes Lehrsystem mit technischer, didaktischer und strategischer Relevanz." },
    ],
  },
  en: {
    eyebrow: 'Phase 2: Development',
    titleA: 'Research &',
    titleB: 'Development Journey',
    intro: 'From the problem of distance in online teaching to an interactive system that can be demonstrated in practice. A record of the technological and pedagogical evolution.',
    galleryBtn: (n: number) => `Development archive: ${n} images`,
    galleryHeader: 'Development archive',
    close: 'Close',
    back: 'Previous',
    forward: 'Next',
    stops: ['Starting point', 'Vision', 'Exploration', 'Shift', 'Build', 'Prototype', 'Presentation'],
    prev: 'Previous image',
    next: 'Next image',
    phases: {
      early: 'Early Technology Concept',
      impl: 'Holoboard Implementation',
      pres: 'Presentation and Use',
    },
    slides: [
      { title: "Technical drawing of the original technology concept", description: "Technical drawing of the original technology concept. It shows the initial system logic, based on streaming and transmission technology." },
      { title: "Part of the prototype set-up for the first streaming approach", description: "Part of the prototype set-up for the first streaming approach. The image shows an experimental technical configuration." },
      { title: "Early proof of concept for the streaming approach", description: "Early proof of concept for the streaming approach. This photograph documents the first hands-on validation of the original technology concept." },
      { title: "Vision mixer in the technical set-up", description: "Vision mixer in the technical set-up. The image shows a key component for signal processing and media control." },
      { title: "Another element of the streaming technology used in the first approach", description: "Another element of the streaming technology used in the first approach. This photograph adds to the technical record of the early pipeline." },
      { title: "Additional technical component of the original streaming approach", description: "Additional technical component of the original streaming approach. The image is part of the documentation of the first prototype set-up." },
      { title: "Three partial images forming the basis of the full-body avatar", description: "Three partial images forming the basis of the full-body avatar. The illustration shows the visual segments from which the final avatar was assembled." },
      { title: "The complete IT hardware of the Holoboard", description: "The complete IT hardware of the Holoboard. The image documents the technical infrastructure needed to play back interactive animations and content." },
      { title: "The very first trial at the Holobox supplier", description: "The very first trial at the Holobox supplier. The image documents a very early stage of hands-on exploration of what would later become the system." },
      { title: "Next step in building the image backgrounds", description: "Next step in building the image backgrounds. The image documents the design and adjustment of the scene backdrops." },
      { title: "Further background construction for the Holoboard", description: "Further background construction for the Holoboard. This photograph shows an additional stage of production or design." },
      { title: "Building the backgrounds with Prof. Dr. Joachim Knaf", description: "Building the backgrounds with Prof. Dr. Joachim Knaf. This photograph shows how the visual scene was constructed for later display." },
      { title: "Full-body avatars shown rotated by 90 degrees", description: "Full-body avatars shown rotated by 90 degrees. The image shows an intermediate technical step towards correct spatial alignment." },
      { title: "Post-production of the full-body avatar using masking", description: "Post-production of the full-body avatar using masking. This photograph documents an editing step in isolating and compositing the figure." },
      { title: "A more advanced interim stage of the system", description: "A more advanced interim stage of the system. The image shows a later phase, after the first basic experiments." },
      { title: "Studio set-up for producing the avatars", description: "Studio set-up for producing the avatars. The image documents the technical environment for recording and production." },
      { title: "Prof. Dr. Joachim Knaf in the Holobox, interacting with the glass pane", description: "Prof. Dr. Joachim Knaf in the Holobox, interacting with the glass pane. The scene shows a game of noughts and crosses: the start button is pressed from outside, while moves are written directly on the surface from inside." },
      { title: "Web app presenting the Holoboard in connection with the University Development Plan", description: "Web app presenting the Holoboard in connection with the University Development Plan. Visitors used an interactive selection wheel to pick questions, which were then answered by an AI avatar of Prof. Dr. Klaus Kreulich." },
      { title: "Prof. Dr. Joachim Knaf on the stand at the TURN conference", description: "Prof. Dr. Joachim Knaf on the stand at the TURN conference. The photograph shows the project in an exhibition and presentation setting." },
    ],
    timeline: [
      { title: "Starting Point: Online Teaching", description: "Experience with online teaching showed that while video-based formats work, they fall short of replacing presence, attention and direct interaction. This prompted the search for a new digital teaching format." },
      { title: "An Initial Vision of Volumetric Teaching", description: "The project proposal initially focused on turning lectures into volumetric learning content that could be experienced in three dimensions. The aim was a new form of digital teaching presence that went beyond conventional video conferencing." },
      { title: "Technical Exploration with LiDAR and 360° Video", description: "The exploration focused on LiDAR, point clouds, video stitching and AR-style playback. It showed just how demanding recording, synchronisation, processing and actual use are in technical terms." },
      { title: "Technological Shift to the Holoboard", description: "The real change of direction came between 2023 and 2024. Instead of an elaborate volumetric production pipeline, the focus moved to a more robust system that fits better with real teaching practice, existing infrastructure and pedagogical requirements." },
      { title: "Building the Holoboard and AI Systems", description: "In 2024 the Holoboard was built and refined as a concrete solution. At the same time, the technical groundwork was laid for local AI functions, retrieval-augmented generation, media control and the production of the project’s content and videos." },
      { title: "Prototype Completed", description: "In the third quarter of 2025 the Holoboard prototype was completed as a fully working system. The project now had not just a concept and an architecture but a real system that could be demonstrated." },
      { title: "Finished Prototype Presented", description: "The finished prototype was presented in the fourth quarter of 2025. What began as an early vision had become a teaching system put to the test in public, with technical, pedagogical and strategic relevance." },
    ],
  },
};

export default function Exploration() {
  const t = useT(T);
  const gallerySlides = slideMeta.map((m, i) => ({ ...m, phase: t.phases[m.phase], ...t.slides[i] }));
  const timeline = timelineMeta.map((m, i) => ({ ...m, ...t.timeline[i] }));
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === gallerySlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? gallerySlides.length - 1 : prev - 1));
  };

  const openGallery = (idx: number) => {
    setCurrentSlide(idx);
    setIsGalleryOpen(true);
  };

  // Karten-Elemente in der Reihenfolge der Zeitleiste (der Abstandhalter am Ende hat kein data-card).
  const cards = (): HTMLElement[] => Array.from(scrollerRef.current?.querySelectorAll<HTMLElement>('[data-card]') ?? []);

  // Aktiver Eintrag = Karte, deren linke Kante der Scrollposition am nächsten liegt.
  const onScroll = () => {
    const el = scrollerRef.current;
    const list = cards();
    if (!el || !list.length) return;
    const base = list[0].offsetLeft;
    let best = 0;
    list.forEach((c, i) => {
      if (Math.abs(c.offsetLeft - base - el.scrollLeft) < Math.abs(list[best].offsetLeft - base - el.scrollLeft)) best = i;
    });
    setActive(best);
  };

  const goTo = (i: number) => {
    const idx = Math.max(0, Math.min(timeline.length - 1, i));
    const el = scrollerRef.current;
    const list = cards();
    if (!el || !list[idx]) return;
    el.scrollTo({ left: list[idx].offsetLeft - list[0].offsetLeft, behavior: reduced ? 'auto' : 'smooth' });
    setActive(idx);
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

  // Linker Rand der Kartenreihe fluchtet mit dem max-w-7xl-Container, die Reihe selbst läuft bis zum Fensterrand.
  // scroll-pl muss gleich sein, damit die Karten an derselben Kante einrasten (Klassen ausgeschrieben für den Tailwind-Scanner).
  const edge = 'pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))]';
  const roundBtn = 'w-12 h-12 shrink-0 rounded-full border border-gray-300 bg-white text-gray-900 flex items-center justify-center transition-colors hover:border-hm-red hover:text-hm-red disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-gray-900';

  return (
    <MotionConfig reducedMotion="user">
    <section id="exploration" className="relative bg-[#F4F4F1] text-gray-900 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kopf: Eyebrow und Titel links, Galerie und Vor/Zurück rechts */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-hm-red uppercase mb-3">{t.eyebrow}</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
              {t.titleA} {t.titleB}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-gray-600 leading-relaxed">{t.intro}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openGallery(0)}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-hm-red text-white px-5 py-3 rounded-full text-sm font-bold tracking-wide transition-colors"
            >
              <ImageIcon className="w-4 h-4" />
              {t.galleryBtn(gallerySlides.length)}
            </button>
            <button type="button" aria-label={t.back} onClick={() => goTo(active - 1)} disabled={active === 0} className={roundBtn}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button type="button" aria-label={t.forward} onClick={() => goTo(active + 1)} disabled={active === timeline.length - 1} className={roundBtn}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Knotenleiste: sieben gleich breite Spalten, Linie von Mitte erster bis Mitte letzter Spalte */}
        <div className="mt-10 lg:mt-14 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto no-scrollbar">
          <div className="relative min-w-[560px]">
            <div aria-hidden className="absolute top-[8px] left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gray-300">
              <div
                className="h-full bg-hm-red transition-[width] duration-500 motion-reduce:transition-none"
                style={{ width: `${(active / (timeline.length - 1)) * 100}%` }}
              />
            </div>
            <ol className="relative grid grid-cols-7">
            {timeline.map((item, i) => (
              <li key={i} className="relative flex justify-center">
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={i === active ? 'step' : undefined}
                  className={`group flex flex-col items-center gap-3 ${i === active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  <span className="h-[18px] flex items-center">
                    <span
                      className={`block rounded-full border-2 transition-all motion-reduce:transition-none ${
                        i <= active ? 'border-hm-red' : 'border-gray-400 group-hover:border-hm-red'
                      } ${i === active ? 'w-[18px] h-[18px] bg-hm-red shadow-[0_0_0_6px_rgba(252,85,85,0.15)]' : `w-2.5 h-2.5 ${i < active ? 'bg-hm-red' : 'bg-white'}`}`}
                    />
                  </span>
                  <span className="text-[13px] font-extrabold whitespace-nowrap">{item.year}</span>
                  <span className="hidden md:block text-xs font-medium tracking-wide">{t.stops[i]}</span>
                </button>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </div>

      {/* Kartenreihe: scroll-snap, Scrollposition bestimmt den aktiven Knoten */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className={`relative mt-10 lg:mt-12 flex gap-6 lg:gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory ${edge}`}
      >
        {timeline.map((item, i) => (
          <article
            key={i}
            data-card
            className={`snap-start shrink-0 w-[85vw] sm:w-[420px] flex flex-col gap-3 transition-opacity duration-300 motion-reduce:transition-none ${i < active ? 'opacity-45' : ''}`}
          >
            <button
              type="button"
              onClick={() => openGallery(item.slide)}
              aria-label={`${t.galleryHeader}: ${gallerySlides[item.slide].title}`}
              className="h-48 lg:h-56 rounded-2xl overflow-hidden bg-gray-200 mb-2"
            >
              <img
                src={gallerySlides[item.slide].image}
                alt={gallerySlides[item.slide].title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </button>
            <span className="text-xs font-extrabold tracking-[0.18em] text-hm-red">{item.year}</span>
            <h3 className="text-xl lg:text-2xl font-extrabold leading-tight tracking-tight">{item.title}</h3>
            <p className="text-[15px] leading-relaxed text-gray-600">{item.description}</p>
          </article>
        ))}
        {/* ponytail: Abstandhalter, damit auch die letzte Karte an den linken Rand einrasten kann */}
        <div aria-hidden className="shrink-0 w-[calc(100%-85vw)] sm:w-[calc(100%-420px)]" />
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
                {t.galleryHeader} {currentSlide + 1} / {gallerySlides.length}
              </div>
              <button 
                onClick={() => setIsGalleryOpen(false)}
                aria-label={t.close}
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
                  aria-label={t.prev}
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
                  aria-label={t.next}
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
    </MotionConfig>
  );
}
