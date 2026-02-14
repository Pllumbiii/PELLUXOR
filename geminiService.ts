
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Pelluxor Innovation Assistant," a digital strategy expert for Pelluxor agency.
Pelluxor specializes in:
- Web Development (React, Next.js, futuristic UI)
- Social Media Marketing (Growth hacking, viral strategies)
- Creative Branding & Design (Minimalist and futuristic aesthetics)
- AI Automation (Custom LLM integrations, workflow automation)

Your tone: Innovative, professional, tech-forward, and helpful.
If asked about services, highlight Pelluxor's expertise in deep purple and electric blue aesthetics and high-performance engineering.
Keep responses concise and polished.
`;

export async function getAgencyAdvice(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        maxOutputTokens: 250,
      },
    });
    return response.text || "Pelluxor is ready to innovate with you. How can I help clarify our services?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The future is loading. Please feel free to explore our portfolio while I reconnect.";
  }
}
