import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { useT } from '../i18n';

type NetworkEntry = {
  name: string;
  org: string;
  note: string;
};

type NetworkNode = {
  title: string;
  short: string;
  desc: string;
  entries: NetworkEntry[];
};

type Texts = { eyebrow: string; title: string; intro: string; hint: string; nodes: NetworkNode[] };

const T: { de: Texts; en: Texts } = {
  de: {
    eyebrow: 'Netzwerk',
    hint: '{n} Kontakte in vier Bereichen. Punkt antippen für Details.',
    title: 'Zusammenarbeit und Netzwerk',
    intro: `Das Projekt profitierte stark von einem weitreichenden Netzwerk aus Industrie, Forschung und
            hochschulinternen Akteuren. Dieser Austausch war essenziell für die technologische Ausrichtung.`,
    nodes: [
      {
        title: 'Unternehmenskontakte',
        short: 'Unternehmen',
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
        title: 'Forschungspartner',
        short: 'Forschung',
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
        title: 'Experteninterviews',
        short: 'Interviews',
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
        title: 'Konferenzen',
        short: 'Konferenzen',
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
    ],
  },
  en: {
    eyebrow: 'Network',
    hint: '{n} contacts in four areas. Tap a dot for details.',
    title: 'Collaboration and Networking',
    intro: 'The project drew heavily on a broad network spanning industry, research and colleagues across the university. These exchanges played a key role in shaping its technological direction.',
    nodes: [
      {
        title: 'Industry Contacts',
        short: 'Industry',
        desc: 'Technology partners and industry experts with first-hand practical links to the set-up and its potential applications.',
        entries: [
          {
            name: 'Christian Albrecht',
            org: 'CDC Displays Altendorf',
            note: 'Technical clarification of the Holobox\'s signal inputs and outputs, plus delivery details.',
          },
          {
            name: 'Marc Dörmann / Tobias Drexel',
            org: 'Teltec AG',
            note: 'Advice on the streaming configuration and an assessment of the keying setup.',
          },
          {
            name: 'Christian Marx',
            org: 'Z Lab',
            note: 'Discussions on innovative formats for continuing education and potential use cases.',
          },
          {
            name: 'Jennifer-Marie Winkler',
            org: 'DB Akademie',
            note: 'Interest in AI-based learning support and digital learning materials.',
          },
          {
            name: 'Nils Friedrich',
            org: 'W.A.F. Institut',
            note: 'Feedback on the Holobox approach and a general interest in continuing the conversation.',
          },
        ],
      },
      {
        title: 'Research Partners',
        short: 'Research',
        desc: 'Dialogue with universities and research institutes on funding applications, studios and pedagogical concepts.',
        entries: [
          {
            name: 'Robin Hädicke',
            org: 'University of Bayreuth',
            note: 'Discussions on authoring tools, interaction design and serious games.',
          },
          {
            name: 'Florian Petry',
            org: 'Faculty 11, Munich University of Applied Sciences (HM)',
            note: 'Input on prototype design, focusing on a robust technical build.',
          },
          {
            name: 'Mikko Turunen',
            org: 'Tampere University of Applied Sciences',
            note: 'Contact for international research proposals and AR-based teaching scenarios.',
          },
          {
            name: 'Alin Moldoveanu',
            org: 'Politehnica University of Bucharest',
            note: 'Discussions on potential research proposals in the field of immersive education.',
          },
          {
            name: 'Leonardo Springer / Ana Coelho',
            org: 'ISEC Lisboa',
            note: 'International guest teaching and discussions on AI in communication, design and media during an academic mobility visit on 2 and 5 March 2026.',
          },
          {
            name: 'Stefanie Lukasz',
            org: 'Munich University of Applied Sciences (HM), Student Advisory Service',
            note: 'Discussions on using the Holobox in student advisory services and on potential links with the HM chatbot.',
          },
          {
            name: 'Dr. Simon Schneider',
            org: 'LMU Munich, GeoForum',
            note: 'A contact in university coordination, with links to potential application and knowledge transfer settings.',
          },
          {
            name: 'Christian Mahler',
            org: 'HAWK Hildesheim',
            note: 'Discussions on interaction design, use in higher education and potential points of contact with the project.',
          },
        ],
      },
      {
        title: 'Expert Interviews',
        short: 'Interviews',
        desc: 'Insights from continuing education, XR production, the skilled trades and digital learning, used to gauge benefits and barriers.',
        entries: [
          {
            name: 'Oswin Breidenbach',
            org: 'TÜV Süd',
            note: 'Perspectives on target groups, authoring tools and high-quality digital learning formats.',
          },
          {
            name: 'Thomas Ebner',
            org: 'Volucap GmbH',
            note: 'Views on volumetric studios, workflows and commercial viability.',
          },
          {
            name: 'Christian Lütgenau',
            org: 'W.A.F. Institut',
            note: 'A practitioner\'s view of scalable seminar formats and studios, plus interest in holographic scenarios.',
          },
          {
            name: 'Jens Bille',
            org: 'Heinz-Piest-Institut',
            note: 'Feedback on easily accessible learning formats for the skilled trades and continuing education.',
          },
        ],
      },
      {
        title: 'Conferences',
        short: 'Conferences',
        desc: 'Presenting interim results and networking at specialist events and trade fairs.',
        entries: [
          {
            name: 'TURN Conference 2024',
            org: 'Berlin',
            note: 'Discussions on digital avatars and new contacts within higher education.',
          },
          {
            name: 'Learntec',
            org: 'Karlsruhe',
            note: 'Several conversations with stakeholders from continuing education and EdTech.',
          },
          {
            name: 'TEKOM',
            org: 'Stuttgart',
            note: 'Practical insights into avatars and technical documentation in real-world settings.',
          },
          {
            name: 'AWE / IBC',
            org: 'Lisbon / Amsterdam',
            note: 'International input on XR, media production and technology trends.',
          },
        ],
      },
    ],
  },
};

// Koordinaten aus dem freigegebenen Entwurf (1440 × 900), umgerechnet auf die Netzfläche
// BOX (x, y, Breite, Höhe). Alles in Prozent, damit das Netz mit der Box skaliert.
const BOX = { x: 460, y: 180, w: 940, h: 700 };
const px = (x: number) => ((x - BOX.x) / BOX.w) * 100;
const py = (y: number) => ((y - BOX.y) / BOX.h) * 100;
const CENTER = { x: px(930), y: py(520) };
const HUBS = [
  [715, 370],
  [1145, 370],
  [715, 670],
  [1145, 670],
].map(([x, y]) => ({ x: px(x), y: py(y) }));
// Gleiche Reihenfolge wie die Einträge in T.nodes.
const DOTS = [
  [[590, 377], [556, 309], [627, 282], [654, 211], [722, 245]],
  [[1066, 273], [1101, 206], [1164, 247], [1238, 227], [1250, 302], [1313, 344], [1266, 403], [1277, 478]],
  [[696, 793], [622, 813], [610, 738], [547, 696]],
  [[1268, 689], [1288, 763], [1213, 775], [1171, 838]],
].map((group) => group.map(([x, y]) => ({ x: px(x), y: py(y) })));

// Puls der Mitte und Signale auf den Speichen. Signale laufen per offset-path auf einem
// Zwei-Punkt-Polygon in Prozent (skaliert mit der Box); 0 → 50 % ist genau eine Strecke.
const css = `
.net-pulse { animation: net-pulse 2.4s ease-out infinite; }
@keyframes net-pulse { 0% { box-shadow: 0 0 0 0 rgba(252,85,85,.6), 0 0 60px rgba(252,85,85,.5); } 100% { box-shadow: 0 0 0 26px rgba(252,85,85,0), 0 0 60px rgba(252,85,85,.5); } }
.net-sig { display: none; }
@supports (offset-path: polygon(0 0, 1px 1px)) {
  .net-sig { display: block; position: absolute; left: 0; top: 0; width: 5px; height: 5px; border-radius: 9999px; background: #bff5f5; box-shadow: 0 0 10px 3px rgba(51,204,204,.9); offset-anchor: center; offset-rotate: 0deg; animation: net-travel 2.8s linear infinite; }
}
@keyframes net-travel { 0% { offset-distance: 0%; opacity: 0; } 5% { opacity: 1; } 45% { opacity: 1; } 50% { offset-distance: 50%; opacity: 0; } 100% { offset-distance: 50%; opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .net-pulse { animation: none; box-shadow: 0 0 60px rgba(252,85,85,.5); }
  .net-sig { animation: none; offset-distance: 25%; opacity: 1; }
}
`;

const pct = (n: number) => `${n}%`;

export default function Netzwerk() {
  const t = useT(T);
  const reduce = useReducedMotion();
  const [sel, setSel] = useState('0-1');
  const [g, i] = sel.split('-').map(Number);
  const group = t.nodes[g];
  const entry = group.entries[i];
  const total = t.nodes.reduce((sum, n) => sum + n.entries.length, 0);
  const hint = t.hint.replace('{n}', String(total));

  const panel = (
    <div
      aria-live="polite"
      className="rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md p-7 lg:p-8 flex flex-col gap-4"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={sel}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-hm-red">{group.title}</span>
          <h3 className="text-2xl lg:text-[28px] font-extrabold tracking-tight leading-[1.1] text-white">{entry.org}</h3>
          <span className="text-[15px] font-semibold text-hm-turquoise">{entry.name}</span>
          <p className="text-base leading-relaxed text-gray-300">{entry.note}</p>
        </motion.div>
      </AnimatePresence>
      <span className="text-xs text-gray-400">{hint}</span>
    </div>
  );

  return (
    <section id="netzwerk" className="relative overflow-hidden bg-[#05070A] text-white py-24 lg:py-32">
      <style>{css}</style>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]"
      />

      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24 grid grid-cols-1 gap-12 xl:grid-cols-[22rem_minmax(0,1fr)] xl:items-center">
        <div className="flex flex-col gap-10 lg:max-xl:grid lg:max-xl:grid-cols-2 lg:max-xl:items-start">
          <SectionHeader index="03.1" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="dark" />
          <div className="hidden lg:block">{panel}</div>
        </div>

        {/* Desktop: lebendiges Netz in fester Seitenverhältnis-Box */}
        <div className="hidden lg:block relative w-full" style={{ aspectRatio: `${BOX.w} / ${BOX.h}` }}>
          <svg aria-hidden="true" className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {HUBS.map((hub, gi) => (
              <g key={gi}>
                <line x1={CENTER.x} y1={CENTER.y} x2={hub.x} y2={hub.y} stroke="rgba(252,85,85,0.5)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                {DOTS[gi].map((d, di) => (
                  <line key={di} x1={hub.x} y1={hub.y} x2={d.x} y2={d.y} stroke="rgba(51,204,204,0.3)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                ))}
              </g>
            ))}
          </svg>

          {HUBS.map((hub, gi) => (
            <span
              key={gi}
              aria-hidden="true"
              className="net-sig"
              style={{
                offsetPath: `polygon(${pct(CENTER.x)} ${pct(CENTER.y)}, ${pct(hub.x)} ${pct(hub.y)})`,
                animationDelay: `${-0.7 * gi}s`,
              }}
            />
          ))}

          <span
            aria-hidden="true"
            className="net-pulse absolute w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#FC5555,#b52a2a)] flex items-center justify-center text-sm font-black uppercase tracking-[0.06em] text-white"
            style={{ left: pct(CENTER.x), top: pct(CENTER.y) }}
          >
            Holoboard
          </span>

          {HUBS.map((hub, gi) => (
            <span
              key={gi}
              aria-hidden="true"
              className="absolute -translate-x-1/2 -translate-y-1/2 h-8 px-3 rounded-full bg-black/75 border border-hm-red/60 flex items-center text-[11px] font-bold uppercase tracking-[0.1em] text-white whitespace-nowrap"
              style={{ left: pct(hub.x), top: pct(hub.y) }}
            >
              {t.nodes[gi].short}
            </span>
          ))}

          {t.nodes.map((node, gi) =>
            node.entries.map((e, ei) => {
              const id = `${gi}-${ei}`;
              const active = id === sel;
              const d = DOTS[gi][ei];
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSel(id)}
                  aria-pressed={active}
                  aria-label={`${e.name}, ${e.org}`}
                  className="group absolute -translate-x-1/2 flex w-[17%] flex-col items-center gap-1.5 rounded-xl p-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-hm-turquoise"
                  style={{ left: pct(d.x), top: `calc(${pct(d.y)} - 12px)` }}
                >
                  <span
                    className={`rounded-full transition-all ${
                      active
                        ? 'w-4 h-4 bg-hm-red shadow-[0_0_0_6px_rgba(252,85,85,0.25),0_0_20px_rgba(252,85,85,0.8)]'
                        : 'w-3 h-3 bg-hm-turquoise shadow-[0_0_12px_rgba(51,204,204,0.8)] group-hover:scale-125'
                    }`}
                  />
                  <span className={`text-[11px] leading-tight text-center ${active ? 'text-white font-semibold' : 'text-gray-300 group-hover:text-white'}`}>
                    {e.org}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Mobil: aufklappbare Gruppen mit Chips, Panel darunter */}
        <div className="lg:hidden flex flex-col gap-3">
          {t.nodes.map((node, gi) => (
            <details
              key={node.title}
              open={gi === g}
              className="group rounded-[22px] border border-white/15 bg-white/[0.04] open:bg-white/[0.06]"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 [&::-webkit-details-marker]:hidden">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">{node.title}</span>
                <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs font-bold text-hm-turquoise">{node.entries.length}</span>
              </summary>
              <div className="flex flex-wrap gap-2 px-5 pb-5">
                {node.entries.map((e, ei) => {
                  const id = `${gi}-${ei}`;
                  const active = id === sel;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSel(id)}
                      aria-pressed={active}
                      aria-label={`${e.name}, ${e.org}`}
                      className={`min-h-[44px] max-w-full rounded-full border px-4 py-2 text-left text-sm transition-colors ${
                        active
                          ? 'border-hm-red bg-hm-red/15 text-white shadow-[0_0_30px_rgba(252,85,85,0.25)]'
                          : 'border-white/15 text-gray-300 hover:border-hm-turquoise hover:text-white'
                      }`}
                    >
                      {e.org}
                    </button>
                  );
                })}
              </div>
            </details>
          ))}
          <div className="mt-4">{panel}</div>
        </div>
      </div>
    </section>
  );
}
