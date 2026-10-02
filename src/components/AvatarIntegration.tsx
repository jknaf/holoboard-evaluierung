import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Video, Mic, MessageSquare, Sparkles } from 'lucide-react';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: "Technologie",
    title: "KI Avatar Integration",
    intro: "Der KI-Avatar bildet die menschliche Schnittstelle des Systems. Eine Besonderheit des Projekts: Während marktübliche Systeme auf Kopf-Schulter-Darstellungen beschränkt sind, wurde hier erstmals ein Ganzkörper-Avatar zu vertretbaren Kosten realisiert — eine eigenständige technische Innovation, die eine glaubwürdigere und räumlich wirksamere digitale Präsenz ermöglicht.",
    steps: [
      {
        title: "Ganzkörper-Avatar",
        desc: "Von der Videoaufnahme zur fotorealistischen Ganzkörper-Replika. Marktübliche Anbieter liefern Avatare von der Brust aufwärts — hier wurde erstmals der gesamte Körper überzeugend digital abgebildet."
      },
      {
        title: "Echtzeit-Video-Synthese",
        desc: "Generierung von Lippenbewegungen, Gestik und Körperhaltung passend zum gesprochenen Text — in Echtzeit, nicht vorproduziert."
      },
      {
        title: "Dialogfähigkeit durch Voice Agents",
        desc: "Natürliche Sprachinteraktion über Speech-to-Text und Text-to-Speech. Der Avatar hört zu, versteht und antwortet — kein Skript, echtes Gespräch."
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

const STEP_ICONS = [
  <Video className="w-6 h-6" />,
  <Sparkles className="w-6 h-6" />,
  <MessageSquare className="w-6 h-6" />,
];

export default function AvatarIntegration() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const t = useT(T);
  const steps = t.steps.map((st, i) => ({ ...st, icon: STEP_ICONS[i] }));

  return (
    <section id="avatar" ref={containerRef} className="py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-hm-blue rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hm-red rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">{t.eyebrow}</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">{t.title}</h3>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
              {t.intro}
            </p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-white/10 group-hover:border-hm-turquoise transition-all duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 tracking-tight">{step.title}</h4>
                    <p className="text-gray-400 leading-relaxed font-light text-lg">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[800px] rounded-3xl overflow-hidden border border-white/10 bg-black">
            <motion.div style={{ y: yImage }} className="absolute inset-0 h-[140%] -top-[20%]">
              <img 
                src="https://holoboard-assets.netlify.app/images/080-confluence_media-bildschirmfoto-2025-01-28-um-15.43.40.png" 
                alt={t.imageAlt} 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Overlay UI to simulate avatar processing */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-black/40 to-transparent">
              <div className="w-full max-w-sm space-y-4 backdrop-blur-md bg-black/40 p-6 rounded-2xl border border-white/10">
                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-hm-red w-2/3 animate-pulse" />
                </div>
                <div className="flex justify-between text-xs text-gray-400 font-mono tracking-widest uppercase">
                  <span>{t.processing}</span>
                  <span>68%</span>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                  <Mic className="w-5 h-5 text-hm-turquoise animate-pulse" />
                  <span className="text-sm text-white font-medium tracking-wide">{t.listening}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
