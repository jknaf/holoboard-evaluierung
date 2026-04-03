import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Network as NetworkIcon, Building2, Users, GraduationCap, Presentation } from 'lucide-react';
import ActionCue from './ui/ActionCue';

type NetworkEntry = {
  name: string;
  org: string;
  note: string;
};

type NetworkNode = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  entries: NetworkEntry[];
};

const nodes: NetworkNode[] = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'Unternehmenskontakte',
    desc: 'Technologiepartner und Industrieexperten mit direktem Praxisbezug zum Setup und zu möglichen Anwendungen.',
    entries: [
      {
        name: 'Christian Albrecht',
        org: 'CDC Displays Altendorf',
        note: 'Technische Klärung rund um Signalein- und -ausgang der Holobox sowie Lieferdetails.',
      },
      {
        name: 'Marc Dörmann / Tobias Drexel',
        org: 'Teltec AG',
        note: 'Beratung zur Streaming-Konfiguration und Einschätzung zum Keying-Setup.',
      },
      {
        name: 'Christian Marx',
        org: 'Z Lab',
        note: 'Austausch zu innovativen Weiterbildungsformaten und möglichen Anwendungsszenarien.',
      },
      {
        name: 'Jennifer-Marie Winkler',
        org: 'DB Akademie',
        note: 'Interesse an KI-basierter Lernunterstützung und digitalen Lernunterlagen.',
      },
      {
        name: 'Nils Friedrich',
        org: 'W.A.F. Institut',
        note: 'Rückmeldung zum Holobox-Ansatz mit grundsätzlichem Interesse an einem weiteren Austausch.',
      },
    ],
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Forschungspartner',
    desc: 'Austausch mit Hochschulen und Instituten zu Förderanträgen, Studios und didaktischen Konzepten.',
    entries: [
      {
        name: 'Robin Hädicke',
        org: 'Universität Bayreuth',
        note: 'Austausch zu Authoring-Tools, Interaction Design und Serious-Games-Kontexten.',
      },
      {
        name: 'Florian Petry',
        org: 'Fakultät 11, Hochschule München',
        note: 'Input zur Prototyp-Gestaltung mit Fokus auf einen belastbaren technischen Aufbau.',
      },
      {
        name: 'Mikko Turunen',
        org: 'Tampere University of Applied Sciences',
        note: 'Kontakt für internationale Forschungsanträge und AR-bezogene Lehrszenarien.',
      },
      {
        name: 'Alin Moldoveanu',
        org: 'Politehnica University of Bucharest',
        note: 'Austausch zu möglichen Forschungsanträgen im Umfeld immersiver Bildung.',
      },
      {
        name: 'Leonardo Springer / Ana Coelho',
        org: 'ISEC Lisboa',
        note: 'Internationale Gastlehre und Austausch zu KI in Kommunikation, Design und Medien im Rahmen einer akademischen Mobilität am 2. und 5. März 2026.',
      },
      {
        name: 'Stefanie Lukasz',
        org: 'Hochschule München, Studienberatung',
        note: 'Austausch zur Holobox in der Studienberatung und zu möglichen Schnittstellen zum Chatbot der HM.',
      },
      {
        name: 'Dr. Simon Schneider',
        org: 'LMU München, GeoForum',
        note: 'Kontakt aus dem Umfeld universitärer Koordination und potenzieller Anwendungs- beziehungsweise Transferkontexte.',
      },
      {
        name: 'Christian Mahler',
        org: 'HAWK Hildesheim',
        note: 'Austausch zu Interaction Design, Hochschuleinsatz und möglichen Anknüpfungspunkten für das Projekt.',
      },
    ],
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: 'Experteninterviews',
    desc: 'Einblicke aus Weiterbildung, XR-Produktion, Handwerk und Digital Learning zur Abschätzung von Nutzen und Hürden.',
    entries: [
      {
        name: 'Oswin Breidenbach',
        org: 'TÜV Süd',
        note: 'Perspektive auf Zielgruppen, Autorenwerkzeuge und hochwertige digitale Lernformate.',
      },
      {
        name: 'Thomas Ebner',
        org: 'Volucap GmbH',
        note: 'Einschätzungen zu volumetrischen Studios, Workflows und wirtschaftlicher Tragfähigkeit.',
      },
      {
        name: 'Christian Lütgenau',
        org: 'W.A.F. Institut',
        note: 'Praxisblick auf skalierbare Seminarformate, Studios und Interesse an holografischen Szenarien.',
      },
      {
        name: 'Jens Bille',
        org: 'Heinz-Piest-Institut',
        note: 'Rückmeldungen zu niederschwelligen Lernformaten für Handwerk und Weiterbildung.',
      },
    ],
  },
  {
    icon: <Presentation className="w-5 h-5" />,
    title: 'Konferenzen',
    desc: 'Präsentation von Zwischenergebnissen und Networking auf fachlichen Veranstaltungen und Messen.',
    entries: [
      {
        name: 'TURN Conference 2024',
        org: 'Berlin',
        note: 'Diskussion digitaler Avatare und neuer Kontakte im Hochschulkontext.',
      },
      {
        name: 'Learntec',
        org: 'Karlsruhe',
        note: 'Mehrere Gespräche mit Akteuren aus Weiterbildung und EdTech.',
      },
      {
        name: 'TEKOM',
        org: 'Stuttgart',
        note: 'Einblicke in Avatar- und Dokumentationskontexte mit Bezug zur Praxis.',
      },
      {
        name: 'AWE / IBC',
        org: 'Lissabon / Amsterdam',
        note: 'Internationale Impulse zu XR, Medienproduktion und Technologietrends.',
      },
    ],
  },
];

export default function Netzwerk() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Unternehmenskontakte: true,
    Forschungspartner: true,
    Experteninterviews: false,
    Konferenzen: false,
  });

  const toggleSection = (title: string) => {
    setOpenSections((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <section id="netzwerk" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-hm-turquoise/10 text-hm-turquoise mb-6">
            <NetworkIcon className="w-6 h-6" />
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Zusammenarbeit und Netzwerk</h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Das Projekt profitierte stark von einem weitreichenden Netzwerk aus Industrie, Forschung und
            hochschulinternen Akteuren. Dieser Austausch war essenziell für die technologische Ausrichtung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {nodes.map((node, index) => {
            const isOpen = openSections[node.title];

            return (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-gray-100 bg-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.22)] transition-shadow hover:shadow-[0_30px_70px_-30px_rgba(15,23,42,0.28)]"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(node.title)}
                  className="w-full p-6 sm:p-7 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 text-hm-turquoise">
                        {node.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{node.title}</h4>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {node.desc}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 pl-2">
                      <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                        {node.entries.length}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ActionCue mode="expand" expanded={isOpen} accent={isOpen ? 'red' : 'turquoise'} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                        <div className="h-px w-full bg-gray-100 mb-5" />
                        <div className="space-y-3">
                          {node.entries.map((entry) => (
                            <div key={`${node.title}-${entry.name}`} className="rounded-2xl bg-gray-50/80 px-4 py-4 border border-gray-100">
                              <p className="text-lg font-bold text-gray-900">{entry.name}</p>
                              <p className="text-xs font-bold uppercase tracking-[0.18em] text-hm-turquoise mt-1">{entry.org}</p>
                              <p className="text-sm text-gray-600 font-light leading-relaxed mt-3">{entry.note}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
