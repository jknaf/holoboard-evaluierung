import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MonitorPlay } from 'lucide-react';

export default function Demonstrator() {
  return (
    <section id="demonstrator" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hm-blue/10 text-hm-blue text-sm font-medium mb-6">
              <MonitorPlay className="w-4 h-4" />
              Live Demo
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Interaktiver Demonstrator</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-4">
              Das Erlebnis des Holoboards ist ein physisches Erlebnis im Raum.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-4">
              Um trotzdem einmal nachzuempfinden, wie sich die Live-Interaktion mit einem solchen Conversational AI Agent anfühlt, kann hier ein Test-Avatar von{' '}
              <a href="https://www.tavus.io/" target="_blank" rel="noopener noreferrer" className="text-hm-blue hover:underline">Tavus</a>{' '}
              ausprobiert werden. Tavus zählt aktuell zu den sichtbarsten Anbietern in diesem Bereich. Seit Februar 2026 setzt auch SAP Tavus im Customer Experience Center in Palo Alto ein, um Besuchern die Interaktion mit menschlich wirkenden AI Agents live zu zeigen.            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://www.tavus.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-hm-blue hover:underline"
              >
                Tavus
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="https://www.sap.com/germany/about/company/innovation/experience-centers.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-hm-blue hover:underline"
              >
                SAP Experience Centers
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="https://www.linkedin.com/posts/tavus-io_were-proud-to-be-part-of-saps-brand-new-activity-7431757041649614848-xhXA/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-hm-blue hover:underline"
              >
                Tavus x SAP
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <a
              href="https://www.tavus.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white relative group cursor-pointer"
            >
              {/* Simulated Browser Chrome */}
              <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 h-5 bg-white rounded text-[10px] text-gray-400 flex items-center px-2 font-mono truncate">
                  tavus.io
                </div>
              </div>

              <div className="relative h-[calc(100%-2rem)] bg-gray-900">
                <img
                  src="https://holoboard-assets.netlify.app/images/112-tavus-demo-thumbnail.png"
                  alt="Tavus Conversational AI Avatar — Test-Demo"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
            </a>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-hm-blue/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Simple Play icon component since it's not imported from lucide-react in this file
function Play(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}
