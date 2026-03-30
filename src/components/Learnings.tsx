import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Wrench, Cpu } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

export default function Learnings() {
  const challenges = [
    {
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      title: "Technische Limitierungen",
      desc: "Latenzzeiten bei der Echtzeit-Generierung von Avataren erforderten Optimierungen in der Architektur und den Wechsel zu performanteren APIs."
    },
    {
      icon: <Wrench className="w-6 h-6 text-hm-blue" />,
      title: "Integrationsprobleme",
      desc: "Die nahtlose Verbindung von lokaler Hardware (Holobox) mit cloudbasierten KI-Diensten stellte hohe Anforderungen an die Netzwerkinfrastruktur."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-hm-red" />,
      title: "Hardware Herausforderungen",
      desc: "Die Beschaffung und Konfiguration leistungsstarker lokaler GPUs für das RAG-System war zeit- und kostenintensiv."
    }
  ];

  return (
    <section id="learnings" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Erfahrungen</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Herausforderungen und Learnings</h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Innovation bedeutet auch, mit Rückschlägen umzugehen. Eine offene Fehlerkultur und agile 
            Anpassungen waren entscheidend für den Projekterfolg.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <SpotlightCard
              key={index}
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
