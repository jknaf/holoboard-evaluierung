import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ActionCue from './ui/ActionCue';
import { useT } from '../i18n';

// Backticks im Text werden zu <code>, damit Fachbegriffe in beiden Sprachen gleich gesetzt sind.
function r(text: string, size = 'text-sm') {
  return text.split('`').map((part, i) =>
    i % 2 ? <code key={i} className={`bg-gray-200 px-1.5 py-0.5 rounded ${size} font-mono text-gray-800`}>{part}</code> : part
  );
}

const T = {
  de: {
    eyebrow: "Technische Architektur",
    title: "Ein verteiltes Echtzeitsystem",
    hint: "Tippen Sie auf eine Komponente: vom gesprochenen Satz bis zur Antwort des Avatars.",
    rowTop: "Interaktion",
    rowBottom: "Wissen und Logik",
    panelEyebrow: "Komponente",
    nodes: [
      { id: "user", title: "User", sub: "Sprache, Mimik, Gestik", text: "Kein reiner Eingabepunkt, sondern ein kontinuierlicher Signalgeber: Sprache, Präsenz und Gestik fließen in die Verarbeitung ein.", tags: ["Eingang", "Multimodal"] },
      { id: "web", title: "Webplattform", sub: "Steuerung", text: "Zentrale Laufzeitumgebung für Sitzungen, Frontend-Logik, API-Kommunikation und Zustandswechsel.", tags: ["Kontrollschicht", "Echtzeit"] },
      { id: "tavus", title: "Tavus", sub: "Avatar in Echtzeit", text: "Avatarbasierte Echtzeit-Kommunikation: eine vollständige Conversational-Video-Infrastruktur, nicht bloß Videoausgabe.", tags: ["KI-Avatar", "Video"] },
      { id: "box", title: "Holobox", sub: "Ausgabe auf Glas", text: "Kein bloßes Displaygehäuse, sondern ein optisch-räumliches Interface mit eigenen physischen Randbedingungen.", tags: ["Glasscheibe", "Ausgabe"] },
      { id: "n8n", title: "n8n", sub: "Orchestrierung", text: "Die operative Kopplung zwischen Tool-Calling des Sprachmodells, RAG-Backend und der Rückgabe an den Avatar.", tags: ["No-/Low-Code", "Workflows"] },
      { id: "rag", title: "RAG + Vektordatenbank", sub: "Wissensschicht", text: "Liefert projektspezifische, institutionelle und studienbezogene Antworten aus eigenen Dokumenten.", tags: ["Wissensdatenbank", "Eigene Quellen"] },
      { id: "llm", title: "Lokales LLM", sub: "Ollama, gpt-oss:20b", text: "On-Premise-Modellpfad für Datenschutz, institutionelle Kontrolle und Offline-Demos.", tags: ["On-Premise", "Datenschutz"] },
    ],
    btnTitle: "Vollständiger technischer Bericht",
    btnSub: "8 Kapitel mit Architekturdiagrammen aufklappen",
    k001: "Technische Dokumentation: Systemarchitektur des Holoboards",
    k002: "2.1 User als multimodale Eingangsquelle",
    k003: "2.2 Webplattform als operative Kontrollschicht",
    k004: "2.3 Holobox als physisch-räumliche Ausgabeschicht",
    k005: "2.4 Tavus als avatarbasierte Echtzeit-CVI",
    k006: "2.5 Daily als Medien- und Event-Transport",
    k007: "2.6 `n8n` als No-/Low-Code-Orchestrierungsschicht",
    k008: "2.7 RAG-System und Vektordatenbank",
    k009: "2.8 Lokales LLM mit Ollama und `gpt-oss:20b`",
    k010: "2.9 LiveKit als alternative Agenten- und Transportarchitektur",
    k011: "Stand: 12. März 2026",
    k012: "Das Holoboard ist kein einzelnes Gerät, sondern ein verteiltes Echtzeitsystem für multimodale Mensch-Maschine-Interaktion. Die technische Besonderheit liegt nicht in der isolierten Nutzung einzelner Komponenten wie Avatar, Sprachmodell, Vektordatenbank oder transparentem Display, sondern in deren synchroner Kopplung unter Echtzeitbedingungen. Das System verbindet räumliche Darstellung in der Holobox, browserbasierte Interaktionslogik, avatarbasierte Videokommunikation, Retrieval-gestützte Wissensintegration, lokale Modellinferenz und workflowbasierte Orchestrierung.",
    k013: "Aus den vorliegenden Projektunterlagen ergibt sich ein Architekturmodell mit zwei technisch relevanten Ausprägungen:",
    k014: "Die Systemarchitektur ist deshalb am präzisesten als hybrides Echtzeit-Ökosystem zu beschreiben: Wahrnehmung, Sprachverarbeitung, Wissensabruf, Zustandssteuerung und räumliche Ausgabe sind entkoppelt implementiert, aber zur Laufzeit eng synchronisiert.",
    k015: "Der Nutzer ist im Holoboard keine reine Eingabeinstanz, sondern ein kontinuierlicher Signalgeber. In die Verarbeitung gehen gesprochene Sprache, prosodische Merkmale, Blickrichtung, sichtbare Reaktion, Präsenz im Kameraraum sowie gegebenenfalls Interaktion über Touch- oder Weboberflächen ein. In Tavus-basierten Szenarien werden diese Signale nicht nur transkribiert, sondern in der Perception-Schicht zusätzlich als visuelle und akustische Kontextsignale interpretiert.",
    k016: "Die Webplattform ist die zentrale Laufzeitumgebung für Sitzungserstellung, Frontend-Logik, API-Kommunikation, Event-Handling und Zustandswechsel. In den vorhandenen Implementierungen übernimmt sie insbesondere folgende Funktionen:",
    k017: "Damit ist die Webplattform die technisch kritische Vermittlungsschicht zwischen Tavus-Avatar, RAG-System, Workflow-Orchestrierung und Holobox-spezifischer Darstellung.",
    k018: "Die Holobox ist nicht nur Displaygehäuse, sondern ein optisch-räumliches Interface. Frühere Projektdokumente belegen, dass Geometrie, Hintergrundfarbe, Schattenwurf, Signallayout, Bilddrehung und getrennte Quellenführung unmittelbaren Einfluss auf die wahrgenommene Tiefenwirkung haben. Bereits 2023 wurde festgehalten, dass die Eingabequelle im Format `9:16`, um 90 Grad gegen den Uhrzeigersinn gedreht, bereitgestellt werden muss. Ebenso wurden zwei getrennte Signalpfade vorgesehen: ein Signal für Dozent bzw. Avatar mit Schreibanteilen und ein zweites für Whiteboard-, Folien- oder UI-Inhalte, die in der Box separat überlagert werden.",
    k019: "Hinzu kommt eine in `Processing` prototypisch ausgearbeitete lokale Ausgabelogik, die für das Verständnis der Holobox wesentlich ist. Die Sketches im Ordner `07_Demos_und_Experimente/Processing` zeigen, dass die Box früh als zustandsbasiertes Präsentationssystem modelliert wurde: mit Vollbildausgabe im rotierten Koordinatensystem, klickbaren Hotspots, Home- und Submenüs, Medienwechseln zwischen Holoboard-, Lernvideo- und Studienberatungsmodus sowie einem direkten Übergang in die externe Tavus-Webanwendung. In `HoloboardDemo.pde` ist diese Logik als explizite Zustandsmaschine (`MENU`, `STUDIENBERATUNG`, `HOLOBOARD`, `SUB_1`, `SUB_2`) umgesetzt; Interaktionsflächen werden nicht nur visualisiert, sondern über eine eigene 90-Grad-Rotationsfunktion geometrisch an das physische Display angepasst.",
    k020: "Auch die zweite Processing-Linie (`HEP_sketch_251017a.pde`) ist architektonisch relevant, weil sie die Holobox als zeitkritischen Medienrenderer behandelt. Dort werden Video und Audio bewusst getrennt verarbeitet, das Bild um 90 Grad rotiert, formatgerecht eingepasst, Audio/Video per Soft-Sync nachgeregelt und Schleifen ohne hartes Seek neu gestartet. Processing war damit nicht bloß Demonstrationssoftware, sondern eine frühe Rendering- und Interaktionsschicht zur Erprobung genau jener physisch-räumlichen Randbedingungen, die später in der Web-/Tavus-Architektur weitergeführt wurden.",
    k021: "Die Holobox ist deshalb als Rendering-Endpunkt mit physischen und softwareseitigen Randbedingungen zu behandeln. Zur Architektur gehören nicht nur APIs und Modelle, sondern auch Lichtführung, Keying, Overlay-Komposition, Audioausleitung, formatgenaue Bildtransformation, rotierte Interaktionsgeometrie und zustandsbasierte Mediensteuerung.",
    k022: "Tavus bildet die avatarbezogene Echtzeit-Kommunikationsschicht. Laut aktueller offizieller Dokumentation arbeitet Tavus im Full-Pipeline-Modus mit konfigurierbaren Layern für Transport, Perception, STT, LLM und TTS; die Interaktion mit der laufenden Konversation erfolgt über das Interactions Protocol auf Basis des Daily-Datenkanals. Aktuelle Tavus-Unterlagen nennen `raven-1` als empfohlenes Perception-Modell und `Phoenix-4` als aktuelle Realtime-Rendering-Basis für expressive, emotional gesteuerte Repliken.",
    k023: "Für das Holoboard ist Tavus damit nicht bloß Videoausgabe, sondern eine vollständige Conversational-Video-Infrastruktur mit:",
    k024: "Im belegten Implementierungsstand läuft der Avatar-Call über Daily. Der Browser erzeugt einen Daily-Frame, lädt die Gesprächssitzung und tritt ihr automatisch bei. Über denselben Kanal werden Tavus-Events als `app-message` empfangen und eigene Nachrichten zurück in die Konversation gesendet. Daily übernimmt damit im Holoboard die Transport- und Session-Ebene für Audio, Video und Interaktionsereignisse.",
    k025: "`n8n` ist in dieser Architektur keine Randkomponente, sondern die operative Kopplung zwischen LLM-Tool-Calling, RAG-Backend und Rückführung der Ergebnisse in die Livesitzung. Die lokale Integrationsdokumentation beschreibt exakt diesen Pfad: Tavus löst einen Tool-Call aus, das Frontend leitet ihn an einen `n8n`-Webhook weiter, `n8n` ruft das RAG-System auf und liefert einen Antwortkontext zurück, der anschließend wieder in Tavus eingespeist wird.",
    k026: "Technisch ist `n8n` hier aus drei Gründen relevant:",
    k027: "Das RAG-System ist die Wissensschicht für projektspezifische, institutionelle oder studienbezogene Antworten. In den vorhandenen Dokumenten ist Pinecone als Vektordatenbank benannt. Das System dient dazu, generative Antworten an kuratierte Dokumente zu binden, statt sich allein auf das interne Weltwissen des Sprachmodells zu verlassen. Für das Holoboard ist das entscheidend, weil die Anwendungsfälle stark hochschul- und projektspezifisch sind und Nachvollziehbarkeit wichtiger ist als rein dialogische Eloquenz.",
    k028: "Ein zusätzlicher technischer Grund für die externe RAG-Schicht ist die aktuelle Tavus-Produktlage: Die offizielle Tavus Knowledge Base unterstützt derzeit Dokumente vor allem für englische Inhalte. Für deutschsprachige Hochschul- und Projektdokumente ist daher eine externe RAG-Pipeline architektonisch plausibel und in diesem Projekt technisch sinnvoll.",
    k029: "Für lokale Inferenzszenarien ist ein On-Premise-Modellpfad über Ollama dokumentiert. `gpt-oss-20b` ist seit August 2025 offiziell als OpenAI-Open-Weight-Modell verfügbar und wird von Ollama als `gpt-oss:20b` lokal ausführbar bereitgestellt. Diese Schicht ist für Datenschutz, institutionelle Kontrolle, Offline-Demos, reproduzierbare Experimente und anpassbare Systemprompts relevant.",
    k030: "Technisch sinnvoll ist das lokale LLM im Holoboard vor allem in drei Rollen:",
    k031: "Dabei ist wichtig: In der Tavus-Full-Pipeline kann das antwortgenerierende LLM Tavus-hosted oder OpenAI-kompatibel extern sein. Das lokale Modell ersetzt deshalb nicht zwangsläufig Tavus, sondern erweitert die Gesamtarchitektur um eine souveräne, lokal betreibbare Intelligenzschicht.",
    k032: "Die Unterlagen enthalten zusätzlich eine technisch konsistente LiveKit-Variante. Lokal dokumentiert sind sowohl eine Komponentenübersicht als auch eine Windows-Checkliste mit `livekit-agents[tavus,openai,silero]`, `AvatarSession`, separater `.env`-Konfiguration und Python-basiertem Agent-Worker. Die offizielle LiveKit-Dokumentation bestätigt diese Integrationsrichtung: Tavus kann über das Avatar-Plugin in LiveKit Agents eingebunden werden, wenn die Persona im Tavus-Kontext auf `pipeline_mode: \"echo\"` und `transport_type: \"livekit\"` konfiguriert wird.",
    k033: "Architektonisch bedeutet das:",
    k034: "Die derzeit am besten belegte Pipeline des Holoboards lässt sich wie folgt beschreiben:",
    k035: "Der entscheidende technische Punkt ist hier die Verteilung der Verantwortung:",
    k036: "Genau diese Entkopplung macht die Architektur erweiterbar, erhöht aber auch die Latenz- und Fehleranforderungen an jede Zwischenschicht.",
    k037: "Für das Holoboard ist Tool-Calling der Übergabepunkt zwischen generativem Dialog und verifiziertem Wissen. Laut Tavus-Dokumentation werden Tool-Calls nicht serverseitig von Tavus selbst ausgeführt. Die Runtime muss im Frontend oder in einer eigenen Logikschicht auf entsprechende Events hören und die gewünschte Funktion außerhalb von Tavus ausführen. Die lokale Projektimplementierung entspricht genau diesem Muster.",
    k038: "Zusätzlich erlaubt Tavus neben klassischen LLM-Tool-Calls auch wahrnehmungsbasierte Tool-Auslösung. Mit `raven-1` stehen audio- und visuell ausgelöste Tools zur Verfügung. Damit ist perspektivisch nicht nur ein semantischer, sondern auch ein situationsbasierter Systempfad möglich, etwa wenn der Nutzer auf ein Objekt zeigt, einen bestimmten Zustand auf dem Screen präsentiert oder per Stimmlage Unsicherheit signalisiert.",
    k039: "Die Persona ist in diesem Zusammenhang kein statischer Prompt, sondern eine Konfigurationsoberfläche für:",
    k040: "Im Holoboard muss Persona-Steuerung deshalb immer zusammen mit RAG, Tool-Definitionen und Kontextinjektion gedacht werden.",
    k041: "Die räumliche Ausgabe folgt anderen Gesetzen als ein Standard-Videochat. Projektunterlagen aus 2023 und 2024 zeigen, dass Bildaufbereitung und Szenografie integrale Teile der Systemarchitektur sind. Relevant sind insbesondere:",
    k042: "Die lokale `call.html` bestätigt außerdem eine eigenständige Darstellungslogik mit Hintergrundvideo, Overlays und Tastatur-gesteuerten Zustandswechseln für Größen- und Perspektivwechsel. Die Holobox ist damit weder ein neutraler Monitor noch bloßes Gehäuse, sondern eine eigene Rendering-Zielumgebung mit dedizierter Kompositionslogik.",
    k043: "In frühen Entwicklungs- und Demophasen wurde Processing nicht nur zur Visualisierung, sondern als lokale Steuer- und Renderumgebung eingesetzt. Die Sketches belegen vier technisch relevante Funktionen:",
    k044: "Diese Processing-Schicht ist für die heutige Zielarchitektur nicht mehr die zentrale Laufzeitbasis, aber sie war der erste Ort, an dem die Holobox als kombinierter Raum aus Rendering, Navigation, Medienlogik und Übergang in eine KI-gestützte Gesprächsanwendung technisch konkretisiert wurde.",
    k045: "Die eigentliche Ingenieurleistung des Holoboards liegt in der Synchronisation heterogener Zeitskalen und Protokolle:",
    k046: "Aus diesen Randbedingungen ergeben sich die architektonisch relevanten Qualitätsziele:",
    k047: "Das Holoboard ist technisch am treffendsten als multimodale, verteilte Echtzeitarchitektur für räumlich eingebettete Wissensinteraktion zu beschreiben. Die operative Hauptlinie koppelt Tavus Full Pipeline, Daily-Datenkanal, browserseitige Eventlogik, `n8n`-Workflows und eine externe RAG-Schicht. Ergänzt wird sie durch lokale LLM-Ressourcen auf Ollama-Basis und eine dokumentierte LiveKit-Agentenvariante für weitergehende Agentenarchitekturen.",
    k048: "Gerade diese Schichtung macht das System technisch anspruchsvoll und forschungsrelevant: Das Holoboard verbindet nicht nur Avatar-Rendering mit LLMs, sondern integriert Wahrnehmung, Kontextsteuerung, Tool-Calling, dokumentengebundenes Wissen und räumliche Ausgabe in einer einzigen Lehr- und Interaktionsumgebung.",
    k049: "1. Architekturziel und Systemverständnis",
    k050: "2. Kernkomponenten und ihre technische Funktion",
    k051: "3. Echtzeit-Verarbeitungspipeline",
    k052: "4. Tool-Calling, Wahrnehmung und Kontextsteuerung",
    k053: "5. Räumliche Darstellung und holoboxspezifisches Rendering",
    k054: "6. Historische Prototypenschicht: Processing",
    k055: "7. Technische Hauptkomplexität",
    k056: "8. Architekturfazit",
    k057: "Eine belegte Hauptintegration auf Basis von Tavus, Daily, browserseitiger Event-Verarbeitung und `n8n` als Orchestrierungsschicht für Tool-Calls und RAG.",
    k058: "Eine zusätzlich dokumentierte Integrationsvariante mit LiveKit Agents und Tavus-Avatar-Plugin, die als alternative Transport- und Agent-Laufzeit für künftige Ausbaustufen dient.",
    k059: "Start einer Tavus-Konversation per API-Request mit `replica_id`, `persona_id`, Sprach- und Callback-Parametern.",
    k060: "Übergabe der `conversation_id` an die eigentliche Call-Ansicht.",
    k061: "Einbettung des Tavus-/Daily-Calls im Browser über `daily-js`.",
    k062: "Registrierung eines `app-message`-Listeners für Tavus Interaction Events.",
    k063: "Extraktion von Tool-Call-Namen und Argumenten.",
    k064: "Weiterleitung des Tool-Calls an einen `n8n`-Webhook.",
    k065: "Rückeinspeisung externer Antwortkontexte in die laufende Konversation mittels `conversation.echo` und `conversation.overwrite_llm_context`.",
    k066: "multimodaler Wahrnehmung,",
    k067: "avatarisierter Antwortausgabe,",
    k068: "Echtzeit-Ereignissen für Tool-Calls,",
    k069: "dynamischer Kontextaktualisierung während laufender Gespräche.",
    k070: "als robustes Eingangs-Gateway für Webhooks,",
    k071: "als standardisierbare Workflow-Schicht zwischen heterogenen Diensten,",
    k072: "als entkoppelte Ausführungsumgebung für Retrieval, Datenanreicherung und Rückantwort.",
    k073: "als kontrollierbare Inferenzinstanz für sensible oder interne Wissensbestände,",
    k074: "als Agenten- oder RAG-Backend außerhalb der Tavus-Standard-LLM-Ausführung,",
    k075: "als Fallback- oder Forschungsmodus für prototypische Lehr- und Demonstrationsszenarien.",
    k076: "Daily/Tavus ist die belegte Hauptstrecke der bisherigen Holobox-Integration.",
    k077: "LiveKit ist eine ausbaufähige alternative Agentenlaufzeit, insbesondere dann, wenn STT, LLM, TTS und Turn-Taking stärker in eine eigene Agentenarchitektur verlagert werden sollen.",
    k078: "Der Nutzer spricht zur Holobox oder interagiert mit dem Browser-Frontend.",
    k079: "Das Frontend erstellt über die Tavus-API eine neue Konversation und erhält `conversation_id` beziehungsweise `conversation_url`.",
    k080: "Ein eingebetteter Daily-Client verbindet den Browser mit dem Tavus-Gesprächsraum.",
    k081: "Die Tavus-Perception-Schicht interpretiert Audio- und Videosignale des Nutzers; im aktuellen Tavus-Stack ist `raven-1` das empfohlene Modell.",
    k082: "Die STT-Schicht transkribiert die Nutzereingabe.",
    k083: "Die LLM-Schicht entscheidet, ob sie direkt antwortet oder ein konfiguriertes Tool aufrufen muss.",
    k084: "Wenn ein Tool benötigt wird, sendet Tavus ein `conversation.tool_call`-Event über den Daily-Datenkanal.",
    k085: "Das Frontend empfängt dieses Event über `callFrame.on(\"app-message\", ...)`, extrahiert `properties.name` und `properties.arguments` und baut daraus einen strukturierten Request.",
    k086: "Dieser Request wird per HTTP `POST` an einen `n8n`-Webhook gesendet.",
    k087: "`n8n` ruft die nachgelagerte RAG- oder Agentenlogik auf, verarbeitet Retrieval, Datenanreicherung und Antwortbildung und liefert ein JSON-Ergebnis zurück, im belegten Stand mit einem Feld `ragContext`.",
    k088: "Das Frontend sendet den erhaltenen Text mit `conversation.echo` zurück an Tavus, damit die Replica den Inhalt unmittelbar aussprechen kann.",
    k089: "Zusätzlich wird derselbe Kontext mit `conversation.overwrite_llm_context` in die laufende Tavus-Konversation injiziert, damit Folgeäußerungen auf demselben Wissensstand aufbauen.",
    k090: "Tavus rendert Sprache, Lippenbewegung, Mimik und Reaktionsverhalten in Echtzeit.",
    k091: "Die Ausgabe wird innerhalb der Holobox perspektivisch korrekt, gedreht, skaliert und mit Hintergrund- bzw. Overlayebenen kombiniert dargestellt.",
    k092: "Tavus erkennt, wann ein Tool erforderlich ist.",
    k093: "Das Frontend führt das Tool nicht selbst fachlich aus, sondern delegiert an `n8n`.",
    k094: "`n8n` orchestriert RAG und externe Dienste.",
    k095: "Das Frontend übernimmt die Rückkopplung in die Livesitzung.",
    k096: "Rollenverständnis,",
    k097: "Antwortstil,",
    k098: "Tool-Schema,",
    k099: "Wissensgrenzen,",
    k100: "Reaktionslogik,",
    k101: "Modell- und Layerparameter.",
    k102: "erzwungene Bildrotation und Formattransformation für das Box-Display,",
    k103: "weißer statt schwarzer Hintergrund zur Unterstützung des Tiefeneindrucks,",
    k104: "harte statt diffuse Beleuchtung zur Erzeugung präziser Schatten,",
    k105: "Keying- und Freistellungslogik für Protagonist bzw. Avatar,",
    k106: "getrennte Overlay- und Hintergrundebenen,",
    k107: "externer Audioabgriff über Aktivlautsprecher statt alleiniger Box-Audioausgabe.",
    k108: "Modellierung der Holobox als zustandsbasiertes Interface mit Menüs, Hotspots und Rücksprunglogik.",
    k109: "Anpassung von Interaktionsgeometrien an die physisch gedrehte Displayachse über eigene Rotations- und Hit-Test-Funktionen.",
    k110: "Test von Medienwechseln zwischen lokal abgespielten Videos und externer Avatar-Webanwendung.",
    k111: "Untersuchung synchronisierter Audio-/Video-Wiedergabe unter Vollbild- und Rotationsbedingungen.",
    k112: "WebRTC-/Daily-Transport arbeitet paket- und verbindungsorientiert.",
    k113: "Tavus verarbeitet Wahrnehmung, Sprachmodell und Rendering in einer latenzkritischen CVI-Pipeline.",
    k114: "`n8n` arbeitet workflowbasiert und damit semantisch, aber nicht primär für ultrakurze Reaktionszeiten optimiert.",
    k115: "Das RAG-System benötigt Retrieval, Ranking, Kontextkomposition und Antwortübergabe.",
    k116: "Lokale LLMs bringen zusätzliche Rechen- und Speicheranforderungen mit sich.",
    k117: "Die Holobox erzwingt physische Constraints bei Bildformat, Freistellung, Licht und Audioausleitung.",
    k118: "minimale End-to-End-Latenz,",
    k119: "robuste Fehlerbehandlung bei ausbleibenden Tool-Responses,",
    k120: "klar definierte Zuständigkeiten zwischen Frontend, Tavus und `n8n`,",
    k121: "deterministische Kontextübergabe an das Sprachmodell,",
    k122: "präzise Bildkomposition für die Holobox,",
    k123: "kontrollierbarer Wechsel zwischen Cloud- und lokaler Intelligenzschicht.",
    k124: "Gesamtarchitektur und Systemverständnis",
    k125: "Multimodaler User",
    k126: "Webplattform",
    k127: "Holobox Architektur",
    k128: "Tavus Echtzeit-Avatar-Pipeline",
    k129: "n8n Orchestrierung",
    k130: "RAG Wissenssystem",
    k131: "Gesamtpipeline",
  },
  en: {
    eyebrow: "Technical architecture",
    title: "A distributed real-time system",
    hint: "Tap a component to follow the path from a spoken sentence to the avatar's answer.",
    rowTop: "Interaction",
    rowBottom: "Knowledge and logic",
    panelEyebrow: "Component",
    nodes: [
      { id: "user", title: "User", sub: "Speech, facial expression, gesture", text: "Not just an input point but a continuous source of signals: speech, presence and gesture all feed into processing.", tags: ["Input", "Multimodal"] },
      { id: "web", title: "Web platform", sub: "Control", text: "Central runtime for sessions, frontend logic, API communication and state transitions.", tags: ["Control layer", "Real time"] },
      { id: "tavus", title: "Tavus", sub: "Real-time avatar", text: "Avatar-based real-time communication: a complete conversational video infrastructure, not merely video output.", tags: ["AI avatar", "Video"] },
      { id: "box", title: "Holobox", sub: "Output on glass", text: "Not just a display enclosure but an optical, spatial interface with its own physical constraints.", tags: ["Glass pane", "Output"] },
      { id: "n8n", title: "n8n", sub: "Orchestration", text: "The operational link between the language model's tool calling, the RAG backend and the answer returned to the avatar.", tags: ["No-code/low-code", "Workflows"] },
      { id: "rag", title: "RAG + vector database", sub: "Knowledge layer", text: "Delivers project-specific, institutional and study-related answers from the project's own documents.", tags: ["Knowledge base", "Own sources"] },
      { id: "llm", title: "Local LLM", sub: "Ollama, gpt-oss:20b", text: "On-premises model path for data protection, institutional control and offline demos.", tags: ["On-premises", "Data protection"] },
    ],
    btnTitle: "Full technical report",
    btnSub: "Expand 8 chapters with architecture diagrams",
    k001: "Technical documentation: Holoboard system architecture",
    k002: "2.1 The user as a multimodal input source",
    k003: "2.2 The web platform as the operational control layer",
    k004: "2.3 The Holobox as the physical, spatial output layer",
    k005: "2.4 Tavus as an avatar-based real-time CVI",
    k006: "2.5 Daily for media and event transport",
    k007: "2.6 `n8n` as a no-code/low-code orchestration layer",
    k008: "2.7 RAG system and vector database",
    k009: "2.8 Local LLM with Ollama and `gpt-oss:20b`",
    k010: "2.9 LiveKit as an alternative agent and transport architecture",
    k011: "Last updated: 12 March 2026",
    k012: "The Holoboard is not a single device but a distributed real-time system for multimodal human-machine interaction. What makes it technically distinctive is not the use of individual components in isolation (avatar, language model, vector database or transparent display) but the way they are coupled synchronously under real-time conditions. The system brings together spatial presentation in the Holobox, browser-based interaction logic, avatar-based video communication, retrieval-augmented knowledge integration, local model inference and workflow-based orchestration.",
    k013: "The available project documentation points to an architectural model with two technically significant variants:",
    k014: "The system architecture is therefore best described as a hybrid real-time ecosystem: perception, speech processing, knowledge retrieval, state control and spatial output are implemented as decoupled components but tightly synchronised at runtime.",
    k015: "In the Holoboard, the user is not merely a source of input but a continuous source of signals. Processing draws on spoken language, prosodic features, gaze direction, visible reactions, presence within the camera's field of view and, where applicable, interaction via touch or web interfaces. In Tavus-based scenarios, these signals are not only transcribed but also interpreted by the perception layer as additional visual and acoustic context cues.",
    k016: "The web platform is the central runtime environment for session creation, frontend logic, API communication, event handling and state transitions. In the existing implementations, its main functions are:",
    k017: "This makes the web platform the technically critical intermediary between the Tavus avatar, the RAG system, workflow orchestration and Holobox-specific presentation.",
    k018: "The Holobox is not just a display enclosure but an optical, spatial interface. Earlier project documents show that geometry, background colour, cast shadows, signal layout, image rotation and separate source routing directly affect the perceived sense of depth. As early as 2023, it was specified that the input source must be supplied in `9:16` format, rotated 90 degrees anticlockwise. Two separate signal paths were also planned: one for the lecturer or avatar, including handwritten content, and a second for whiteboard, slide or UI content, which is overlaid separately within the box.",
    k019: "This is complemented by local output logic prototyped in `Processing`, which is key to understanding the Holobox. The sketches in the `07_Demos_und_Experimente/Processing` folder show that the box was modelled as a state-based presentation system from an early stage, with full-screen output in a rotated coordinate system, clickable hotspots, home and sub-menus, media switching between Holoboard, learning video and student advice modes, and a direct handover to the external Tavus web application. In `HoloboardDemo.pde`, this logic is implemented as an explicit state machine (`MENU`, `STUDIENBERATUNG`, `HOLOBOARD`, `SUB_1`, `SUB_2`); interactive areas are not only visualised but also mapped geometrically onto the physical display by a dedicated 90-degree rotation function.",
    k020: "The second Processing strand (`HEP_sketch_251017a.pde`) is also architecturally significant because it treats the Holobox as a time-critical media renderer. Here, video and audio are deliberately processed separately, the image is rotated by 90 degrees and scaled to fit the format, audio and video are kept aligned via soft sync, and loops restart without a hard seek. Processing was thus more than demonstration software: it served as an early rendering and interaction layer for testing the very physical and spatial constraints that were later carried over into the web/Tavus architecture.",
    k021: "The Holobox should therefore be treated as a rendering endpoint subject to both physical and software constraints. Its architecture encompasses not only APIs and models but also lighting design, keying, overlay compositing, audio routing, format-accurate image transformation, rotated interaction geometry and state-based media control.",
    k022: "Tavus provides the avatar's real-time communication layer. According to its current official documentation, Tavus runs in full-pipeline mode with configurable layers for transport, perception, STT, LLM and TTS; interaction with the live conversation is handled by the Interactions Protocol over the Daily data channel. Current Tavus documentation names `raven-1` as the recommended perception model and `Phoenix-4` as the current real-time rendering engine for expressive, emotionally driven replicas.",
    k023: "For the Holoboard, then, Tavus is not merely a video output but a complete conversational video infrastructure offering:",
    k024: "In the documented implementation, the avatar call runs over Daily. The browser creates a Daily frame, loads the conversation session and joins it automatically. The same channel is used to receive Tavus events as `app-message` and to send custom messages back into the conversation. Daily thus provides the transport and session layer for audio, video and interaction events in the Holoboard.",
    k025: "In this architecture, `n8n` is not a peripheral component but the operational link between LLM tool calling, the RAG backend and the delivery of results back into the live session. The local integration documentation describes exactly this flow: Tavus triggers a tool call, the frontend forwards it to an `n8n` webhook, `n8n` queries the RAG system and returns a response context, which is then fed back into Tavus.",
    k026: "`n8n` plays a technically important role here in three respects:",
    k027: "The RAG system is the knowledge layer for project-specific, institutional or study-related answers. The existing documents name Pinecone as the vector database. Its purpose is to ground generative answers in curated documents rather than relying solely on the language model's internal world knowledge. This is crucial for the Holoboard, as its use cases are highly specific to the university and the project, and traceability matters more than conversational eloquence alone.",
    k028: "There is a further technical reason for the external RAG layer, namely the current state of the Tavus product: the official Tavus Knowledge Base currently supports documents mainly for English-language content. For German-language university and project documents, an external RAG pipeline is therefore a plausible architectural choice and, in this project, a technically sensible one.",
    k029: "An on-premises model path via Ollama is documented for local inference scenarios. `gpt-oss-20b` has been officially available as an OpenAI open-weight model since August 2025, and Ollama provides it as `gpt-oss:20b` for local execution. This layer is relevant for data protection, institutional control, offline demos, reproducible experiments and customisable system prompts.",
    k030: "In the Holoboard, the local LLM makes most technical sense in three roles:",
    k031: "It is worth noting that in the Tavus full pipeline, the LLM that generates responses can either be hosted by Tavus or be an external, OpenAI-compatible model. The local model therefore does not necessarily replace Tavus; rather, it extends the overall architecture with a sovereign intelligence layer that can be run locally.",
    k032: "The documentation also includes a technically consistent LiveKit variant. Both a component overview and a Windows checklist are documented locally, covering `livekit-agents[tavus,openai,silero]`, `AvatarSession`, a separate `.env` configuration and a Python-based agent worker. The official LiveKit documentation confirms this integration approach: Tavus can be integrated into LiveKit Agents via the avatar plugin, provided the persona is configured in Tavus with `pipeline_mode: \"echo\"` and `transport_type: \"livekit\"`.",
    k033: "Architecturally, this means:",
    k034: "The best-documented Holoboard pipeline to date can be described as follows:",
    k035: "The key technical point here is how responsibility is distributed:",
    k036: "It is precisely this decoupling that makes the architecture extensible, but it also places greater demands on every intermediate layer in terms of latency and error handling.",
    k037: "For the Holoboard, tool calling is the handover point between generative dialogue and verified knowledge. According to the Tavus documentation, Tavus does not execute tool calls on its own servers. Instead, the runtime must listen for the relevant events in the frontend or in a separate logic layer and execute the required function outside Tavus. The project's local implementation follows exactly this pattern.",
    k038: "Beyond conventional LLM tool calls, Tavus also supports perception-based tool triggering. With `raven-1`, tools can be triggered by audio and visual cues. In future, this opens up a system path that is situational as well as semantic, for instance when the user points at an object, shows a particular state on screen or signals uncertainty through their tone of voice.",
    k039: "In this context, the persona is not a static prompt but a configuration interface for:",
    k040: "Persona control in the Holoboard must therefore always be considered alongside RAG, tool definitions and context injection.",
    k041: "Spatial output follows different rules from a standard video chat. Project documents from 2023 and 2024 show that image processing and scenography are integral to the system architecture. Particularly relevant are:",
    k042: "The local `call.html` file also confirms a dedicated presentation logic featuring background video, overlays and keyboard-controlled state changes for adjusting size and perspective. The Holobox is therefore neither a neutral monitor nor a mere enclosure but a rendering target in its own right, with its own compositing logic.",
    k043: "During early development and demo phases, Processing served not only for visualisation but also as a local control and rendering environment. The sketches demonstrate four technically relevant functions:",
    k044: "Although this Processing layer is no longer the core runtime of the current target architecture, it was where the Holobox first took concrete technical shape as a combined space for rendering, navigation, media logic and the transition into an AI-supported conversational application.",
    k045: "The Holoboard's real engineering achievement lies in synchronising heterogeneous timescales and protocols:",
    k046: "These constraints result in the following architecturally relevant quality objectives:",
    k047: "The Holoboard is most accurately described as a multimodal, distributed real-time architecture for spatially embedded knowledge interaction. Its primary operational path links the Tavus full pipeline, the Daily data channel, browser-side event logic, `n8n` workflows and an external RAG layer. This is complemented by local LLM resources based on Ollama and a documented LiveKit agent variant for more advanced agent architectures.",
    k048: "It is precisely this layering that makes the system technically demanding and of genuine research interest: the Holoboard does not simply connect avatar rendering to LLMs; it integrates perception, context control, tool calling, document-grounded knowledge and spatial output within a single teaching and interaction environment.",
    k049: "1. Architectural aims and system overview",
    k050: "2. Core components and their technical function",
    k051: "3. Real-time processing pipeline",
    k052: "4. Tool calling, perception and context control",
    k053: "5. Spatial presentation and Holobox-specific rendering",
    k054: "6. Historical prototype layer: Processing",
    k055: "7. The main technical challenge",
    k056: "8. Architectural conclusions",
    k057: "A documented primary integration based on Tavus, Daily, browser-side event processing and `n8n` as the orchestration layer for tool calls and RAG.",
    k058: "An additional documented integration variant using LiveKit Agents and the Tavus avatar plugin, which serves as an alternative transport and agent runtime for future expansion stages.",
    k059: "Starting a Tavus conversation via an API request with `replica_id`, `persona_id`, language and callback parameters.",
    k060: "Passing the `conversation_id` to the call view itself.",
    k061: "Embedding the Tavus/Daily call in the browser via `daily-js`.",
    k062: "Registering an `app-message` listener for Tavus Interaction Events.",
    k063: "Extracting tool call names and arguments.",
    k064: "Forwarding the tool call to an `n8n` webhook.",
    k065: "Feeding external response context back into the live conversation via `conversation.echo` and `conversation.overwrite_llm_context`.",
    k066: "multimodal perception,",
    k067: "avatar-rendered responses,",
    k068: "real-time tool call events,",
    k069: "dynamic context updates during live conversations.",
    k070: "as a robust inbound gateway for webhooks,",
    k071: "as a workflow layer between heterogeneous services that lends itself to standardisation,",
    k072: "as a decoupled execution environment for retrieval, data enrichment and response delivery.",
    k073: "as a controllable inference instance for sensitive or internal knowledge bases,",
    k074: "as an agent or RAG backend outside Tavus's standard LLM execution,",
    k075: "as a fallback or research mode for prototypical teaching and demonstration scenarios.",
    k076: "Daily/Tavus is the documented primary route of the Holobox integration to date.",
    k077: "LiveKit is an alternative agent runtime with room for expansion, particularly if STT, LLM, TTS and turn-taking are to be shifted further into a dedicated agent architecture.",
    k078: "The user speaks to the Holobox or interacts with the browser frontend.",
    k079: "The frontend creates a new conversation via the Tavus API and receives the `conversation_id` and `conversation_url`.",
    k080: "An embedded Daily client connects the browser to the Tavus conversation room.",
    k081: "The Tavus perception layer interprets the user's audio and video signals; in the current Tavus stack, `raven-1` is the recommended model.",
    k082: "The STT layer transcribes the user's input.",
    k083: "The LLM layer decides whether to respond directly or to call a configured tool.",
    k084: "If a tool is required, Tavus sends a `conversation.tool_call` event over the Daily data channel.",
    k085: "The frontend receives this event via `callFrame.on(\"app-message\", ...)`, extracts `properties.name` and `properties.arguments` and builds a structured request from them.",
    k086: "This request is sent to an `n8n` webhook via HTTP `POST`.",
    k087: "`n8n` invokes the downstream RAG or agent logic, handles retrieval, data enrichment and response generation, and returns a JSON result (in the documented version, with a `ragContext` field).",
    k088: "The frontend sends the returned text back to Tavus with `conversation.echo` so that the replica can speak it straight away.",
    k089: "The same context is also injected into the live Tavus conversation with `conversation.overwrite_llm_context`, so that subsequent utterances build on the same knowledge base.",
    k090: "Tavus renders speech, lip movements, facial expressions and reactive behaviour in real time.",
    k091: "The output is displayed within the Holobox in the correct perspective, rotated, scaled and combined with background and overlay layers.",
    k092: "Tavus recognises when a tool is required.",
    k093: "The frontend does not carry out the tool's actual task itself but delegates it to `n8n`.",
    k094: "`n8n` orchestrates RAG and external services.",
    k095: "The frontend feeds the results back into the live session.",
    k096: "role definition,",
    k097: "response style,",
    k098: "tool schema,",
    k099: "knowledge boundaries,",
    k100: "behavioural logic,",
    k101: "model and layer parameters.",
    k102: "enforced image rotation and format conversion for the box display,",
    k103: "a white rather than black background to enhance the impression of depth,",
    k104: "hard rather than diffuse lighting to cast crisp shadows,",
    k105: "keying and masking logic for the presenter or avatar,",
    k106: "separate overlay and background layers,",
    k107: "external audio output via active speakers instead of relying solely on the box's built-in audio.",
    k108: "Modelling the Holobox as a state-based interface with menus, hotspots and back navigation.",
    k109: "Mapping interaction geometry onto the physically rotated display axis using custom rotation and hit-test functions.",
    k110: "Testing media switching between locally played videos and the external avatar web application.",
    k111: "Investigating synchronised audio/video playback in full-screen mode and under rotation.",
    k112: "WebRTC/Daily transport is packet-based and connection-oriented.",
    k113: "Tavus handles perception, the language model and rendering in a latency-critical CVI pipeline.",
    k114: "`n8n` is workflow-based and therefore semantic, but it is not primarily optimised for ultra-low response times.",
    k115: "The RAG system has to handle retrieval, ranking, context assembly and response handover.",
    k116: "Local LLMs add further compute and memory demands.",
    k117: "The Holobox imposes physical constraints on image format, keying, lighting and audio routing.",
    k118: "minimal end-to-end latency,",
    k119: "robust error handling when tool responses fail to arrive,",
    k120: "clearly defined responsibilities between frontend, Tavus and `n8n`,",
    k121: "deterministic context handover to the language model,",
    k122: "precise image composition for the Holobox,",
    k123: "controlled switching between cloud-based and local intelligence layers.",
    k124: "Overall architecture and system overview",
    k125: "Multimodal user",
    k126: "Web platform",
    k127: "Holobox architecture",
    k128: "Tavus real-time avatar pipeline",
    k129: "n8n orchestration",
    k130: "RAG knowledge system",
    k131: "Overall pipeline",
  },
};

// Leitungen im Schema: wer nach rechts (h), rückwärts nach links (hr) oder nach unten (v) verbunden ist.
const LINKS: Record<string, ('h' | 'hr' | 'v')[]> = {
  user: ['h'], web: ['h', 'v'], tavus: ['h'], n8n: ['hr'], rag: ['hr'],
};

export default function Architektur() {
  const t = useT(T);
  const [showDetails, setShowDetails] = useState(false);
  const [sel, setSel] = useState('n8n');
  const current = t.nodes.find((n) => n.id === sel) ?? t.nodes[4];

  const card = (n: (typeof t.nodes)[number], bottom: boolean) => (
    <div key={n.id} className={`relative ${bottom ? 'md:mt-20' : ''}`}>
      {LINKS[n.id]?.map((dir) => <Link key={dir} dir={dir} />)}
      <button
        type="button"
        onClick={() => setSel(n.id)}
        aria-pressed={sel === n.id}
        aria-controls="architektur-panel"
        className={`relative flex h-full min-h-24 w-full cursor-pointer flex-col justify-center gap-1.5 rounded-2xl border p-4 text-left text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-turquoise md:p-[18px] ${
          sel === n.id
            ? 'border-hm-red bg-hm-red/15 shadow-[0_0_30px_rgba(252,85,85,0.25)]'
            : 'border-white/15 bg-white/5 hover:border-white/35 hover:bg-white/10'
        }`}
      >
        <span className="text-[15px] font-extrabold leading-tight tracking-tight md:text-base">{n.title}</span>
        <span className="text-xs text-gray-400">{n.sub}</span>
      </button>
    </div>
  );

  return (
    <section id="architektur" className="bg-white relative overflow-hidden">
      {/* Lebendiges Schema: dunkle Bühne mit Raster und türkisem Glühen */}
      <div className="relative overflow-hidden bg-[#05070A] py-24 text-white md:py-32">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[500px] w-[700px] max-w-full -translate-x-1/2 -translate-y-1/3 bg-[radial-gradient(closest-side,rgba(51,204,204,0.12),transparent)] xl:left-[38%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex max-w-3xl flex-col gap-4 md:mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-hm-turquoise"><span className="mr-2">02.1</span>{t.eyebrow}</p>
            <h2 className="text-4xl font-black leading-[0.95] tracking-tighter md:text-6xl">{t.title}</h2>
            <p className="text-lg font-light text-gray-400">{t.hint}</p>
          </div>

          <div className="flex flex-col gap-10 xl:flex-row xl:items-center">
            <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-4 md:gap-x-12 md:gap-y-4">
              <span className="col-span-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 md:col-span-4">{t.rowTop}</span>
              {t.nodes.slice(0, 4).map((n) => card(n, false))}
              <span className="col-span-2 mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 md:col-span-1 md:mt-20 md:self-center md:text-right">{t.rowBottom}</span>
              {t.nodes.slice(4).map((n) => card(n, true))}
            </div>

            <aside
              id="architektur-panel"
              aria-live="polite"
              className="flex min-h-[300px] flex-col gap-4 rounded-[22px] border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 backdrop-blur-md md:p-8 xl:w-[380px] xl:shrink-0"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-hm-red">{t.panelEyebrow}</span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-3xl font-black leading-[1.05] tracking-tight">{current.title}</h3>
                  <p className="text-base leading-relaxed text-gray-300">{current.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-hm-turquoise/40 px-3 py-1.5 text-xs font-semibold text-hm-turquoise">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </aside>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Toggle Button */}
        <div className="flex justify-center">
          {!showDetails ? (
            <motion.button
              onClick={() => setShowDetails(true)}
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut' }}
              className="px-6 py-4 rounded-xl bg-gray-900 text-white hover:bg-hm-red hover:scale-[1.02] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
            >
              <div className="text-sm font-bold mb-1">{t.btnTitle}</div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70">
                <span>{t.btnSub}</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </motion.button>
          ) : (
            <button
              onClick={() => setShowDetails(false)}
              className="rounded-full border border-gray-200 bg-white px-3 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <ActionCue mode="expand" expanded={showDetails} accent="red" />
            </button>
          )}
        </div>

        {/* Technical Deep Dive Section */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 64 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="max-w-4xl mx-auto text-left overflow-hidden"
            >
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
                
                {/* Document Header */}
                <div className="mb-12 border-b border-gray-200 pb-8">
                  <h4 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tighter">{t.k001}</h4>
                  <p className="text-sm text-gray-500 font-mono">{t.k011}</p>
                </div>

                {/* Section 1 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{t.k049}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">{t.k012}</p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k013}</p>
                  <ol className="list-decimal pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>{r(t.k057)}</li>
                    <li>{t.k058}</li>
                  </ol>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{t.k014}</p>
                  <figure className="my-12">
                    <img src="https://holoboard-assets.netlify.app/images/architektur-01-neu-gesamtarchitektur.png" alt={t.k124} className="w-full rounded-2xl shadow-md border border-gray-200" />
                    <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.k124}</figcaption>
                  </figure>
                </div>

                {/* Section 2 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">{t.k050}</h3>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-xl font-bold text-hm-red mb-4">{t.k002}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{t.k015}</p>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-02-neu-multimodaler-user.png" alt={t.k125} className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.k125}</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{t.k003}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k016}</p>
                      <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>{r(t.k059)}</li>
                        <li>{r(t.k060)}</li>
                        <li>{r(t.k061)}</li>
                        <li>{r(t.k062)}</li>
                        <li>{t.k063}</li>
                        <li>{r(t.k064)}</li>
                        <li>{r(t.k065)}</li>
                      </ul>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{t.k017}</p>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-03-neu-webplattform.png" alt={t.k126} className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.k126}</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-hm-turquoise mb-4">{t.k004}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k018)}</p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k019)}</p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k020)}</p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{t.k021}</p>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-04-neu-holobox.png" alt={t.k127} className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.k127}</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-purple-600 mb-4">{t.k005}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k022)}</p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k023}</p>
                      <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>{t.k066}</li>
                        <li>{t.k067}</li>
                        <li>{t.k068}</li>
                        <li>{t.k069}</li>
                      </ul>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-05-neu-tavus-pipeline.png" alt={t.k128} className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.k128}</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">{t.k006}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{r(t.k024)}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">{r(t.k007, 'text-xl')}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k025)}</p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k026)}</p>
                      <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>{t.k070}</li>
                        <li>{t.k071}</li>
                        <li>{t.k072}</li>
                      </ul>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-06-neu-n8n-orchestrierung.png" alt={t.k129} className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.k129}</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-emerald-600 mb-4">{t.k008}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k027}</p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{t.k028}</p>
                      <figure className="my-8">
                        <img src="https://holoboard-assets.netlify.app/images/architektur-07-neu-rag-system.png" alt={t.k130} className="w-full rounded-2xl shadow-md border border-gray-200" />
                        <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.k130}</figcaption>
                      </figure>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-hm-blue mb-4">{r(t.k009, 'text-xl')}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k029)}</p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k030}</p>
                      <ul className="list-disc pl-6 mb-4 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>{t.k073}</li>
                        <li>{t.k074}</li>
                        <li>{t.k075}</li>
                      </ul>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{t.k031}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">{t.k010}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k032)}</p>
                      <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k033}</p>
                      <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                        <li>{t.k076}</li>
                        <li>{t.k077}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{t.k051}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">{t.k034}</p>
                  
                  <ol className="list-decimal pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>{t.k078}</li>
                    <li>{r(t.k079)}</li>
                    <li>{t.k080}</li>
                    <li>{r(t.k081)}</li>
                    <li>{t.k082}</li>
                    <li>{t.k083}</li>
                    <li>{r(t.k084)}</li>
                    <li>{r(t.k085)}</li>
                    <li>{r(t.k086)}</li>
                    <li>{r(t.k087)}</li>
                    <li>{r(t.k088)}</li>
                    <li>{r(t.k089)}</li>
                    <li>{t.k090}</li>
                    <li>{t.k091}</li>
                  </ol>

                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k035}</p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>{t.k092}</li>
                    <li>{r(t.k093)}</li>
                    <li>{r(t.k094)}</li>
                    <li>{t.k095}</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{t.k036}</p>
                  <figure className="my-12">
                    <img src="https://holoboard-assets.netlify.app/images/architektur-00-neu-gesamtpipeline.png" alt={t.k131} className="w-full rounded-2xl shadow-md border border-gray-200" />
                    <figcaption className="text-sm text-gray-500 mt-3 text-center">{t.k131}</figcaption>
                  </figure>
                </div>

                {/* Section 4 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{t.k052}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k037}</p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k038)}</p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k039}</p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>{t.k096}</li>
                    <li>{t.k097}</li>
                    <li>{t.k098}</li>
                    <li>{t.k099}</li>
                    <li>{t.k100}</li>
                    <li>{t.k101}</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{t.k040}</p>
                </div>

                {/* Section 5 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{t.k053}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k041}</p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>{t.k102}</li>
                    <li>{t.k103}</li>
                    <li>{t.k104}</li>
                    <li>{t.k105}</li>
                    <li>{t.k106}</li>
                    <li>{t.k107}</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{r(t.k042)}</p>
                </div>

                {/* Section 6 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{t.k054}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k043}</p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>{t.k108}</li>
                    <li>{t.k109}</li>
                    <li>{t.k110}</li>
                    <li>{t.k111}</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">{t.k044}</p>
                </div>

                {/* Section 7 */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{t.k055}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k045}</p>
                  <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>{t.k112}</li>
                    <li>{t.k113}</li>
                    <li>{r(t.k114)}</li>
                    <li>{t.k115}</li>
                    <li>{t.k116}</li>
                    <li>{t.k117}</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{t.k046}</p>
                  <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 leading-relaxed font-light space-y-2">
                    <li>{t.k118}</li>
                    <li>{t.k119}</li>
                    <li>{r(t.k120)}</li>
                    <li>{t.k121}</li>
                    <li>{t.k122}</li>
                    <li>{t.k123}</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{t.k056}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">{r(t.k047)}</p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">{t.k048}</p>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

// Leitung mit laufendem Datenpunkt; nur ab md sichtbar, bei reduzierter Bewegung steht der Punkt in der Mitte.
function Link({ dir }: { dir: 'h' | 'hr' | 'v'; key?: string }) {
  const still = useReducedMotion();
  const vertical = dir === 'v';
  const path = ['0%', '15%', '85%', '100%'];
  if (dir === 'hr') path.reverse();
  const pos = vertical ? 'top' : 'left';
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute hidden bg-hm-turquoise/35 md:block ${
        vertical ? 'left-1/2 top-full h-24 w-px' : 'left-full top-1/2 h-px w-12'
      }`}
    >
      <motion.span
        className={`absolute size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hm-turquoise shadow-[0_0_10px_2px_rgba(51,204,204,0.8)] ${vertical ? 'left-1/2' : 'top-1/2'}`}
        style={still ? { [pos]: '50%' } : undefined}
        animate={still ? undefined : { [pos]: path, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.8, ease: 'linear', repeat: Infinity, times: [0, 0.15, 0.85, 1], delay: dir === 'hr' ? 0.6 : vertical ? 0.3 : 0 }}
      />
    </span>
  );
}
