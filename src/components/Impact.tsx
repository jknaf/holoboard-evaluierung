import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Impact() {
  const quotes = [
    {
      text: "Durch die Arbeit am Holoboard-Projekt konnte ich mich intensiv mit aktuellen KI-Technologien auseinandersetzen. Das hat mir direkt im Anschluss an mein Studium ein Jobangebot als AI Engineer eingebracht.",
      author: "Ehemaliger Bachelorand",
      role: "Jetzt AI Engineer"
    },
    {
      text: "Die Kombination aus Hardware-Integration und moderner Webentwicklung war extrem lehrreich. Es ist motivierend, an einem Projekt zu arbeiten, das die Lehre der Zukunft aktiv mitgestaltet.",
      author: "Werkstudentin",
      role: "Frontend Entwicklung"
    },
    {
      text: "Die praktischen Erfahrungen mit RAG-Systemen und lokalen LLMs waren genau das, was Unternehmen aktuell suchen. Das Projekt war ein perfektes Sprungbrett für meine Karriere.",
      author: "Masterand",
      role: "Data Scientist"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-hm-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-turquoise uppercase mb-3">Karriereeffekte</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Impact für Studierende</h3>
          <p className="text-lg text-blue-100 font-light leading-relaxed">
            Die Mitarbeit am Projekt bietet Studierenden nicht nur akademische Credits, sondern 
            vermittelt hochrelevante Zukunftskompetenzen, die auf dem Arbeitsmarkt stark nachgefragt sind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20"
            >
              <Quote className="w-8 h-8 text-hm-turquoise mb-6 opacity-50" />
              <p className="text-lg leading-relaxed mb-8 font-light italic">"{quote.text}"</p>
              <div>
                <p className="font-semibold text-white">{quote.author}</p>
                <p className="text-sm text-hm-turquoise">{quote.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
