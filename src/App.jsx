import React, { useState } from "react";
import { 
  MessageSquare, 
  Sparkles, 
  Copy, 
  Trash2, 
  Check, 
  Send,
  Zap,
  ShieldCheck,
  RotateCcw,
  AlertCircle
} from "lucide-react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

/**
 * Rant2Respect 
 * A premium tool for converting workplace rants into professional communication.
 */

// Initialize Gemini with adjusted safety settings and system instructions
const getModel = (toneLabel) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return null;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    return genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `You are a professional communication consultant. 
      Your task is to take a raw, frustrated workplace rant and rewrite it into a ${toneLabel} message.
      
      CRITICAL INSTRUCTIONS:
      1. DO NOT comment on the rant itself.
      2. REMOVE all insults, vulgarity, and aggressive language.
      3. Focus on the UNDERLYING issue (e.g., poor requirements, missed deadlines, lack of support).
      4. The output must be ready to send as an email or Slack message.
      5. Output ONLY the refined text. No intro or outro.`,
      safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      ],
    });
  } catch (e) {
    console.error("Gemini Initialization Error:", e);
    return null;
  }
};

const TONE_OPTIONS = [
  { id: "professional", label: "Professional", icon: ShieldCheck, color: "text-blue-400", bg: "bg-blue-400/10" },
  { id: "empathetic", label: "Empathetic", icon: Zap, color: "text-purple-400", bg: "bg-purple-400/10" },
  { id: "direct", label: "Direct", icon: Send, color: "text-orange-400", bg: "bg-orange-400/10" },
  { id: "calm", label: "Calm", icon: Check, color: "text-emerald-400", bg: "bg-emerald-400/10" },
];

function App() {
  const [rant, setRant] = useState("");
  const [selectedTone, setSelectedTone] = useState("professional");
  const [refined, setRefined] = useState("");
  const [isRefining, setIsRefining] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleRefine = async () => {
    if (!rant.trim() || isRefining) return;
    
    setIsRefining(true);
    setRefined("");
    setError("");

    const toneLabel = TONE_OPTIONS.find(t => t.id === selectedTone)?.label || "Professional";
    const model = getModel(toneLabel);
    
    if (!model) {
      setError("Gemini API Key missing or invalid. Please check your .env file and restart the server.");
      setIsRefining(false);
      return;
    }

    try {
      const prompt = `RANT: "${rant}"\n\nREWRITE AS ${toneLabel.toUpperCase()} MESSAGE:`;
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      
      if (!text) throw new Error("Empty response from AI");
      
      setRefined(text.trim().replace(/^["']|["']$/g, ''));
    } catch (err) {
      console.error("Transformation Error Details:", err);
      if (err.message?.includes("API_KEY_INVALID")) {
        setError("Invalid API Key. Please get a fresh key from Google AI Studio.");
      } else if (err.status === 404) {
        setError("AI Model not found. This might be a temporary Google service issue. Try again in a minute.");
      } else {
        setError(`AI Error: ${err.message || "Failed to process message"}`);
      }
    } finally {
      setIsRefining(false);
    }
  };

  const handleCopy = () => {
    if (!refined) return;
    navigator.clipboard.writeText(refined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setRant("");
    setRefined("");
    setError("");
    setIsRefining(false);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24">
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>Advanced AI Communication</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent italic">
            Rant<span className="text-indigo-500">2</span>Respect
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto">
            Real rants. Professional results. 
            Transform your frustration into influence.
          </p>
        </header>

        <section className="grid gap-8">
          <div className="glass rounded-2xl p-6 space-y-4 shadow-xl border border-white/5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                Raw Rant
              </label>
              <button onClick={handleReset} className="text-xs text-zinc-500 hover:text-red-400 transition-colors flex items-center gap-1">
                <Trash2 className="w-3 h-3" />
                Clear All
              </button>
            </div>
            <textarea
              value={rant}
              onChange={(e) => setRant(e.target.value)}
              placeholder="Venting time... don't hold back, we'll fix it later."
              className="w-full h-32 bg-zinc-950/50 border border-zinc-800 rounded-xl p-4 text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all resize-none shadow-inner"
            />
            
            <div className="pt-2">
              <span className="text-xs text-zinc-500 font-bold tracking-widest">TARGET TONE</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                {TONE_OPTIONS.map((tone) => {
                  const Icon = tone.icon;
                  return (
                    <button
                      key={tone.id}
                      onClick={() => setSelectedTone(tone.id)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                        selectedTone === tone.id ? "bg-zinc-800 border-indigo-500/50 text-white shadow-lg" : "bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:border-zinc-700"
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1 ${selectedTone === tone.id ? tone.color : "text-zinc-600"}`} />
                      <span className="text-xs font-medium">{tone.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleRefine}
              disabled={!rant.trim() || isRefining}
              className={`w-full group relative overflow-hidden flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                !rant.trim() || isRefining ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" : "bg-indigo-600 text-white shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]"
              }`}
            >
              {isRefining ? (
                <><RotateCcw className="w-5 h-5 animate-spin" /><span>Refining...</span></>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>RESPECT IT (AS {selectedTone.toUpperCase()})</span>
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm animate-in fade-in zoom-in-95">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {(refined || isRefining) && (
            <div className="glass rounded-2xl p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 shadow-2xl border border-white/5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-emerald-400 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Refined Professional Version
                </label>
                {refined && (
                  <button onClick={handleCopy} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700 hover:bg-zinc-700 transition-all">
                    {copied ? <><Check className="w-3.5 h-3.5" /><span className="text-xs font-medium text-emerald-400">Copied!</span></> : <><Copy className="w-3.5 h-3.5 text-zinc-400" /><span className="text-xs font-medium text-zinc-200">Copy Text</span></>}
                  </button>
                )}
              </div>
              <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-6 min-h-[140px] flex items-center">
                {isRefining ? (
                  <div className="space-y-3 w-full"><div className="h-4 bg-zinc-800/50 rounded animate-pulse w-full" /><div className="h-4 bg-zinc-800/50 rounded animate-pulse w-5/6" /><div className="h-4 bg-zinc-800/50 rounded animate-pulse w-2/3" /></div>
                ) : (
                  <p className="text-zinc-200 leading-relaxed text-lg italic whitespace-pre-wrap">{refined}</p>
                )}
              </div>
            </div>
          )}
        </section>

        <footer className="mt-24 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-xs tracking-wider">
          <p>© {new Date().getFullYear()} RANT2RESPECT. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-zinc-300">PRIVACY</a>
            <a href="#" className="hover:text-zinc-300">GEMINI POWERED</a>
            <a href="#" className="hover:text-zinc-300">V1.0</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
