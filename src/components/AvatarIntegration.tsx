import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mic } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: "Technologie",
    title: "KI Avatar Integration",
    intro: "Der KI-Avatar bildet die menschliche Schnittstelle des Systems. Eine Besonderheit des Projekts: Während marktübliche Systeme auf Kopf-Schulter-Darstellungen beschränkt sind, wurde hier erstmals ein Ganzkörper-Avatar zu vertretbaren Kosten realisiert. Das ist eine eigenständige technische Innovation, die eine glaubwürdigere und räumlich wirksamere digitale Präsenz ermöglicht.",
    steps: [
      {
        title: "Ganzkörper-Avatar",
        desc: "Von der Videoaufnahme zur fotorealistischen Ganzkörper-Replika. Marktübliche Anbieter liefern Avatare von der Brust aufwärts, hier wurde erstmals der gesamte Körper überzeugend digital abgebildet."
      },
      {
        title: "Echtzeit-Video-Synthese",
        desc: "Generierung von Lippenbewegungen, Gestik und Körperhaltung passend zum gesprochenen Text, in Echtzeit statt vorproduziert."
      },
      {
        title: "Dialogfähigkeit durch Voice Agents",
        desc: "Natürliche Sprachinteraktion über Speech-to-Text und Text-to-Speech. Der Avatar hört zu, versteht und antwortet: kein Skript, echtes Gespräch."
      },
    ],
    imageAlt: "Digitale Avatar Integration",
    processing: "Processing Audio...",
    listening: "Listening to student query...",
  },
  en: {
    eyebrow: "Technology",
    title: "AI Avatar Integration",
    intro: "The AI avatar serves as the system's human interface. What sets the project apart is this: while commercially available systems are limited to head-and-shoulders views, it achieved a full-body avatar at reasonable cost for the first time. This is a technical innovation in its own right, enabling a more convincing digital presence with greater spatial impact.",
    steps: [
      {
        title: "Full-Body Avatar",
        desc: "From video footage to a photorealistic full-body replica. Commercial providers offer avatars from the chest up; here, for the first time, the entire body was convincingly rendered in digital form."
      },
      {
        title: "Real-Time Video Synthesis",
        desc: "Lip movements, gestures and posture are generated to match the spoken text, in real time rather than pre-recorded."
      },
      {
        title: "Conversational Capability via Voice Agents",
        desc: "Natural spoken interaction via speech-to-text and text-to-speech. The avatar listens, understands and responds: not a script, but a genuine conversation."
      },
    ],
    imageAlt: "Digital avatar integration",
    processing: "Processing audio...",
    listening: "Listening to student query...",
  },
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AvatarIntegration() {
  const t = useT(T);
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section id="avatar" className="relative py-24 lg:py-32 bg-[#F4F4F1] text-[#111111] overflow-hidden">
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24">
        <SectionHeader index="02.2" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="light" />

        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ol className="lg:col-span-5 flex flex-col gap-10">
            {t.steps.map((step, i) => (
              <motion.li key={i} {...reveal(i * 0.1)} className="flex gap-6 border-t border-gray-300 pt-8">
                <span aria-hidden="true" className="text-5xl lg:text-6xl font-black leading-none tracking-[-0.04em] text-hm-red tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl lg:text-2xl font-extrabold tracking-tight mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div
            {...reveal(0.15)}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-[#0b0b0b] aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[680px]"
          >
            <img
              src="https://holoboard-assets.netlify.app/images/080-confluence_media-bildschirmfoto-2025-01-28-um-15.43.40.png"
              alt={t.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />

            {/* Dekorative Status-Badges (Glas), simulieren die Avatar-Verarbeitung */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 flex flex-col items-start gap-3" aria-hidden="true">
              <div className="w-full max-w-xs rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-5 py-3 flex items-center gap-4">
                <span className="text-[11px] text-gray-300 font-mono tracking-widest uppercase whitespace-nowrap">{t.processing}</span>
                <span className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <span className="block h-full bg-hm-red w-2/3 motion-safe:animate-pulse" />
                </span>
              </div>
              <div className="rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-5 py-3 flex items-center gap-3">
                <Mic className="w-4 h-4 text-hm-turquoise motion-safe:animate-pulse" />
                <span className="text-sm text-white font-medium tracking-wide">{t.listening}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
