import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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

  const navItems = [
    { id: 'ausgangspunkt', label: 'Ausgangspunkt' },
    { id: 'exploration', label: 'Exploration' },
    { id: 'wandel', label: 'Wandel' },
    { id: 'konzept', label: 'Konzept' },
    { id: 'architektur', label: 'Architektur' },
    { id: 'prototyp', label: 'Prototyp' },
    { id: 'evaluation', label: 'Evaluation' },
    { id: 'ausblick', label: 'Ausblick' },
  ];

  return (
    <div className="min-h-screen bg-hm-white text-hm-black font-sans selection:bg-hm-red selection:text-white no-scrollbar">
      {/* Custom Cursor */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-hm-red rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 3 : 1,
        }}
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
              <div className="flex space-x-4 xl:space-x-8 h-full">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-hm-red transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
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

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-2 pb-4 space-y-1 shadow-inner">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="block px-4 py-3 text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-hm-red hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
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
