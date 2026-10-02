import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../i18n';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'impressum' | 'datenschutz' | null;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const { lang } = useLang();

  const contentDe = {
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

  const notice = (
    <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
      This English version is provided for convenience only. The German version is legally binding.
    </p>
  );

  const contentEn = {
    impressum: {
      title: "Legal Notice",
      body: (
        <div className="space-y-4 text-gray-600 font-light leading-relaxed">
          {notice}
          <p><strong>Service provider pursuant to § 5 DDG (German Digital Services Act)</strong></p>
          <p>
            Hochschule für angewandte Wissenschaften München (Munich University of Applied Sciences)<br />
            Lothstraße 34<br />
            80335 München<br />
            Telephone: +49 89 1265-0<br />
            Email: kommunikation@hm.edu
          </p>
          <p>
            Munich University of Applied Sciences (HM) is a corporation under public law. It is legally represented by its President, Prof. Dr. Martin Leitner.
          </p>
          <p>
            <strong>VAT identification number</strong> pursuant to § 27 a of the German VAT Act (Umsatzsteuergesetz):<br />
            DE 235 059 152
          </p>
          <p>
            <strong>Supervisory authority responsible for the university:</strong><br />
            Bavarian State Ministry of Science and the Arts (Bayerisches Staatsministerium für Wissenschaft und Kunst)<br />
            Salvatorstraße 2<br />
            80333 München
          </p>
          <p>
            <strong>Person responsible for the content of this project website pursuant to § 18 (2) MStV (German Interstate Media Treaty):</strong><br />
            Prof. Dr. Joachim Knaf<br />
            Innovation Professorship for Teaching<br />
            Munich University of Applied Sciences (HM)<br />
            Lothstraße 34<br />
            80335 München
          </p>
          <p className="text-sm text-gray-500">
            Being named as “responsible for the content” refers solely to responsibility for the journalistic and editorial content of this project website under the Interstate Media Treaty. The controller within the meaning of data protection law is HM (see Privacy Policy).
          </p>

          <h3 className="text-base font-bold text-gray-900 pt-4">Disclaimer</h3>
          <p>
            <strong>Liability for content:</strong> The content of this website has been compiled with the utmost care. However, we cannot guarantee that it is accurate, complete or up to date. As a service provider, we are responsible under § 7 (1) DDG for our own content on these pages in accordance with general law. Under §§ 8 to 10 DDG, however, we as a service provider are not obliged to monitor third-party information that we transmit or store, or to investigate circumstances that indicate unlawful activity.
          </p>
          <p>
            <strong>Liability for links:</strong> This website contains links to external third-party websites over whose content we have no control. We therefore cannot accept any liability for such third-party content. Responsibility for the content of linked pages always lies with their respective provider or operator.
          </p>
          <p>
            <strong>Copyright:</strong> The content and works created by the site operators on these pages are subject to German copyright law. Third-party contributions are marked as such. Any reproduction, adaptation, distribution or other exploitation beyond the limits of copyright law requires the written consent of the respective author or creator.
          </p>
        </div>
      )
    },
    datenschutz: {
      title: "Privacy Policy",
      body: (
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          {notice}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Data protection at a glance</h3>
            <p>
              The following information gives a straightforward overview of what happens to your personal data when you visit this website. Personal data means any data that can be used to identify you personally. You will find detailed information on data protection in the sections below.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Controller</h3>
            <p>
              The controller within the meaning of the General Data Protection Regulation (GDPR) and other national data protection laws of the Member States is:
            </p>
            <p className="mt-2">
              Hochschule für angewandte Wissenschaften München (Munich University of Applied Sciences, HM)<br />
              Lothstraße 34<br />
              80335 München<br />
              Telephone: +49 89 1265-0<br />
              Email: kommunikation@hm.edu
            </p>
            <p className="mt-2">
              HM is a corporation under public law. It is legally represented by its President, Prof. Dr. Martin Leitner.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              The editorial content of this project website is managed by Prof. Dr. Joachim Knaf (Innovation Professorship for Teaching) on behalf of HM.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Data protection officer</h3>
            <p>
              You can contact HM's official data protection officer at:
            </p>
            <p className="mt-2">
              Data Protection Officer of Hochschule für angewandte Wissenschaften München<br />
              Lothstraße 34<br />
              80335 München<br />
              Telephone: +49 9951 99990-500<br />
              Email: datenschutzbeauftragter@hm.edu
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. SSL/TLS encryption</h3>
            <p>
              For security reasons and to protect the transmission of confidential content, this site uses SSL/TLS encryption. You can recognise an encrypted connection when the address in your browser changes from “http://” to “https://” and a padlock icon appears in the address bar.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. Server log files</h3>
            <p>
              When you visit this website, our hosting provider automatically records information sent by your browser in what are known as server log files. This comprises:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Browser type and browser version</li>
              <li>Operating system used</li>
              <li>Referrer URL</li>
              <li>Hostname of the accessing computer</li>
              <li>Time of the server request</li>
              <li>IP address (truncated or anonymised after a short period)</li>
            </ul>
            <p className="mt-2">
              This data is not combined with data from other sources. It is collected on the basis of Art. 6 (1) lit. f GDPR. The website operator has a legitimate interest in ensuring that its website is displayed free of technical errors and in optimising it, and the server log files must be collected for this purpose.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">6. Hosting and processors</h3>
            <p className="mb-2"><strong>Web hosting (Vercel)</strong></p>
            <p className="mb-4">
              This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (hereinafter “Vercel”). When you access the website, Vercel automatically collects various log data, including your IP address. Vercel is certified under the EU-US Data Privacy Framework. We have concluded a data processing agreement with Vercel pursuant to Art. 28 GDPR. Details: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">vercel.com/legal/privacy-policy</a>.
            </p>
            <p className="mb-2"><strong>Asset hosting (Netlify)</strong></p>
            <p className="mb-4">
              Images and videos on this website are delivered via Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA. When this media content is loaded, your IP address is transmitted to Netlify. Netlify is likewise certified under the EU-US Data Privacy Framework. Details: <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">netlify.com/privacy</a>.
            </p>
            <p className="mb-4">
              The fonts used on this website are hosted locally within the project, so no connection is made to external font services such as Google Fonts.
            </p>
            <p>
              The legal basis is Art. 6 (1) lit. f GDPR (legitimate interest in delivering the website reliably and with high performance).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">7. Cookies and local storage</h3>
            <p>
              This website does not use tracking cookies. Your browser’s local storage is used only to record that you have already acknowledged or dismissed the privacy notice (key <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">hm_cookie_consent</code>), so that it does not appear on every visit. This storage is technically necessary (Art. 6 (1) lit. f GDPR and § 25 (2) no. 2 TDDDG, the German Telecommunications Digital Services Data Protection Act).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">8. AI chatbot (Google Gemini API)</h3>
            <p className="mb-4">
              This website offers an optional interactive AI assistant. Technically, processing takes place via Google Cloud Vertex AI using the Gemini 2.5 Flash model. If you actively use the chatbot and send a message, the text you enter is processed on servers provided by Google in order to generate a response. Processing currently takes place in the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">us-central1</code> region, so a transfer of personal data to the USA cannot be ruled out. Google is certified under the EU-US Data Privacy Framework.
            </p>
            <p className="mb-4">
              You use this service solely on your own voluntary initiative. The legal basis for processing your input is your consent pursuant to Art. 6 (1) lit. a GDPR, which you give by actively sending a message to the chatbot. If you do not want Google to process your data, please do not use the chatbot.
            </p>
            <p>
              Further information: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">policies.google.com/privacy</a>
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">9. Storage period</h3>
            <p>
              Server log files are automatically deleted or anonymised after 14 days at the latest. Messages entered into the AI chatbot are not stored permanently on our servers; they are processed solely in order to answer your query. For details of Google’s retention policies for the Gemini API, please refer to the Google privacy policy linked above.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">10. Your rights as a data subject</h3>
            <p className="mb-2">
              You have the following rights at any time:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><strong>Access</strong> to the personal data stored about you (Art. 15 GDPR)</li>
              <li><strong>Rectification</strong> of inaccurate data (Art. 16 GDPR)</li>
              <li><strong>Erasure</strong> of your data (“right to be forgotten”, Art. 17 GDPR)</li>
              <li><strong>Restriction of processing</strong> (Art. 18 GDPR)</li>
              <li><strong>Data portability</strong> (Art. 20 GDPR)</li>
              <li><strong>Objection</strong> to processing (Art. 21 GDPR)</li>
              <li><strong>Withdrawal</strong> of any consent you have given (Art. 7 (3) GDPR)</li>
            </ul>
            <p>
              To exercise these rights, please contact the controller named above or HM's data protection officer.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">11. Right to lodge a complaint with a supervisory authority</h3>
            <p>
              Without prejudice to any other legal remedy, you have the right to lodge a complaint with a data protection supervisory authority. As HM is a Bavarian public body, the competent authority is the Bavarian State Commissioner for Data Protection:
            </p>
            <p className="mt-2">
              Der Bayerische Landesbeauftragte für den Datenschutz<br />
              Wagmüllerstraße 18<br />
              80538 München<br />
              Postal address: Postfach 22 12 19, 80502 München<br />
              Telephone: +49 89 212672-0<br />
              Email: poststelle@datenschutz-bayern.de<br />
              <a href="https://www.datenschutz-bayern.de" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">www.datenschutz-bayern.de</a>
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">12. Image credits</h3>
            <p className="mb-2">
              Most of the images and videos on this website originate from HM's Holoboard project; the rights to them are held by Prof. Dr. Joachim Knaf or HM.
            </p>
            <p className="mb-2">
              In addition, the “Starting Point” section uses two stock images published under the free <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline">Unsplash licence</a>:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Stock photo “Online teaching / digital distance”: photo by <em>Vitaly Gariev</em> / Unsplash</li>
              <li>Stock photo “Students in a lecture hall”: photo by <em>Vitaly Gariev</em> / Unsplash</li>
            </ul>
            <p>
              These images are used for illustrative purposes only and do not depict any members of HM.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Last updated: April 2026
            </p>
          </section>
        </div>
      )
    }
  };

  const content = lang === 'de' ? contentDe : contentEn;

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
                  aria-label={lang === 'de' ? 'Schließen' : 'Close'}
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
