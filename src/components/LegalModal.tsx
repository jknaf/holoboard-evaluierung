import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'impressum' | 'datenschutz' | null;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = {
    impressum: {
      title: "Impressum",
      body: (
        <div className="space-y-4 text-gray-600 font-light leading-relaxed">
          <p><strong>Angaben gemäß § 5 TMG</strong></p>
          <p>
            Hochschule für angewandte Wissenschaften München<br />
            Lothstraße 34<br />
            80335 München
          </p>
          <p>
            <strong>Vertreten durch:</strong><br />
            Prof. Dr. Joachim Knaf<br />
            Innovationsprofessur Lehre
          </p>
          <p>
            <strong>Kontakt:</strong><br />
            Telefon: +49 (0) 89 1265-0<br />
            E-Mail: kontakt@hm.edu
          </p>
          <p>
            <strong>Umsatzsteuer-ID:</strong><br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 811335517
          </p>
          <p>
            <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
            Prof. Dr. Joachim Knaf<br />
            Lothstraße 34<br />
            80335 München
          </p>
        </div>
      )
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      body: (
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Datenschutz auf einen Blick</h3>
            <p className="mb-2"><strong>Allgemeine Hinweise</strong></p>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h3>
            <p className="mb-2"><strong>Datenschutz</strong></p>
            <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            
            <p className="mb-2"><strong>Hinweis zur verantwortlichen Stelle</strong></p>
            <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
            Hochschule München<br />
            Prof. Dr. Joachim Knaf<br />
            Lothstraße 34<br />
            80335 München<br />
            E-Mail: kontakt@hm.edu</p>

            <p className="mb-2"><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong></p>
            <p className="mb-4">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Datenerfassung auf dieser Website</h3>
            <p className="mb-2"><strong>Cookies und Local Storage</strong></p>
            <p className="mb-4">Unsere Internetseiten verwenden so genannte „Cookies“ sowie den lokalen Speicher (Local Storage) Ihres Browsers. Diese Technologien richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.<br />
            Wir speichern Ihre Präferenzen (z.B. die Zustimmung zum Cookie-Banner) im Local Storage Ihres Browsers (Art. 6 Abs. 1 lit. f DSGVO bzw. Art. 6 Abs. 1 lit. a DSGVO bei Einwilligung).</p>

            <p className="mb-2"><strong>Kontaktformular</strong></p>
            <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Plugins und Tools</h3>
            <p className="mb-2"><strong>KI-Chatbot (Google Gemini API)</strong></p>
            <p className="mb-4">Diese Website nutzt zur Bereitstellung des interaktiven KI-Assistenten die Gemini API von Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Wenn Sie den Chatbot nutzen, werden Ihre Texteingaben an Server von Google übertragen und dort verarbeitet, um eine entsprechende Antwort zu generieren.</p>
            <p className="mb-4">Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie über unser Cookie-Banner oder durch die aktive Nutzung des Chatbots erteilen. Sie können diese Einwilligung jederzeit für die Zukunft widerrufen.</p>
            <p>Bitte beachten Sie, dass bei der Nutzung von Google-Diensten eine Datenübertragung in die USA nicht ausgeschlossen werden kann. Google verfügt über eine Zertifizierung nach dem EU-US Data Privacy Framework. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">https://policies.google.com/privacy</a>.</p>
          </section>
        </div>
      )
    }
  };

  return (
    <AnimatePresence>
      {isOpen && type && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-2xl font-bold text-gray-900">{content[type].title}</h2>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-500 transition-colors shadow-sm border border-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                {content[type].body}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
