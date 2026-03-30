import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

export default function StudentischeProjekte() {
  const projects = [
    {
      title: "Entwicklung eines RAG-Systems für hochschulspezifische Lehrinhalte",
      student: "Max Mustermann",
      year: "2023",
      desc: "Konzeption und Implementierung einer Retrieval-Augmented Generation Pipeline zur Anbindung lokaler Skripte an das LLM."
    },
    {
      title: "Evaluation von Latenzzeiten in KI-gestützten Conversational Interfaces",
      student: "Anna Schmidt",
      year: "2023",
      desc: "Analyse der Antwortzeiten verschiedener API-Anbieter und deren Auswirkung auf die wahrgenommene Natürlichkeit des Dialogs."
    },
    {
      title: "Integration der Tavus Avatar API in eine React Webanwendung",
      student: "Lukas Weber",
      year: "2024",
      desc: "Entwicklung des Frontends für die Interaktion mit dem digitalen Avatar inklusive WebRTC-Streaming."
    }
  ];

  return (
    <section id="studentische-projekte" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Forschung & Lehre</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Studentische Projekte</h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Die Innovationsprofessur fördert aktiv die Einbindung von Studierenden in die aktuelle Forschung. 
            Zahlreiche Abschlussarbeiten entstanden im direkten Kontext des Holoboard-Projekts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SpotlightCard
              key={index}
              icon={<FileText className="w-6 h-6 text-hm-blue" />}
              title={project.title}
              description={project.desc}
              index={index}
            >
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="font-medium text-gray-900">{project.student}</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
