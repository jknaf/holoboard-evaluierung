import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { useT } from '../i18n';
import SectionHeader from './ui/SectionHeader';

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

const FIELD =
  'block w-full pl-11 pr-4 py-3 min-h-[44px] rounded-xl bg-black/40 border border-white/15 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-hm-turquoise focus:border-transparent transition-colors';
const LABEL = 'block text-sm font-medium text-gray-300 mb-2';
const ICON = 'h-5 w-5 text-gray-400';

export default function Contact() {
  const t = useT(T);
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-[#05070A] text-white py-24 lg:py-32 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:40px_40px]"
    >
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div className="flex flex-col gap-10">
          <SectionHeader index="05.3" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="dark" />
          <div className="border-l-2 border-hm-red pl-5">
            <p className="font-extrabold tracking-tight text-white">Prof. Dr. Joachim Knaf</p>
            <p className="text-gray-300 font-light">{t.role}</p>
            <p className="text-gray-300 font-light">{t.university}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8 md:p-10 rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md"
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
                <label htmlFor="name" className={LABEL}>{t.name}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User aria-hidden="true" className={ICON} />
                  </div>
                  <input type="text" id="name" autoComplete="name" className={FIELD} placeholder={t.namePlaceholder} required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={LABEL}>{t.email}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail aria-hidden="true" className={ICON} />
                  </div>
                  <input type="email" id="email" autoComplete="email" className={FIELD} placeholder={t.emailPlaceholder} required />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={LABEL}>{t.message}</label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                  <MessageSquare aria-hidden="true" className={ICON} />
                </div>
                <textarea id="message" rows={5} className={`${FIELD} resize-none`} placeholder={t.messagePlaceholder} required />
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                className="mt-1 w-5 h-5 shrink-0 rounded accent-hm-turquoise focus:outline-none focus:ring-2 focus:ring-hm-turquoise focus:ring-offset-2 focus:ring-offset-[#05070A]"
                required
              />
              <label htmlFor="privacy" className="text-sm text-gray-400 font-light leading-relaxed">
                {t.consent}
              </label>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] rounded-full bg-hm-red px-8 py-4 font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(252,85,85,0.35)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hm-turquoise focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A]"
            >
              {t.send}
              <Send aria-hidden="true" className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
