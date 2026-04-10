import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Prototyp() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
