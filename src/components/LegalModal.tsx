import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
          <p><strong>Diensteanbieter gemäß § 5 DDG</strong></p>
          <p>
            Hochschule für angewandte Wissenschaften München<br />
            Lothstraße 34<br />
            80335 München<br />
            Telefon: +49 89 1265-0<br />
            E-Mail: kommunikation@hm.edu
          </p>
          <p>
            Die Hochschule für angewandte Wissenschaften München ist eine Körperschaft des öffentlichen Rechts. Sie wird gesetzlich vertreten durch den Präsidenten Prof. Dr. Martin Leitner.
          </p>
          <p>
            <strong>Umsatzsteuer-Identifikationsnummer</strong> gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 235 059 152
          </p>
          <p>
            <strong>Zuständige Aufsichtsbehörde der Hochschule:</strong><br />
            Bayerisches Staatsministerium für Wissenschaft und Kunst<br />
            Salvatorstraße 2<br />
            80333 München
          </p>
          <p>
            <strong>Inhaltlich verantwortlich für diese Projektseite gemäß § 18 Abs. 2 MStV:</strong><br />
            Prof. Dr. Joachim Knaf<br />
            Innovationsprofessur Lehre<br />
            Hochschule München<br />
            Lothstraße 34<br />
            80335 München
          </p>
          <p className="text-sm text-gray-500">
            Die Nennung als „inhaltlich verantwortlich" bezieht sich ausschließlich auf die Verantwortung für die journalistisch-redaktionellen Inhalte dieser Projektseite gemäß Medienstaatsvertrag. Verantwortliche Stelle im Sinne des Datenschutzrechts ist die Hochschule München (siehe Datenschutzerklärung).
          </p>

          <h3 className="text-base font-bold text-gray-900 pt-4">Haftungsausschluss</h3>
          <p>
            <strong>Haftung für Inhalte:</strong> Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            <strong>Haftung für Links:</strong> Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p>
            <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
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
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie den nachfolgenden Abschnitten.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Verantwortliche Stelle</h3>
            <p>
              Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) sowie anderer nationaler Datenschutzgesetze der Mitgliedstaaten ist:
            </p>
            <p className="mt-2">
              Hochschule für angewandte Wissenschaften München<br />
              Lothstraße 34<br />
              80335 München<br />
              Telefon: +49 89 1265-0<br />
              E-Mail: kommunikation@hm.edu
            </p>
            <p className="mt-2">
              Die Hochschule für angewandte Wissenschaften München ist eine Körperschaft des öffentlichen Rechts. Sie wird gesetzlich vertreten durch ihren Präsidenten, Prof. Dr. Martin Leitner.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Inhaltlich-redaktionell betreut wird diese Projektseite durch Prof. Dr. Joachim Knaf (Innovationsprofessur Lehre) im Auftrag der Hochschule München.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Datenschutzbeauftragter</h3>
            <p>
              Den behördlichen Datenschutzbeauftragten der Hochschule München erreichen Sie unter:
            </p>
            <p className="mt-2">
              Datenschutzbeauftragter der Hochschule für angewandte Wissenschaften München<br />
              Lothstraße 34<br />
              80335 München<br />
              Telefon: +49 9951 99990-500<br />
              E-Mail: datenschutzbeauftragter@hm.edu
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. SSL-/TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und am Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. Server-Logfiles</h3>
            <p>
              Beim Aufruf dieser Website werden durch unseren Hostingprovider automatisch Informationen in sogenannten Server-Logfiles erfasst, die Ihr Browser übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (gekürzt bzw. anonymisiert nach kurzer Zeit)</li>
            </ul>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen findet nicht statt. Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung seiner Website — hierzu müssen die Server-Logfiles erfasst werden.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">6. Hosting und Auftragsverarbeiter</h3>
            <p className="mb-2"><strong>Webhosting (Vercel)</strong></p>
            <p className="mb-4">
              Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet (im Folgenden „Vercel"). Beim Aufruf der Website erhebt Vercel automatisch verschiedene Logdaten inklusive Ihrer IP-Adresse. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Wir haben mit Vercel einen Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO abgeschlossen. Details: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">vercel.com/legal/privacy-policy</a>.
            </p>
            <p className="mb-2"><strong>Asset-Hosting (Netlify)</strong></p>
            <p className="mb-4">
              Bilder und Videos dieser Website werden über Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA, ausgeliefert. Beim Laden dieser Medieninhalte wird Ihre IP-Adresse an Netlify übermittelt. Netlify ist ebenfalls nach dem EU-US Data Privacy Framework zertifiziert. Details: <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">netlify.com/privacy</a>.
            </p>
            <p className="mb-4">
              Die auf dieser Website verwendeten Schriftarten sind lokal in das Projekt eingebunden. Es erfolgt daher keine Verbindung zu externen Font-Diensten wie Google Fonts.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen, performanten Auslieferung der Website).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">7. Cookies und Local Storage</h3>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Im Local Storage Ihres Browsers wird ausschließlich gespeichert, dass Sie den Datenschutzhinweis bereits zur Kenntnis genommen bzw. geschlossen haben (Schlüssel <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">hm_cookie_consent</code>), damit er nicht bei jedem Besuch erneut erscheint. Diese Speicherung ist technisch notwendig (Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 Nr. 2 TDDDG).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">8. KI-Chatbot (Google Gemini API)</h3>
            <p className="mb-4">
              Diese Website bietet einen optionalen interaktiven KI-Assistenten an. Die Verarbeitung erfolgt technisch über Google Cloud Vertex AI mit dem Modell Gemini 2.5 Flash. Wenn Sie den Chatbot aktiv nutzen und eine Nachricht absenden, werden Ihre Texteingaben an von Google bereitgestellte Server verarbeitet, um eine Antwort zu generieren. Die Verarbeitung erfolgt derzeit in der Region <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">us-central1</code>; eine Übermittlung personenbezogener Daten in die USA kann daher nicht ausgeschlossen werden. Google verfügt über eine Zertifizierung nach dem EU-US Data Privacy Framework.
            </p>
            <p className="mb-4">
              Die Nutzung dieses Dienstes erfolgt ausschließlich auf Ihre freiwillige Initiative hin. Rechtsgrundlage für die Verarbeitung Ihrer Eingaben ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, die Sie durch das aktive Absenden einer Nachricht an den Chatbot erteilen. Wenn Sie keine Datenverarbeitung durch Google wünschen, nutzen Sie den Chatbot bitte nicht.
            </p>
            <p>
              Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">policies.google.com/privacy</a>
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">9. Speicherdauer</h3>
            <p>
              Server-Logfiles werden nach maximal 14 Tagen automatisch gelöscht oder anonymisiert. Eingaben in den KI-Chatbot werden nicht dauerhaft auf unseren Servern gespeichert; die Verarbeitung erfolgt lediglich zur Beantwortung Ihrer Anfrage. Speichervorgaben durch Google für die Gemini API entnehmen Sie der oben verlinkten Google-Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">10. Ihre Rechte als betroffene Person</h3>
            <p className="mb-2">
              Sie haben jederzeit das Recht auf:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><strong>Auskunft</strong> über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
              <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
              <li><strong>Löschung</strong> Ihrer Daten („Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
              <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
              <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li><strong>Widerruf</strong> einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Hierfür wenden Sie sich bitte an die oben genannte verantwortliche Stelle oder den Datenschutzbeauftragten der Hochschule München.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">11. Beschwerderecht bei der Aufsichtsbehörde</h3>
            <p>
              Unbeschadet anderweitiger Rechtsbehelfe haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Da die Hochschule München eine bayerische öffentliche Stelle ist, ist hierfür der Bayerische Landesbeauftragte für den Datenschutz zuständig:
            </p>
            <p className="mt-2">
              Der Bayerische Landesbeauftragte für den Datenschutz<br />
              Wagmüllerstraße 18<br />
              80538 München<br />
              Postanschrift: Postfach 22 12 19, 80502 München<br />
              Telefon: +49 89 212672-0<br />
              E-Mail: poststelle@datenschutz-bayern.de<br />
              <a href="https://www.datenschutz-bayern.de" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">www.datenschutz-bayern.de</a>
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">12. Bildnachweise</h3>
            <p className="mb-2">
              Die meisten Bilder und Videos auf dieser Website stammen aus dem Holoboard-Projekt der Hochschule München und liegen bei Prof. Dr. Joachim Knaf bzw. der Hochschule München.
            </p>
            <p className="mb-2">
              Darüber hinaus werden in der Sektion „Ausgangspunkt" zwei Symbolbilder verwendet, die unter der freien <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">Unsplash-Lizenz</a> stehen:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Symbolfoto „Onlinelehre / digitale Distanz" — Foto: <em>Vitaly Gariev</em> / Unsplash</li>
              <li>Symbolfoto „Studierende im Hörsaal" — Foto: <em>Vitaly Gariev</em> / Unsplash</li>
            </ul>
            <p>
              Die Aufnahmen dienen ausschließlich illustrativen Zwecken und stellen keine Personen der Hochschule München dar.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Stand: April 2026
            </p>
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
