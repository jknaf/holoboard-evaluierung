import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: 'Karriereeffekte',
    title: 'Impact für Studierende',
    intro: 'Die studentischen Arbeiten führen nicht nur zu Prototypen und Konzepten, sondern auch zu konkreten beruflichen Anschlüssen in Unternehmen, KI-nahen Praxisfeldern und selbstständigen Tätigkeiten.',
    quotes: [
      {
        text: "Ich habe die Festanstellung hauptsächlich wegen meiner Workflow- und Automatisierungskenntnisse aus der Bachelorarbeit bekommen.",
        author: "Stimme eines Absolventen",
        role: "Direkter Berufseinstieg durch Projektkompetenzen"
      },
      {
        text: "Meine Bachelorarbeit hatte im Unternehmen so viel Wirkung, dass ich für eine Position auf Holding-Ebene weiterempfohlen wurde und dort eine Festanstellung im Bereich KI-Automatisierung bekommen habe.",
        author: "Rückmeldung aus einem Unternehmensprojekt",
        role: "Weiterempfehlung und Festanstellung im KI-Umfeld"
      },
      {
        text: "Die im Projekt erworbenen Kompetenzen in Veranstaltungstechnik und KI-Automatisierung haben wesentlich dazu beigetragen, dass ich mich in diesem Bereich selbstständig gemacht habe.",
        author: "Rückmeldung aus dem Projektkontext",
        role: "Selbstständigkeit im Bereich KI-Automatisierung"
      }
    ],
  },
  en: {
    eyebrow: 'Career Outcomes',
    title: 'Impact on Students',
    intro: 'Student projects do more than produce prototypes and concepts: they also open up concrete career paths, whether in companies, in AI-related fields of practice or in self-employment.',
    quotes: [
      {
        text: "I landed my permanent job mainly thanks to the workflow and automation skills I picked up during my bachelor's thesis.",
        author: "A graduate",
        role: "Straight into work thanks to project skills"
      },
      {
        text: "My bachelor's thesis made such an impact at the company that I got recommended for a role at the holding company, and I ended up with a permanent job there in AI automation.",
        author: "Feedback from a company project",
        role: "Recommendation and a permanent role in AI"
      },
      {
        text: "The event technology and AI automation skills I picked up on the project played a big part in my decision to set up on my own in this field.",
        author: "Feedback from within the project",
        role: "Self-employed in AI automation"
      }
    ],
  },
};

export default function Impact() {
  const t = useT(T);
  const quotes = t.quotes;

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
          <h2 className="text-sm font-bold tracking-widest text-hm-turquoise uppercase mb-3">{t.eyebrow}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">{t.title}</h3>
          <p className="text-lg text-blue-100 font-light leading-relaxed">
            {t.intro}
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
