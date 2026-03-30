import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `
Du bist der offizielle KI-Assistent der Projektwebsite "Holoboard" an der Hochschule München.
Das Projekt wird von Prof. Dr. Joachim Knaf (Innovationsprofessur Lehre) geleitet.
Deine Aufgabe ist es, Besuchern der Website Fragen zum Projekt zu beantworten.

WICHTIGE PROJEKTINFORMATIONEN:
- Ziel: Forschung an KI-gestützten Lerntechnologien für interaktive Hochschullehre.
- Architektur: Lightboard 2.0, Holobox (räumliche Darstellung), Lokales LLM (für Datenschutz), RAG-System (für hochschulspezifisches Wissen), Tavus API (für die Avatar-Generierung).
- Phasen: 1. Ausgangsvision (Volumetrische Videos), 2. Exploration (LiDAR), 3. Wandel (Generative KI), 4. Konzept (Holoboard), 5. Ergebnisse (Prototyp).
- Ausblick: Die Zukunft des Projekts liegt in "KI-gestützten mündlichen Prüfungen", bei denen der Avatar als Prüfer fungiert und eine lokale KI die Auswertung übernimmt, um Skalierbarkeit und Datenschutz zu gewährleisten.

TONFALL:
Professionell, akademisch, innovativ, aber leicht verständlich. Antworte präzise und eher kurz (max. 3-4 Sätze pro Antwort, es sei denn, der Nutzer fragt nach Details). Nutze Markdown für Hervorhebungen.
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
  }

  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array required' });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Build contents from conversation history
    const contents = messages.map((msg: { role: string; text: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    // Set headers for streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const response = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      contents,
    });

    for await (const chunk of response) {
      const text = chunk.text;
      if (text) {
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error: any) {
    console.error('Chat API error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to generate response' });
    } else {
      res.end();
    }
  }
}
