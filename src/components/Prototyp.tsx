import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Prototyp() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sections = [
    {
      heading: "Erster Versuch: Eigenbau-Rahmen im Studio",
      desc: "Im Greenscreen-Studio wurde ein Aluminiumrahmen mit Glasscheibe gebaut, um darauf von innen zu schreiben und durch die Scheibe hindurch zu filmen. Der Rahmen erwies sich jedoch als zu schmal — das vollständige Bild konnte nicht eingefangen werden.",
      images: [
        {
          url: "https://holoboard-assets.netlify.app/images/103-confluence_media-processed-f8697a99-ce94-4f1b-b1d2-1b1ae2f28c11.jpeg",
          title: "Erster Versuch: Glasrahmen im Studio",
          desc: "Der selbst gebaute Rahmen mit Glasscheibe vor dem Greenscreen — zu schmal für das Ganzkörperformat."
        },
        {
          url: "https://holoboard-assets.netlify.app/images/004-imported_downloads-img-4850.jpg",
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
          url: "https://holoboard-assets.netlify.app/images/014-imported_downloads-img-5776.jpg",
          title: "Aufnahme-Setup an der Hochschulfassade",
          desc: "Kamera, Beleuchtung und Scheibe — das improvisierte Aufnahmeszenario vor der Glasfront der Hochschule."
        },
        {
          url: "https://holoboard-assets.netlify.app/images/015-imported_downloads-img-5777.jpg",
          title: "Kamera-Perspektive durch die Scheibe",
          desc: "Detailansicht des Kamera-Setups: Von außen durch die Glasscheibe hindurch gefilmt."
        }
      ]
    },
    {
      heading: "Interaktive Steuerung mit Processing",
      desc: "Das gesamte interaktive Szenario — Buttons, Layer, Video-Steuerung — wurde in Processing (Java) programmiert. Die Entwicklung erforderte aufwendige Anpassungen, da alle interaktiven Elemente spiegelverkehrt dargestellt und korrekt ausgerichtet werden mussten.",
      images: [
        {
          url: "https://holoboard-assets.netlify.app/images/processing-screenshot-code.png",
          title: "Processing-Code für die Holoboard-Steuerung",
          desc: "Java-Code in Processing: Programmierung der interaktiven Layer und Video-Steuerung."
        },
        {
          url: "https://holoboard-assets.netlify.app/images/processing-screenshot-layers.png",
          title: "Interaktive Layer mit spiegelverkehrten Elementen",
          desc: "Erster Versuch der interaktiven Oberfläche — Buttons und Beschriftungen mussten spiegelverkehrt korrigiert werden."
        }
      ]
    },
    {
      heading: "Fertiges System",
      desc: "Das Ergebnis der iterativen Entwicklung: ein foliertes Holoboard mit HM-Branding, professionellem Studio-Setup und funktionierender IT-Infrastruktur.",
      images: [
        {
          url: "https://holoboard-assets.netlify.app/images/082-confluence_media-bildschirmfoto-2025-07-29-um-16.05.50.png",
          title: "Holoboard mit HM-Branding",
          desc: "Das folierte Holoboard mit einheitlichem Branding der Hochschule München."
        },
        {
          url: "https://holoboard-assets.netlify.app/images/010-imported_downloads-img-4998.jpg",
          title: "Studio-Setup",
          desc: "Professionelles Greenscreen-Studio mit Beleuchtung für die Avatar-Aufzeichnung."
        },
        {
          url: "https://holoboard-assets.netlify.app/images/016-imported_downloads-img-5818.jpg",
          title: "Funktionierender Prototyp",
          desc: "Der Ganzkörper-Avatar auf dem Holobox-Display im laufenden Betrieb."
        },
        {
          url: "https://holoboard-assets.netlify.app/images/IT_Hardware_Holoboard.JPG",
          title: "IT-Infrastruktur",
          desc: "Die technische Hardware-Basis für Wiedergabe und Steuerung des Holoboards."
        }
      ]
    }
  ];

  return (
    <section id="prototyp" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Phase 5 – Ergebnisse</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Umsetzung und Prototyp</h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Von der Konzeption zur Realität: Einblicke in den Aufbau des Studios, die Softwareentwicklung 
            und die finale Integration der Hardware-Komponenten.
          </p>
        </motion.div>

        <div className="space-y-20">
          {sections.map((section, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{section.heading}</h4>
              <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-3xl">{section.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.images.map((img, index) => (
                  <div
                    key={index}
                    className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
                    onClick={() => setSelectedImage(img.url)}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h4 className="text-white font-semibold text-lg">{img.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">{img.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
