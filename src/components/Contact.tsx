import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Kontakt</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Lassen Sie uns ins Gespräch kommen</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              Haben Sie Fragen zum Holoboard-Projekt, zur Innovationsprofessur oder Interesse an einer Zusammenarbeit? 
              Wir freuen uns auf Ihre Nachricht.
            </p>
            
            <div className="space-y-6 mt-12">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Prof. Dr. Joachim Knaf</h4>
                <p className="text-gray-600 font-light">Innovationsprofessur Lehre</p>
                <p className="text-gray-600 font-light">Hochschule München</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.querySelector('#name') as HTMLInputElement).value;
              const email = (form.querySelector('#email') as HTMLInputElement).value;
              const message = (form.querySelector('#message') as HTMLTextAreaElement).value;
              const subject = encodeURIComponent(`Holoboard-Anfrage von ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\n${message}`);
              window.location.href = `mailto:knaf@hm.edu?subject=${subject}&body=${body}`;
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hm-red focus:border-transparent transition-colors"
                      placeholder="Max Mustermann"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hm-red focus:border-transparent transition-colors"
                      placeholder="max@beispiel.de"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hm-red focus:border-transparent transition-colors resize-none"
                    placeholder="Ihre Nachricht an uns..."
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacy"
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-hm-red border-gray-300 rounded focus:ring-hm-red"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600 font-light leading-relaxed">
                  Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer Datenschutzerklärung.
                </label>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-hm-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-sm hover:shadow-md"
              >
                Nachricht senden
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
