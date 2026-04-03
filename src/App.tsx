import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
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

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState('projekt');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothCursorX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.5 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.5 });

  const chapters = [
    {
      id: 'projekt',
      label: 'Projekt',
      items: [
        { id: 'ausgangspunkt', label: 'Ausgangspunkt' },
        { id: 'exploration', label: 'Exploration' },
        { id: 'wandel', label: 'Wandel' },
        { id: 'konzept', label: 'Holoboard' },
      ],
    },
    {
      id: 'technik',
      label: 'Technik',
      items: [
        { id: 'architektur', label: 'Architektur' },
        { id: 'avatar', label: 'Avatar' },
        { id: 'prototyp', label: 'Prototyp' },
        { id: 'demonstrator', label: 'Demonstrator' },
      ],
    },
    {
      id: 'praxis',
      label: 'Praxis',
      items: [
        { id: 'netzwerk', label: 'Netzwerk' },
        { id: 'studentische-projekte', label: 'Studentische Projekte' },
        { id: 'wissenstransfer', label: 'Wissenstransfer' },
        { id: 'nutzen', label: 'Nutzen' },
      ],
    },
    {
      id: 'evaluation',
      label: 'Evaluation',
      items: [
        { id: 'evaluation', label: 'Evaluation' },
        { id: 'impact', label: 'Impact' },
        { id: 'learnings', label: 'Learnings' },
      ],
    },
    {
      id: 'ausblick',
      label: 'Ausblick',
      items: [
        { id: 'ausblick', label: 'Ausblick' },
        { id: 'zukunftsperspektive', label: 'Zukunftsperspektive' },
        { id: 'download', label: 'Download' },
        { id: 'kontakt', label: 'Kontakt' },
      ],
    },
  ];
  const activeChapterItems = chapters.find((chapter) => chapter.id === activeChapter)?.items ?? chapters[0].items;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };
    window.addEventListener('mousemove', updateMousePosition);

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
      window.removeEventListener('mouseover', handleMouseOver);
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
        className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-hm-red rounded-full pointer-events-none z-[100001] mix-blend-difference"
        style={{ x: smoothCursorX, y: smoothCursorY, scale: isHovering ? 3 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-hm-red z-[10000] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 gap-4">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex flex-col justify-center">
              <img 
                src="https://holoboard-assets.netlify.app/brand/061-logo_assets-hm-logo-rgb.png" 
                alt="Hochschule München Logo" 
                className="h-8 sm:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-black text-[10px] sm:text-xs tracking-widest uppercase text-gray-500 mt-1">Holoboard</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center items-center px-4">
              <div className="flex items-center gap-6 xl:gap-8 h-full">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => {
                      setActiveChapter(chapter.id);
                      scrollToSection(chapter.items[0].id);
                    }}
                    className={`relative px-1 py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.22em] transition-colors whitespace-nowrap ${
                      activeChapter === chapter.id
                        ? 'text-hm-red'
                        : 'text-gray-500 hover:text-hm-red'
                    }`}
                  >
                    {chapter.label}
                    <span
                      className={`absolute left-0 right-0 -bottom-2 h-0.5 rounded-full transition-opacity ${
                        activeChapter === chapter.id ? 'bg-hm-red opacity-100' : 'bg-transparent opacity-0'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-1.5 bg-hm-red text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
              >
                <DownloadIcon className="w-3 h-3" />
                <span className="hidden sm:block">Zusammenfassung PDF</span>
                <span className="block sm:hidden">PDF</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 text-gray-600 hover:text-hm-red hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Menü umschalten"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block border-t border-gray-100 bg-gray-50/80">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-5 py-3">
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">
                In diesem Kapitel
              </span>
              <div className="h-6 w-px bg-gray-200" />
              <div className="flex items-center gap-2 xl:gap-3 overflow-x-auto no-scrollbar">
                {activeChapterItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 hover:border-hm-red/30 hover:text-hm-red transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100dvh' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-gray-100 bg-white/95 backdrop-blur-xl lg:hidden sm:top-20"
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
            >
              <div className="min-h-full px-4 py-4 pb-8 space-y-4 shadow-inner">
                {chapters.map((chapter) => (
                  <div key={chapter.id} className="rounded-2xl border border-gray-100 bg-gray-50/60 p-2">
                    <button
                      type="button"
                      onClick={() => setActiveChapter(chapter.id)}
                      className="w-full px-3 py-2 text-left text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500"
                    >
                      {chapter.label}
                    </button>
                    <div className="space-y-1">
                      {chapter.items.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveChapter(chapter.id);
                            setIsMobileMenuOpen(false);
                            setTimeout(() => {
                              scrollToSection(item.id);
                            }, 100);
                          }}
                          className="block px-3 py-3 text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-hm-red hover:bg-white rounded-xl transition-colors"
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
        <Ausgangspunkt />
        <Exploration />
        <TechnologischerWandel />
        <HoloboardKonzept />
        <Architektur />
        <AvatarIntegration />
        <Prototyp />
        <Demonstrator />
        <Netzwerk />
        <StudentischeProjekte />
        <Impact />
        <Wissenstransfer />
        <Nutzen />
        <Learnings />
        <Evaluation />
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
