import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { useT } from '../i18n';

const IMAGE_URLS = [["https://holoboard-assets.netlify.app/images/103-confluence_media-processed-f8697a99-ce94-4f1b-b1d2-1b1ae2f28c11.jpeg", "https://holoboard-assets.netlify.app/images/004-imported_downloads-img-4850.jpg"], ["https://holoboard-assets.netlify.app/images/014-imported_downloads-img-5776.jpg", "https://holoboard-assets.netlify.app/images/015-imported_downloads-img-5777.jpg"], ["https://holoboard-assets.netlify.app/images/processing-screenshot-code.png", "https://holoboard-assets.netlify.app/images/processing-screenshot-layers.png"], ["https://holoboard-assets.netlify.app/images/016-imported_downloads-img-5818.jpg", "https://holoboard-assets.netlify.app/images/IT_Hardware_Holoboard.JPG"]];

const T = {
  de: {
    eyebrow: "Phase 5: Ergebnisse",
    title: "Umsetzung und Prototyp",
    intro: "Von der Konzeption zur Realität: Einblicke in den Aufbau des Studios, die Softwareentwicklung und die finale Integration der Hardware-Komponenten.",
    enlarge: "Bild vergrößern",
    close: "Vergrößerte Ansicht schließen",
    sections: [
    {
      heading: "Erster Versuch: Eigenbau-Rahmen im Studio",
      desc: "Im Greenscreen-Studio wurde ein Aluminiumrahmen mit Glasscheibe gebaut, um darauf von innen zu schreiben und durch die Scheibe hindurch zu filmen. Der Rahmen erwies sich jedoch als zu schmal, das vollständige Bild konnte nicht eingefangen werden.",
      images: [
        {
          title: "Erster Versuch: Glasrahmen im Studio",
          desc: "Der selbst gebaute Rahmen mit Glasscheibe vor dem Greenscreen, zu schmal für das Ganzkörperformat."
        },
        {
          title: "Material für den Rahmenbau",
          desc: "Aluminiumprofile und Bauteile für die Konstruktion des ersten Schreibrahmens."
        }
      ]
    },
    {
      heading: "Zweiter Versuch: Improvisation an der Hochschulfassade",
      desc: "Nachdem der Rahmen zu klein war, wurde kurzerhand eine Glasscheibe der Hochschule als Schreibfläche genutzt. Das improvisierte Setup vor der Fassade ermöglichte großformatige Aufnahmen: Der Protagonist stand hinter der Scheibe, schrieb von innen darauf, und die Kamera filmte von außen durch das Glas.",
      images: [
        {
          title: "Aufnahme-Setup an der Hochschulfassade",
          desc: "Kamera, Beleuchtung und Scheibe: das improvisierte Aufnahmeszenario vor der Glasfront der Hochschule."
        },
        {
          title: "Kamera-Perspektive durch die Scheibe",
          desc: "Detailansicht des Kamera-Setups: Von außen durch die Glasscheibe hindurch gefilmt."
        }
      ]
    },
    {
      heading: "Interaktive Steuerung mit Processing",
      desc: "Das gesamte interaktive Szenario (Buttons, Layer, Video-Steuerung) wurde in Processing (Java) programmiert. Die Entwicklung erforderte aufwendige Anpassungen, da alle interaktiven Elemente seitenverkehrt dargestellt und korrekt ausgerichtet werden mussten.",
      images: [
        {
          title: "Processing-Code für die Holoboard-Steuerung",
          desc: "Java-Code in Processing: Programmierung der interaktiven Layer und Video-Steuerung."
        },
        {
          title: "Interaktive Layer mit seitenverkehrten Elementen",
          desc: "Erster Versuch der interaktiven Oberfläche: Buttons und Beschriftungen mussten seitenverkehrt korrigiert werden."
        }
      ]
    },
    {
      heading: "Fertiges System",
      desc: "Das Ergebnis der iterativen Entwicklung: ein foliertes Holoboard mit HM-Branding, professionellem Studio-Setup und funktionierender IT-Infrastruktur.",
      images: [
        {
          title: "Funktionierender Prototyp",
          desc: "Der Ganzkörper-Avatar auf dem Holobox-Display im laufenden Betrieb."
        },
        {
          title: "IT-Infrastruktur",
          desc: "Die technische Hardware-Basis für Wiedergabe und Steuerung des Holoboards."
        }
      ]
    }
  ],
  },
  en: {
    eyebrow: "Phase 5: Results",
    title: "Implementation and Prototype",
    intro: "From concept to reality: a look at how the studio was built, how the software was developed and how the hardware components were finally brought together.",
    enlarge: "Enlarge image",
    close: "Close enlarged view",
    sections: [
      {
        heading: "First Attempt: A Custom-Built Frame in the Studio",
        desc: "An aluminium frame fitted with a glass pane was built in the green-screen studio, allowing the presenter to write on it from behind while being filmed through the glass. However, the frame turned out to be too narrow to capture the full picture.",
        images: [
          {
            title: "First Attempt: Glass Frame in the Studio",
            desc: "The custom-built frame with its glass pane in front of the green screen: too narrow for a full-body shot."
          },
          {
            title: "Materials for the Frame",
            desc: "Aluminium profiles and components used to construct the first writing frame."
          }
        ]
      },
      {
        heading: "Second Attempt: Improvising on the University Facade",
        desc: "With the frame too small, one of the university's own glass panes was promptly pressed into service as a writing surface. This improvised set-up in front of the facade made large-format shots possible: the presenter stood behind the glass and wrote on it from the inside, while the camera filmed through it from outside.",
        images: [
          {
            title: "Recording Set-Up at the University Facade",
            desc: "Camera, lighting and glass pane: the improvised shooting set-up in front of the university's glass frontage."
          },
          {
            title: "Camera View Through the Glass",
            desc: "Close-up of the camera set-up, filming from outside through the glass pane."
          }
        ]
      },
      {
        heading: "Interactive Control with Processing",
        desc: "The entire interactive scenario, including buttons, layers and video control, was programmed in Processing (Java). Development involved extensive adjustments, since every interactive element had to be mirrored and correctly aligned.",
        images: [
          {
            title: "Processing Code for the Holoboard Controls",
            desc: "Java code in Processing, used to program the interactive layers and video control."
          },
          {
            title: "Interactive Layers with Mirrored Elements",
            desc: "A first attempt at the interactive interface: buttons and labels had to be reversed to compensate for the mirror image."
          }
        ]
      },
      {
        heading: "The Finished System",
        desc: "The outcome of an iterative development process: a vinyl-wrapped Holoboard with HM branding, a professional studio set-up and a fully functioning IT infrastructure.",
        images: [
          {
            title: "Working Prototype",
            desc: "The full-body avatar on the Holobox display, up and running."
          },
          {
            title: "IT Infrastructure",
            desc: "The hardware backbone that runs and controls the Holoboard."
          }
        ]
      }
    ],
  },
};


const EASE = [0.16, 1, 0.3, 1] as const;

type Img = { title: string; desc: string; url: string };

export default function Prototyp() {
  const [selected, setSelected] = useState<Img | null>(null);
  const reduce = useReducedMotion();

  const t = useT(T);
  const sections = t.sections.map((sec, i) => ({
    ...sec,
    images: sec.images.map((img, j) => ({ ...img, url: IMAGE_URLS[i][j] })),
  }));

  // Esc schließt die Lightbox.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section
      id="prototyp"
      className="relative py-24 lg:py-32 bg-[#05070A] text-white bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:40px_40px]"
    >
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24">
        <SectionHeader index="02.3" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="dark" />

        <ol className="mt-16 lg:mt-24 flex flex-col gap-20 lg:gap-28">
          {sections.map((section, sIdx) => {
            const mirrored = sIdx % 2 === 1;
            return (
              <li key={sIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                <motion.div {...reveal()} className={`lg:col-span-5 ${mirrored ? 'lg:order-2' : ''}`}>
                  <span aria-hidden="true" className="block text-6xl lg:text-7xl font-black leading-none tracking-[-0.04em] text-hm-red tabular-nums mb-6">
                    {String(sIdx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-4">{section.heading}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{section.desc}</p>
                </motion.div>

                <div className={`lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 ${mirrored ? 'lg:order-1' : ''}`}>
                  {section.images.map((img, index) => (
                    <motion.figure
                      key={index}
                      {...reveal(0.1 + index * 0.1)}
                      className="m-0 rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md p-2"
                    >
                      <button
                        type="button"
                        onClick={() => setSelected(img)}
                        aria-label={`${t.enlarge}: ${img.title}`}
                        className="group relative block w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-black cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-hm-turquoise"
                      >
                        <img
                          src={img.url}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <span className="absolute top-3 right-3 w-9 h-9 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </button>
                      <figcaption className="px-3 pt-4 pb-3">
                        <p className="font-bold text-white tracking-tight">{img.title}</p>
                        <p className="text-sm text-gray-400 leading-relaxed mt-1">{img.desc}</p>
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center gap-4 p-4 sm:p-8"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              autoFocus
              aria-label={t.close}
              className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={reduce ? false : { scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={reduce ? undefined : { scale: 0.95 }}
              src={selected.url}
              alt={selected.title}
              className="max-w-full max-h-[80vh] object-contain rounded-[16px]"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
            <p className="text-sm text-gray-300 text-center max-w-2xl" onClick={(e) => e.stopPropagation()}>
              {selected.title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
