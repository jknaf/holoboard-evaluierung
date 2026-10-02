import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: 'Kontakt',
    title: 'Lassen Sie uns ins Gespräch kommen',
    intro: 'Haben Sie Fragen zum Holoboard-Projekt, zur Innovationsprofessur oder Interesse an einer Zusammenarbeit? Wir freuen uns auf Ihre Nachricht.',
    role: 'Innovationsprofessur Lehre',
    university: 'Hochschule München',
    name: 'Name',
    namePlaceholder: 'Max Mustermann',
    email: 'E-Mail',
    emailPlaceholder: 'max@beispiel.de',
    message: 'Nachricht',
    messagePlaceholder: 'Ihre Nachricht an uns...',
    consent: 'Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer Datenschutzerklärung.',
    send: 'Nachricht senden',
    subject: (name: string) => `Holoboard-Anfrage von ${name}`,
    bodyEmail: 'E-Mail',
  },
  en: {
    eyebrow: 'Contact',
    title: "Let's talk",
    intro: 'Have a question about the Holoboard project or the Innovation Professorship, or interested in working with us? We look forward to hearing from you.',
    role: 'Innovation Professorship for Teaching',
    university: 'Munich University of Applied Sciences',
    name: 'Name',
    namePlaceholder: 'Jane Doe',
    email: 'Email',
    emailPlaceholder: 'jane@example.com',
    message: 'Message',
    messagePlaceholder: 'Your message...',
    consent: 'I consent to the information I provide in this contact form being collected and processed in order to respond to my enquiry. The data will be deleted once my enquiry has been dealt with. Note: you can withdraw your consent at any time, with effect for the future, by sending us an email. For detailed information on how we handle user data, please see our Privacy Policy.',
    send: 'Send message',
    subject: (name: string) => `Holoboard enquiry from ${name}`,
    bodyEmail: 'Email',
  },
};

export default function Contact() {
  const t = useT(T);
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
            <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">{t.eyebrow}</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{t.title}</h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              {t.intro}
            </p>
            
            <div className="space-y-6 mt-12">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Prof. Dr. Joachim Knaf</h4>
                <p className="text-gray-600 font-light">{t.role}</p>
                <p className="text-gray-600 font-light">{t.university}</p>
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
              const subject = encodeURIComponent(t.subject(name));
              const body = encodeURIComponent(`Name: ${name}\n${t.bodyEmail}: ${email}\n\n${message}`);
              window.location.href = `mailto:knaf@hm.edu?subject=${subject}&body=${body}`;
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t.name}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hm-red focus:border-transparent transition-colors"
                      placeholder={t.namePlaceholder}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hm-red focus:border-transparent transition-colors"
                      placeholder={t.emailPlaceholder}
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.message}</label>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hm-red focus:border-transparent transition-colors resize-none"
                    placeholder={t.messagePlaceholder}
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
                  {t.consent}
                </label>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-hm-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-sm hover:shadow-md"
              >
                {t.send}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
