import React, { createContext, useContext, useEffect, useState } from 'react';

// ponytail: zwei Sprachen, eigener Kontext statt i18n-Bibliothek. Texte stehen je Komponente als { de, en }.
export type Lang = 'de' | 'en';

const META = {
  de: {
    title: 'Holoboard – Innovationsprofessur Lehre',
    description: 'Digitale Dokumentation der Innovationsprofessur Lehre von Prof. Dr. Joachim Knaf an der Hochschule München.',
  },
  en: {
    title: 'Holoboard – Innovation Professorship for Teaching',
    description: 'Digital documentation of the Innovation Professorship for Teaching held by Prof. Dr. Joachim Knaf at Munich University of Applied Sciences.',
  },
};

// Reihenfolge: ?lang= in der URL, dann gespeicherte Wahl, dann Browsersprache.
function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'de' || fromUrl === 'en') return fromUrl;
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'de' || saved === 'en') return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith('de') ? 'de' : 'en';
}

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: 'de',
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', META[lang].description);
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

// Wählt aus { de, en } die aktuelle Sprache.
export function useT<T>(texts: { de: T; en: T }): T {
  return texts[useLang().lang];
}
