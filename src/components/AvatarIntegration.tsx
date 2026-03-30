import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Video, Mic, MessageSquare, Sparkles } from 'lucide-react';

export default function AvatarIntegration() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const steps = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Digitale Replikas",
      desc: "Erstellung eines fotorealistischen digitalen Zwillings des Lehrenden basierend auf Videoaufnahmen."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Video-Generierung",
      desc: "Echtzeit-Synthese von Lippenbewegungen und Gestik passend zum generierten Text-Output."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Konversationssysteme",
      desc: "Integration von Speech-to-Text und Text-to-Speech für natürliche, fließende Dialoge."
    }
  ];

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
            <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Technologie</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">KI Avatar Integration</h3>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
              Der KI-Avatar bildet die menschliche Schnittstelle des Systems. Er ermöglicht eine natürliche, 
              dialogbasierte Interaktion, die weit über klassische Chatbots hinausgeht und die soziale 
              Präsenz in digitalen Lernumgebungen erhöht.
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
                src="https://holoboard-assets.netlify.app/images/081-confluence_media-bildschirmfoto-2025-01-28-um-18.22.56.png" 
                alt="Digitale Avatar Integration" 
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
                  <span>Processing Audio...</span>
                  <span>68%</span>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                  <Mic className="w-5 h-5 text-hm-turquoise animate-pulse" />
                  <span className="text-sm text-white font-medium tracking-wide">Listening to student query...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
