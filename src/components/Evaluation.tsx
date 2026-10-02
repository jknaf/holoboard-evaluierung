import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Target, CheckCircle2, Users, Building2, Lightbulb, X } from 'lucide-react';
import ActionCue from './ui/ActionCue';
import SectionHeader from './ui/SectionHeader';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: "Zusammenfassung",
    title: "Evaluation auf einen Blick",
    close: "Schließen",
    timelineHeading: "Interaktive Zeitleiste",
    keyPoints: "Kernpunkte",
    criteria: [
      {
        title: "Zukünftige Relevanz des Themenfeldes",
        desc: "Das Projekt adressiert ein hochaktuelles Zukunftsfeld an der Schnittstelle von generativer KI, KI-Agenten, Voice Agents und digitaler Lehre.",
        examples: ["Generative KI in der Lehre", "KI-Agenten und Voice Agents", "Technische und didaktische Tiefenerschließung des Themenfeldes"],
        detailedText: "Das Themenfeld ist in hohem Maße zukunftsrelevant, weil Hochschulen sich zunehmend mit generativer KI, agentischen Systemen und sprachbasierten Assistenzsystemen auseinandersetzen müssen. Das Holoboard-Projekt hat dieses Feld nicht nur oberflächlich aufgegriffen, sondern in einer besonderen technischen und didaktischen Tiefe bearbeitet. Damit gehört es zu den prägenden Projekten der Innovationsprofessur Lehre, weil es die Verbindung von KI-Technologien, Interaktion, Präsenz und Hochschuldidaktik frühzeitig und substanziell erschlossen hat.",
        altText: "KI als integraler Bestandteil der Hochschullehre",
      },
      {
        title: "Umsetzung der Projektziele",
        desc: "Das Projekt war technisch außerordentlich anspruchsvoll und wurde auch während eines tiefgreifenden Technologieschifts souverän weiterentwickelt.",
        examples: ["Hohe technische Komplexität", "Souveräner Umgang mit dem Technologieshift", "Tiefe fachliche Einarbeitung in das Thema KI"],
        detailedText: "Die Umsetzung der Projektziele ist besonders positiv zu bewerten, weil das Vorhaben technisch außerordentlich anspruchsvoll war. Während der Projektlaufzeit kam es zu einem grundlegenden Technologieshift im KI-Bereich, auf den nicht defensiv, sondern souverän und produktiv reagiert wurde. Statt an früheren Ansätzen festzuhalten, wurden Architektur, Prototypik und didaktisches Konzept konsequent weiterentwickelt. Zugleich zeigt das Projekt, dass eine sehr tiefe fachliche Einarbeitung in das Themenfeld KI stattgefunden hat, die weit über eine bloße Anwendung bestehender Werkzeuge hinausgeht.",
        altText: "Technische Integration des Holoboard-Systems mit Avatar-Ausgabe",
      },
      {
        title: "Qualität der Zusammenarbeit",
        desc: "Das Projekt war hochschulintern sichtbar, interdisziplinär vernetzt und insbesondere in der Zusammenarbeit mit Studierenden und innerhalb des Studiengangs sehr intensiv.",
        examples: ["Präsentation im Rahmen des Hochschulentwicklungsplans", "Intensive Zusammenarbeit mit Studierenden", "Hohe Sichtbarkeit innerhalb der Hochschule"],
        detailedText: "Die Qualität der Zusammenarbeit ist klar positiv zu bewerten. Das Projekt wurde im Rahmen der Präsentation zum Hochschulentwicklungsplan einem zentralen Kreis relevanter Akteurinnen und Akteure der Hochschule vorgestellt. Dadurch wurde das Thema hochschulweit sichtbar und gezielt in den Fokus gerückt. Besonders stark war zudem die Zusammenarbeit innerhalb des Studiengangs und mit den beteiligten Studierenden, die sehr intensiv in Entwicklung, Reflexion und prototypische Umsetzung eingebunden waren.",
        altText: "Holoboard im Präsentations- und Interaktionskontext mit Besucherinnen und Besuchern",
      },
      {
        title: "Nutzen für die HM",
        desc: "Das Projekt stiftet Nutzen für die Hochschule durch Sichtbarkeit, Kompetenzaufbau, Transfer in die Lehre und eine klare Verbindung der HM mit einem relevanten Zukunftsthema.",
        examples: ["Sichtbarkeit auf Kongressen und in Fachkontexten", "Transfer in Lehre und Hochschule", "Profilbildung der HM im Themenfeld KI"],
        detailedText: "Der Nutzen für die Hochschule München geht über das eigentliche Projekt deutlich hinaus. Das Thema wurde in verschiedenen fachlichen und öffentlichen Kontexten vorgestellt, unter anderem auf Kongressen wie der TURN-Konferenz sowie im Rahmen von Einreichungen und Beiträgen zu wissenschaftlichen und transferorientierten Formaten. Dadurch wird die Hochschule mit diesem Zukunftsthema sichtbar verbunden. Zugleich entstehen hochschulintern wertvolle Kompetenzen, Erfahrungswissen und Anschlusspunkte für weitere Entwicklungen in Lehre, Forschung und Transfer.",
        altText: "Holobox mit digitalem Avatar im realen Einsatz",
      },
      {
        title: "Innovationspotential",
        desc: "Das Innovationspotenzial ist noch lange nicht ausgeschöpft, sondern beginnt mit der Etablierung der Technologie erst in seinen besonders spannenden Anwendungsszenarien.",
        examples: ["Prüfungsagenten für mündliche Prüfungen", "Neue KI-gestützte Lehr- und Assistenzszenarien", "Weiterentwicklung über den aktuellen Prototyp hinaus"],
        detailedText: "Das Innovationspotenzial des Projekts ist noch lange nicht ausgeschöpft. Mit der Etablierung der technologischen Grundlage beginnen erst die besonders spannenden Use Cases. Dazu gehören insbesondere KI-gestützte Prüfungsagenten, die perspektivisch mündliche Prüfungen strukturiert abnehmen können, ebenso wie personalisierte Assistenzsysteme und neue interaktive Lehrszenarien. Das Holoboard ist deshalb nicht als abgeschlossene Einzelanwendung zu verstehen, sondern als Ausgangspunkt für eine ganze Reihe weiterführender Innovationen.",
        altText: "Technische Komposition eines Ganzkörper-Avatars als Grundlage zukünftiger KI- Anwendungen",
      },
    ],
    timeline: [
      { date: "2022", title: "Ausgangsvision", desc: "Entwicklung einer interaktiven Zielperspektive für digitale Lehre mit stärkerer Präsenz, Interaktion und technologischer Innovation." },
      { date: "2023", title: "Technische Vertiefung", desc: "Aufbau und Erprobung erster technischer Bausteine im Bereich Holobox, Lightboard, Interaktion, Wissensanbindung und KI." },
      { date: "2024", title: "Technologieshift und Neuausrichtung", desc: "Reaktion auf den tiefgreifenden Wandel im KI-Bereich durch konzeptionelle und technische Neuausrichtung des Projekts." },
      { date: "2025/2026", title: "Konsolidierung und Ausblick", desc: "Zusammenführung der Ergebnisse in eine belastbare Architektur und Überführung in weiterführende Szenarien wie KI-gestützte Prüfungsagenten." },
    ],
  },
  en: {
    eyebrow: "Summary",
    title: "Evaluation at a Glance",
    close: "Close",
    timelineHeading: "Interactive Timeline",
    keyPoints: "Key Points",
    criteria: [
      {
        title: "Future Relevance of the Field",
        desc: "The project tackles a highly topical, forward-looking field at the intersection of generative AI, AI agents, voice agents and digital teaching.",
        examples: ["Generative AI in teaching", "AI agents and voice agents", "In-depth technical and pedagogical exploration of the field"],
        detailedText: "The field is highly relevant for the future, as universities increasingly need to grapple with generative AI, agentic systems and voice-based assistants. Rather than merely skimming the surface, the Holoboard project explored this field in exceptional technical and pedagogical depth. This makes it one of the defining projects of the Innovation Professorship for Teaching: it engaged early and substantively with the interplay of AI technologies, interaction, presence and higher education pedagogy.",
        altText: "AI as an integral part of university teaching",
      },
      {
        title: "Achieving the Project Goals",
        desc: "The project was exceptionally demanding from a technical standpoint, yet development continued confidently even through a profound technological shift.",
        examples: ["High technical complexity", "Confident handling of the technological shift", "Deep immersion in the field of AI"],
        detailedText: "The way the project met its goals deserves particular credit, given how technically demanding the undertaking was. While the project was under way, the field of AI underwent a fundamental technological shift, and the team responded not defensively but confidently and productively. Rather than clinging to earlier approaches, they systematically developed the architecture, prototypes and pedagogical concept further. The project also reflects a very deep engagement with AI as a subject, going far beyond simply applying existing tools.",
        altText: "Technical integration of the Holoboard system with avatar output",
      },
      {
        title: "Quality of Collaboration",
        desc: "The project was visible across the university, connected across disciplines and marked above all by intensive collaboration with students and within the degree programme.",
        examples: ["Presentation as part of the University Development Plan", "Close collaboration with students", "High visibility within the university"],
        detailedText: "The quality of collaboration merits a clearly positive assessment. As part of the presentation on the University Development Plan, the project was showcased to a core group of key stakeholders from across the university. This raised the topic's profile university-wide and deliberately placed it in the spotlight. Collaboration within the degree programme and with the students involved was particularly strong: they were very closely engaged in development, reflection and prototyping.",
        altText: "The Holoboard being presented to and used by visitors",
      },
      {
        title: "Benefits for HM",
        desc: "The project benefits the university through visibility, capacity building and transfer into teaching, and it firmly links HM with a highly relevant topic for the future.",
        examples: ["Visibility at conferences and in professional settings", "Transfer into teaching and across the university", "Sharpening HM's profile in AI"],
        detailedText: "The benefits for Munich University of Applied Sciences (HM) extend well beyond the project itself. The topic has been presented in a range of professional and public settings, including conferences such as the TURN Conference, and through submissions and contributions to academic and transfer-oriented formats. As a result, the university is visibly associated with this forward-looking topic. At the same time, HM is building valuable expertise, practical experience and starting points for further developments in teaching, research and transfer.",
        altText: "Holobox with a digital avatar in real-world use",
      },
      {
        title: "Innovation Potential",
        desc: "The project's potential for innovation is far from exhausted: now that the technology is established, its most exciting applications are only just beginning to emerge.",
        examples: ["Examination agents for oral exams", "New AI-supported teaching and assistance scenarios", "Further development beyond the current prototype"],
        detailedText: "The project's potential for innovation is far from exhausted. With the technological foundation in place, the truly exciting use cases are only now coming into view. They include, in particular, AI-supported examination agents that could in future conduct structured oral examinations, as well as personalised assistance systems and new interactive teaching scenarios. The Holoboard should therefore be seen not as a finished, stand-alone application but as the starting point for a whole series of further innovations.",
        altText: "Technical composition of a full-body avatar as the basis for future AI applications",
      },
    ],
    timeline: [
      { date: "2022", title: "Initial Vision", desc: "Developing an interactive vision for digital teaching built on greater presence, interaction and technological innovation." },
      { date: "2023", title: "Technical Deep Dive", desc: "Building and testing the first technical components for the Holobox, Lightboard, interaction, knowledge integration and AI." },
      { date: "2024", title: "Technological Shift and Realignment", desc: "Responding to profound change in the field of AI with a conceptual and technical realignment of the project." },
      { date: "2025/2026", title: "Consolidation and Outlook", desc: "Consolidating the results into a robust architecture and carrying them forward into further scenarios such as AI-supported examination agents." },
    ],
  },
};

// Sprachunabhängig je Kriterium (gleiche Reihenfolge wie in T.criteria).
const criteriaMeta = [
  { id: 1, Icon: Target, image: "https://holoboard-assets.netlify.app/images/ki-hochschule-zukunft.png" },
  { id: 2, Icon: CheckCircle2, image: "https://holoboard-assets.netlify.app/images/architektur-03-webplattform.png" },
  { id: 3, Icon: Users, image: "https://holoboard-assets.netlify.app/images/IMG_3815.JPG" },
  { id: 4, Icon: Building2, image: "https://holoboard-assets.netlify.app/images/20241115_114416.jpg" },
  { id: 5, Icon: Lightbulb, image: "https://holoboard-assets.netlify.app/images/architektur-00-gesamtpipeline.png" },
];

const ease = [0.16, 1, 0.3, 1] as const;
const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hm-red focus-visible:ring-offset-2';

export default function Evaluation() {
  const [selectedCriterion, setSelectedCriterion] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const reduce = useReducedMotion();

  const t = useT(T);
  const criteria = criteriaMeta.map((m, i) => ({ ...m, ...t.criteria[i] }));
  const current = criteria.find((c) => c.id === selectedCriterion);

  const open = (id: number) => {
    setStep(0);
    setSelectedCriterion(id);
  };

  // Escape schließt das Detail.
  useEffect(() => {
    if (selectedCriterion === null) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedCriterion(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedCriterion]);

  return (
    <section id="evaluation" className="relative py-24 lg:py-32 bg-[#F4F4F1] text-[#111111]">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-24">
        <SectionHeader index="04.1" eyebrow={t.eyebrow} title={t.title} tone="light" className="mb-12 lg:mb-16" />

        {/* Bento: großes Feld für das erste Kriterium, vier kleine daneben */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {criteria.map((c, i) => {
            const big = i === 0;
            return (
              <motion.button
                key={c.id}
                type="button"
                layoutId={reduce ? undefined : `eval-${c.id}`}
                onClick={() => open(c.id)}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease, delay: i * 0.06 }}
                className={`group flex flex-col overflow-hidden rounded-3xl bg-white border border-gray-200 text-left transition-[border-color,box-shadow] duration-300 hover:border-hm-red hover:shadow-[0_0_30px_rgba(252,85,85,0.25)] ${focusRing} focus-visible:ring-offset-[#F4F4F1] ${
                  big ? 'md:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`relative w-full overflow-hidden bg-gray-100 ${big ? 'h-56 sm:h-72 lg:h-auto lg:flex-1 lg:min-h-[260px]' : 'h-32'}`}>
                  <img
                    src={c.image}
                    alt={c.altText}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <div className={`flex flex-col gap-3 ${big ? 'p-7 lg:p-9' : 'p-6 flex-1'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-hm-red/10 text-hm-red">
                      <c.Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">0{c.id}</span>
                  </div>
                  <h3 className={`font-extrabold tracking-tight leading-tight ${big ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>{c.title}</h3>
                  <p className={`leading-relaxed text-gray-600 ${big ? 'text-base lg:text-lg' : 'text-sm'}`}>{c.desc}</p>
                  <div className="mt-auto pt-3">
                    <ActionCue mode="detail" accent="red" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Detail als weiße Karte */}
      <AnimatePresence>
        {current && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCriterion(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] cursor-pointer"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 sm:p-6">
              <motion.div
                layoutId={reduce ? undefined : `eval-${current.id}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="eval-dialog-title"
                className="bg-white text-[#111111] w-full max-w-3xl rounded-3xl border border-gray-200 overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
              >
                <div className="relative h-56 sm:h-72 w-full bg-gray-100 flex-shrink-0">
                  <img
                    src={current.image}
                    alt={current.altText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
                  <button
                    type="button"
                    autoFocus
                    onClick={() => setSelectedCriterion(null)}
                    aria-label={t.close}
                    className="absolute top-4 right-4 w-11 h-11 bg-black/50 hover:bg-hm-red backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-7 sm:p-10 overflow-y-auto">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-hm-red/10 text-hm-red">
                      <current.Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 id="eval-dialog-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">{current.title}</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-6">{current.desc}</p>
                  <div className="h-px w-full bg-gray-200 mb-6" />

                  {current.id === 2 ? (
                    <div className="mb-8">
                      <h4 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">{t.timelineHeading}</h4>
                      {/* Zeitstrahl im Stil von Exploration: Linie, Punkte, aktiver Schritt darunter */}
                      <div className="relative">
                        <div aria-hidden className="absolute top-[8px] left-[12.5%] right-[12.5%] h-0.5 bg-gray-300">
                          <div
                            className="h-full bg-hm-red transition-[width] duration-500 motion-reduce:transition-none"
                            style={{ width: `${(step / (t.timeline.length - 1)) * 100}%` }}
                          />
                        </div>
                        <ol className="relative grid grid-cols-4">
                          {t.timeline.map((s, i) => (
                            <li key={s.date} className="flex justify-center">
                              <button
                                type="button"
                                onClick={() => setStep(i)}
                                aria-current={i === step ? 'step' : undefined}
                                className={`group flex min-h-11 flex-col items-center gap-3 rounded-lg px-1 ${focusRing} ${i === step ? 'text-[#111111]' : 'text-gray-500 hover:text-[#111111]'}`}
                              >
                                <span className="h-[18px] flex items-center">
                                  <span
                                    className={`block rounded-full border-2 transition-all motion-reduce:transition-none ${
                                      i <= step ? 'border-hm-red' : 'border-gray-400 group-hover:border-hm-red'
                                    } ${i === step ? 'w-[18px] h-[18px] bg-hm-red shadow-[0_0_0_6px_rgba(252,85,85,0.15)]' : `w-2.5 h-2.5 ${i < step ? 'bg-hm-red' : 'bg-white'}`}`}
                                  />
                                </span>
                                <span className="text-[13px] font-extrabold whitespace-nowrap">{s.date}</span>
                              </button>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={step}
                          aria-live="polite"
                          initial={reduce ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduce ? undefined : { opacity: 0, y: -8 }}
                          transition={{ duration: 0.3, ease }}
                          className="mt-6 rounded-2xl border border-gray-200 bg-[#F4F4F1] p-5"
                        >
                          <span className="text-xs font-extrabold tracking-[0.18em] text-hm-red">{t.timeline[step].date}</span>
                          <h5 className="mt-1 text-lg font-extrabold tracking-tight">{t.timeline[step].title}</h5>
                          <p className="mt-1 text-sm leading-relaxed text-gray-600">{t.timeline[step].desc}</p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  ) : (
                    <p className="text-gray-700 leading-relaxed mb-8">{current.detailedText}</p>
                  )}

                  <h4 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">{t.keyPoints}</h4>
                  <ul className="space-y-3">
                    {current.examples.map((example) => (
                      <li key={example} className="flex items-start gap-3 text-gray-700 bg-[#F4F4F1] p-3 rounded-xl border border-gray-200">
                        <span className="w-2 h-2 rounded-full bg-hm-red mt-2 flex-shrink-0" aria-hidden="true" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
