import React from 'react';
import { motion } from 'motion/react';
import { Network as NetworkIcon, Building2, Users, GraduationCap, Presentation } from 'lucide-react';

export default function Netzwerk() {
  const nodes = [
    { icon: <Building2 className="w-5 h-5" />, title: "Unternehmenskontakte", desc: "Technologiepartner und Industrieexperten" },
    { icon: <Users className="w-5 h-5" />, title: "Forschungspartner", desc: "Interdisziplinärer Austausch mit anderen Instituten" },
    { icon: <GraduationCap className="w-5 h-5" />, title: "Experteninterviews", desc: "Wissenstransfer mit KI- und Didaktik-Spezialisten" },
    { icon: <Presentation className="w-5 h-5" />, title: "Konferenzen", desc: "Präsentation von Zwischenergebnissen und Networking" }
  ];

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

        <div className="relative max-w-4xl mx-auto">
          {/* Central Node */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-hm-red rounded-full flex items-center justify-center text-white font-bold text-center shadow-xl z-10 border-4 border-white">
            Holoboard<br/>Projekt
          </div>

          {/* Connecting Lines (simplified with SVG) */}
          <svg className="absolute inset-0 w-full h-full -z-10 text-gray-200" style={{ minHeight: '400px' }}>
            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          </svg>

          {/* Surrounding Nodes */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-48 sm:gap-y-64 relative z-0 min-h-[400px] sm:min-h-[500px]">
            {nodes.map((node, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'items-end text-right' : 'items-start text-left'} ${index < 2 ? 'justify-end' : 'justify-start'}`}
              >
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 max-w-xs hover:border-hm-turquoise/50 transition-colors">
                  <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 text-hm-turquoise ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                    {node.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{node.title}</h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{node.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
