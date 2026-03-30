import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('hm_cookie_consent');
    if (!consent) {
      // Show banner slightly delayed for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('hm_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('hm_cookie_consent', 'essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[99999] p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-200 p-6 sm:p-8 pointer-events-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-hm-red/10 flex items-center justify-center text-hm-red">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Privatsphäre & Cookies</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Wir nutzen Cookies und ähnliche Technologien (z.B. Local Storage), um die Funktionalität unserer Website zu gewährleisten (essenzielle Technologien) und um unseren interaktiven KI-Chatbot bereitzustellen. Durch Klicken auf "Alle akzeptieren" stimmen Sie der Nutzung aller Technologien zu, einschließlich der Datenverarbeitung durch Drittanbieter (Google Gemini API für den Chatbot). Unter "Nur essenzielle" können Sie nicht-notwendige Dienste ablehnen. Weitere rechtliche Details finden Sie in unserer Datenschutzerklärung.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleAcceptEssential}
                className="px-6 py-3.5 rounded-xl font-medium text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                Nur essenzielle
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-hm-red hover:bg-red-700 transition-colors whitespace-nowrap shadow-sm"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
