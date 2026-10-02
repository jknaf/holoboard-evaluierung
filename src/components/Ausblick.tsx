import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ShieldCheck, Cpu, FileText, Rocket, Globe, Brain, GraduationCap } from 'lucide-react';
import { useT } from '../i18n';
import SectionHeader from './ui/SectionHeader';
import Aurora from './ui/Aurora';

const T = {
  de: {
    eyebrow: 'Ausblick',
    title: 'Weiterführung 2027 bis 2030',
    scenario: 'Das Szenario: KI-gestützte mündliche Prüfungen.',
    intro:
      'In Zeiten generativer KI verlieren schriftliche Seminar- und Modularbeiten an Aussagekraft. Mündliche Prüfungen gewinnen an Bedeutung, weil sie echtes Verständnis prüfen, skalieren aber nicht. Die Lösung: Der KI-Avatar des Professors führt die mündliche Prüfung in der Holobox. Ihre Größe ist kein Problem mehr, sie wird zur festen Prüfungsstation.',
    questionsLabel: 'Offene Fragen, schon angepackt',
    questions: ['Datenschutz', 'Einfache Bedienbarkeit', 'Niedrigschwelliger Zugang', 'Faire Bewertung'],
    prototype:
      'Alles, was dafür gebraucht wird, existiert bereits als Prototyp: lokale KI-Infrastruktur, RAG-System, Avatar-Technologie und Voice Agents.',
    roadmapLabel: 'Roadmap 2027–2030',
    roadmapIntro:
      'Der Weg vom Forschungsprototyp zum institutionell verankerten Prüfungswerkzeug, aufbauend auf den Ergebnissen der Innovationsprofessur.',
    timeline: [
      {
        title: 'Konzeption und Pilotierung',
        description:
          'Entwicklung des KI-gestützten Prüfungsszenarios auf Basis der bestehenden Holobox-Infrastruktur. Erste Pilotprüfungen mit Voice Agents und KI-Avatar in kontrollierten Testumgebungen.',
      },
      {
        title: 'Datenschutz und Integration',
        description:
          'Aufbau der datenschutzkonformen, lokalen Prüfungsinfrastruktur. Integration des RAG-Systems für Fragenkataloge der Lehrenden. Entwicklung der No-Code-Oberfläche für einfache Prüfungserstellung.',
      },
      {
        title: 'Erprobung im Studienbetrieb',
        description:
          'Einsatz in ausgewählten Studiengängen als ergänzendes Prüfungsformat. Evaluation der Prüfungsqualität, Fairness und Akzeptanz bei Studierenden und Lehrenden.',
      },
      {
        title: 'Institutionelle Verankerung',
        description:
          'Überführung in den Regelbetrieb als anerkanntes Prüfungsformat. Skalierung auf weitere Fakultäten und Prüfungsszenarien. Das Holoboard wird vom Forschungsprototyp zum festen Bestandteil der Prüfungsinfrastruktur.',
      },
    ],
    imageAlt: 'Prüfungsszenario: Studentin vor der Holobox mit KI-Avatar als Prüfer',
    caption: 'Vision: KI-gestützte mündliche Prüfung mit Avatar-Prüfer in der Holobox',
  },
  en: {
    eyebrow: 'Outlook',
    title: 'Continuing the Project, 2027–2030',
    scenario: 'The scenario: AI-assisted oral examinations.',
    intro:
      "In the age of generative AI, written seminar papers and module coursework are losing their significance as a form of assessment. Oral examinations are becoming more important because they test genuine understanding, but they do not scale. The solution: the professor's AI avatar conducts the oral examination in the Holobox. Its size is no longer a drawback, as the Holobox becomes a permanent examination station.",
    questionsLabel: 'Open questions, already in hand',
    questions: ['Data protection', 'Ease of use', 'Low-barrier access', 'Fair assessment'],
    prototype:
      'Everything this requires already exists in prototype form: local AI infrastructure, a RAG system, avatar technology and voice agents.',
    roadmapLabel: 'Roadmap 2027–2030',
    roadmapIntro:
      'The journey from research prototype to an institutionally embedded examination tool, building on the outcomes of the Innovation Professorship for Teaching.',
    timeline: [
      {
        title: 'Design and Piloting',
        description:
          'Developing the AI-assisted examination scenario on the basis of the existing Holobox infrastructure. Initial pilot examinations with voice agents and an AI avatar in controlled test settings.',
      },
      {
        title: 'Data Protection and Integration',
        description:
          "Building a local, privacy-compliant examination infrastructure. Integrating the RAG system for instructors' question banks. Developing a no-code interface that makes setting up examinations straightforward.",
      },
      {
        title: 'Trials in Regular Teaching',
        description:
          'Use as a supplementary examination format in selected degree programmes. Evaluation of examination quality, fairness and acceptance among students and instructors.',
      },
      {
        title: 'Institutional Embedding',
        description:
          'Transition to routine operation as a recognised examination format. Roll-out to further faculties and examination scenarios. The Holoboard evolves from a research prototype into an integral part of the examination infrastructure.',
      },
    ],
    imageAlt: 'Examination scenario: a female student in front of the Holobox, examined by an AI avatar',
    caption: 'Vision: an AI-assisted oral examination with an avatar examiner in the Holobox',
  },
};

const YEARS = ['2027', '2028', '2029', '2030'];
const YEAR_ICONS = [Brain, Globe, GraduationCap, Rocket];
const EASE = [0.16, 1, 0.3, 1] as const;
const LINE = 'bg-gradient-to-r from-hm-red to-[#ff9090] shadow-[0_0_16px_rgba(252,85,85,0.7)]';

export default function Ausblick() {
  const t = useT(T);
  const reduce = useReducedMotion();
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: roadmapRef, offset: ['start 0.75', 'end 0.5'] });
  const [reached, setReached] = useState(0);
  // ponytail: Knoten liegen bei 0, 1/4, 2/4, 3/4 der Linie (Spalten ohne gap). Mobil sind die Abstände
  // nur ungefähr gleich, das reicht für die Anzeige.
  useMotionValueEvent(scrollYProgress, 'change', (v) =>
    setReached(v <= 0 ? 0 : Math.min(YEARS.length, Math.floor(v * YEARS.length) + 1)),
  );
  const lit = reduce ? YEARS.length : reached;
  const fill = reduce ? 1 : scrollYProgress;

  return (
    <section id="ausblick" className="relative overflow-hidden bg-black text-white py-24 lg:py-32">
      <Aurora className="opacity-60" />
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_26rem] gap-12 lg:gap-20 items-start">
          <SectionHeader
            index="05.1"
            eyebrow={t.eyebrow}
            title={t.title}
            tone="dark"
            intro={
              <>
                <strong className="font-bold text-white">{t.scenario}</strong> {t.intro}
              </>
            }
          />

          <motion.aside
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="flex flex-col gap-5 p-7 rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md lg:mt-10"
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hm-red">
              <ShieldCheck aria-hidden="true" className="w-4 h-4 shrink-0" />
              {t.questionsLabel}
            </p>
            <ul className="flex flex-wrap gap-2">
              {t.questions.map((q) => (
                <li key={q} className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm text-gray-200">
                  {q}
                </li>
              ))}
            </ul>
            <p className="flex gap-3 text-sm leading-relaxed text-gray-300">
              <Cpu aria-hidden="true" className="w-5 h-5 shrink-0 text-hm-turquoise" />
              {t.prototype}
            </p>
          </motion.aside>
        </div>

        {/* Roadmap: rote Linie füllt sich beim Scrollen, erreichte Jahre werden gefüllt */}
        <div ref={roadmapRef} id="zukunftsperspektive" className="mt-20 lg:mt-28 scroll-mt-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-hm-turquoise">{t.roadmapLabel}</p>
          <p className="mt-3 max-w-2xl text-base lg:text-lg font-light leading-relaxed text-gray-300">{t.roadmapIntro}</p>

          <div className="relative mt-12 lg:mt-16">
            <div aria-hidden="true" className="hidden lg:block absolute inset-x-0 top-0 h-0.5 bg-white/15">
              <motion.div style={{ scaleX: fill }} className={`h-full origin-left ${LINE}`} />
            </div>
            <div aria-hidden="true" className="lg:hidden absolute left-[7px] top-0 bottom-0 w-0.5 bg-white/15">
              <motion.div style={{ scaleY: fill }} className={`w-full h-full origin-top ${LINE}`} />
            </div>

            <ol className="grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-0">
              {t.timeline.map((item, i) => {
                const on = i < lit;
                const current = i === lit - 1;
                const Icon = YEAR_ICONS[i];
                return (
                  <li key={YEARS[i]} className="relative flex flex-col gap-4 pl-10 lg:pl-0 lg:pr-8 lg:pt-10">
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1.5 lg:-top-[7px] w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                        on ? 'bg-hm-red border-hm-red' : 'bg-black border-white/40'
                      } ${current ? 'scale-125 shadow-[0_0_0_8px_rgba(252,85,85,0.18),0_0_24px_rgba(252,85,85,0.6)]' : ''}`}
                    />
                    <div className="flex items-end justify-between gap-3">
                    <span
                      className={`text-5xl xl:text-6xl font-black leading-[0.9] tracking-[-0.05em] transition-colors duration-500 ${
                        on ? 'text-white' : 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]'
                      }`}
                    >
                      {YEARS[i]}
                    </span>
                      <Icon aria-hidden="true" className={`w-6 h-6 shrink-0 transition-colors duration-500 ${on ? 'text-hm-turquoise' : 'text-white/30'}`} />
                    </div>
                    <h3
                      className={`text-xl font-extrabold tracking-tight transition-colors duration-500 ${
                        on ? 'text-white' : 'text-gray-300'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-gray-400">{item.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <motion.figure
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-20 lg:mt-28 max-w-5xl mx-auto overflow-hidden rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md"
        >
          <img
            src="https://holoboard-assets.netlify.app/images/ausblick-pruefungsszenario.png"
            alt={t.imageAlt}
            className="w-full h-auto"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <figcaption className="flex items-center justify-center gap-2 px-6 py-4 border-t border-white/10 text-sm text-gray-300 text-center">
            <FileText aria-hidden="true" className="w-4 h-4 shrink-0 text-hm-red" />
            {t.caption}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
