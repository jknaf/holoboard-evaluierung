import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Download as DownloadIcon, Menu, X } from 'lucide-react';

// Sections
import Hero from './components/Hero';
import Ausgangspunkt from './components/Ausgangspunkt';
import Exploration from './components/Exploration';
import TechnologischerWandel from './components/TechnologischerWandel';
import HoloboardKonzept from './components/HoloboardKonzept';
import Architektur from './components/Architektur';
import AvatarIntegration from './components/AvatarIntegration';
import Prototyp from './components/Prototyp';
import Demonstrator from './components/Demonstrator';
import Netzwerk from './components/Netzwerk';
import StudentischeProjekte from './components/StudentischeProjekte';
import Impact from './components/Impact';
import Wissenstransfer from './components/Wissenstransfer';
import Nutzen from './components/Nutzen';
import Learnings from './components/Learnings';
import Zukunftsperspektive from './components/Zukunftsperspektive';
import Evaluation from './components/Evaluation';
import Ausblick from './components/Ausblick';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import Download from './components/Download';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ChapterIntro from './components/ChapterIntro';
import { useT, useLang } from './i18n';

const CHAPTERS = [
  { id: 'projekt', items: ['ausgangspunkt', 'exploration', 'wandel', 'konzept'] },
  { id: 'technik', items: ['architektur', 'avatar', 'prototyp', 'demonstrator'] },
  { id: 'praxis', items: ['netzwerk', 'studentische-projekte', 'wissenstransfer', 'nutzen'] },
  { id: 'evaluation', items: ['evaluation', 'impact', 'learnings'] },
  { id: 'ausblick', items: ['ausblick', 'zukunftsperspektive', 'download', 'kontakt'] },
];

const T = {
  de: {
    labels: {
      projekt: 'Projekt', technik: 'Technik', praxis: 'Praxis', evaluation: 'Evaluation', ausblick: 'Ausblick',
      ausgangspunkt: 'Ausgangspunkt', exploration: 'Exploration', wandel: 'Wandel', konzept: 'Holoboard',
      architektur: 'Architektur', avatar: 'Avatar', prototyp: 'Prototyp', demonstrator: 'Demonstrator',
      netzwerk: 'Netzwerk', 'studentische-projekte': 'Studentische Projekte', wissenstransfer: 'Wissenstransfer', nutzen: 'Nutzen',
      impact: 'Impact', learnings: 'Learnings',
      zukunftsperspektive: 'Zukunftsperspektive', download: 'Download', kontakt: 'Kontakt',
    } as Record<string, string>,
    logoAlt: 'Hochschule München Logo',
    summaryPdf: 'Zusammenfassung PDF',
    menuToggle: 'Menü umschalten',
    langSwitch: 'Sprache wählen',
  },
  en: {
    labels: {
      projekt: 'Project', technik: 'Technology', praxis: 'Practice', evaluation: 'Evaluation', ausblick: 'Outlook',
      ausgangspunkt: 'Starting Point', exploration: 'Exploration', wandel: 'Tech Shift', konzept: 'Holoboard',
      architektur: 'Architecture', avatar: 'Avatar', prototyp: 'Prototype', demonstrator: 'Demonstrator',
      netzwerk: 'Network', 'studentische-projekte': 'Student Projects', wissenstransfer: 'Knowledge Transfer', nutzen: 'Benefits',
      impact: 'Impact', learnings: 'Lessons Learned',
      zukunftsperspektive: 'Looking Ahead', download: 'Download', kontakt: 'Contact',
    } as Record<string, string>,
    logoAlt: 'Munich University of Applied Sciences logo',
    summaryPdf: 'Summary PDF',
    menuToggle: 'Toggle menu',
    langSwitch: 'Choose language',
  },
};

export default function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState('projekt');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothCursorX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.5 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.5 });

  const t = useT(T);
  const { lang, setLang } = useLang();
  const chapters = CHAPTERS.map((chapter) => ({
    id: chapter.id,
    label: t.labels[chapter.id],
    items: chapter.items.map((id) => ({ id, label: t.labels[id] })),
  }));
  const activeIndex = Math.max(0, CHAPTERS.findIndex((chapter) => chapter.id === activeChapter));
  // Fortschrittsbalken je Kapitel: direkt am DOM gesetzt, damit nicht bei jedem Scroll-Frame die ganze Seite neu rendert
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mobileBarRef = useRef<HTMLSpanElement | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const root = document.documentElement;
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
      root.classList.add('custom-cursor');
    };
    // Maus verlässt das Fenster oder die Seite wird verlassen: normalen Zeiger zurückgeben
    const hideCustomCursor = () => root.classList.remove('custom-cursor');
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', hideCustomCursor);
    window.addEventListener('blur', hideCustomCursor);
    window.addEventListener('pagehide', hideCustomCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') ||
          target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', hideCustomCursor);
      window.removeEventListener('blur', hideCustomCursor);
      window.removeEventListener('pagehide', hideCustomCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      hideCustomCursor();
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const mark = window.scrollY + window.innerHeight * 0.3;
      const top = (el: Element | null) => (el ? el.getBoundingClientRect().top + window.scrollY : Infinity);
      const starts = CHAPTERS.map((chapter) => top(document.getElementById(`kapitel-${chapter.id}`)));
      const end = document.querySelector('main')?.getBoundingClientRect().bottom ?? 0;
      let active = 0;
      starts.forEach((start, i) => {
        const stop = starts[i + 1] ?? end + window.scrollY;
        const progress = Math.min(1, Math.max(0, (mark - start) / (stop - start)));
        if (progress > 0) active = i;
        const bar = barRefs.current[i];
        if (bar) bar.style.transform = `scaleX(${progress})`;
      });
      const activeStop = starts[active + 1] ?? end + window.scrollY;
      if (mobileBarRef.current) {
        mobileBarRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, (mark - starts[active]) / (activeStop - starts[active])))})`;
      }
      setActiveChapter(CHAPTERS[active].id);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-hm-white text-hm-black font-sans selection:bg-hm-red selection:text-white no-scrollbar">
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor-dot fixed top-0 left-0 w-4 h-4 bg-hm-red rounded-full pointer-events-none z-[100001] mix-blend-difference"
        style={{ x: smoothCursorX, y: smoothCursorY, scale: isHovering ? 3 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Navigation: eine Zeile, je Kapitel ein Fortschrittsbalken */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-xl border-b border-white/10 text-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-[4.5rem] gap-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-shrink-0 flex flex-col justify-center"
            >
              <img
                src="https://holoboard-assets.netlify.app/brand/061-logo_assets-hm-logo-rgb.png"
                alt={t.logoAlt}
                className="h-7 sm:h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-black text-[10px] tracking-widest uppercase text-white/60 mt-1">Holoboard</span>
            </a>

            <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-9">
              {chapters.map((chapter, i) => (
                <button
                  key={chapter.id}
                  type="button"
                  aria-current={activeChapter === chapter.id ? 'true' : undefined}
                  onClick={() => scrollToSection(`kapitel-${chapter.id}`)}
                  className="flex flex-col gap-2 min-w-[6.5rem] xl:min-w-[7.5rem] text-left group"
                >
                  <span
                    className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-colors ${
                      activeChapter === chapter.id ? 'text-white' : 'text-white/50 group-hover:text-white'
                    }`}
                  >
                    <span className="text-hm-red">0{i + 1}</span>
                    <span className="ml-2">{chapter.label}</span>
                  </span>
                  <span className="h-0.5 rounded-full bg-white/15 overflow-hidden">
                    <span
                      ref={(el) => {
                        barRefs.current[i] = el;
                      }}
                      className="block h-full bg-hm-red origin-left"
                      style={{ transform: 'scaleX(0)' }}
                    />
                  </span>
                </button>
              ))}
            </div>

            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
              <div role="group" aria-label={t.langSwitch} className="flex items-center rounded-full border border-white/20 p-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                {(['de', 'en'] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`rounded-full px-2 py-1 sm:px-2.5 transition-colors ${
                      lang === code ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('download');
                }}
                className="flex items-center gap-1.5 bg-hm-red text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 transition-colors whitespace-nowrap"
              >
                <DownloadIcon className="w-3 h-3" />
                <span className="hidden sm:block">{t.summaryPdf}</span>
                <span className="block sm:hidden">PDF</span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 text-white/80 hover:text-white rounded-full transition-colors"
                aria-label={t.menuToggle}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobil: Fortschritt im aktuellen Kapitel */}
        <span aria-hidden="true" className="lg:hidden absolute left-0 right-0 bottom-0 h-0.5 bg-white/10 overflow-hidden">
          <span ref={mobileBarRef} className="block h-full bg-hm-red origin-left" style={{ transform: 'scaleX(0)' }} />
        </span>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100dvh' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden sm:top-[4.5rem]"
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
            >
              <div className="min-h-full px-4 py-4 pb-8 space-y-4">
                {chapters.map((chapter, i) => (
                  <div key={chapter.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-2">
                    <a
                      href={`#kapitel-${chapter.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        setTimeout(() => scrollToSection(`kapitel-${chapter.id}`), 100);
                      }}
                      className={`block px-3 py-2 text-[11px] font-bold uppercase tracking-[0.22em] ${i === activeIndex ? 'text-white' : 'text-white/50'}`}
                    >
                      <span className="text-hm-red">0{i + 1}</span>
                      <span className="ml-2">{chapter.label}</span>
                    </a>
                    <div className="space-y-1">
                      {chapter.items.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMobileMenuOpen(false);
                            setTimeout(() => scrollToSection(item.id), 100);
                          }}
                          className="block px-3 py-3 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-hm-red hover:bg-white/5 rounded-xl transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Hero />
        <ChapterIntro index={1} id="projekt" title={chapters[0].label} items={chapters[0].items} onSelect={scrollToSection} />
        <Ausgangspunkt />
        <Exploration />
        <TechnologischerWandel />
        <HoloboardKonzept />
        <ChapterIntro index={2} id="technik" title={chapters[1].label} items={chapters[1].items} onSelect={scrollToSection} />
        <Architektur />
        <AvatarIntegration />
        <Prototyp />
        <Demonstrator />
        <ChapterIntro index={3} id="praxis" title={chapters[2].label} items={chapters[2].items} onSelect={scrollToSection} />
        <Netzwerk />
        <StudentischeProjekte />
        <Wissenstransfer />
        <Nutzen />
        <ChapterIntro index={4} id="evaluation" title={chapters[3].label} items={chapters[3].items} onSelect={scrollToSection} />
        <Evaluation />
        <Impact />
        <Learnings />
        <ChapterIntro index={5} id="ausblick" title={chapters[4].label} items={chapters[4].items} onSelect={scrollToSection} />
        <Ausblick />
        <Zukunftsperspektive />
        <Download />
        <Contact />
      </main>

      <AIAssistant />

      <Footer />
      <CookieConsent />
    </div>
  );
}
