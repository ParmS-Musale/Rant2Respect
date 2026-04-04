import React, { useState } from 'react';
import { Zap, Copy, Check, Shield, MessageSquare, History, Search } from 'lucide-react';

const Dashboard = () => {
    const [rant, setRant] = useState('');
    const [respect, setRespect] = useState('');
    const [tone, setTone] = useState('Formal');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [meterValue, setMeterValue] = useState(0);

    const transform = () => {
        if (!rant.trim()) return;
        setLoading(true);
        setMeterValue(30);
        
        setTimeout(() => {
          const mockTransformations = {
            'Executive': "Thank you for the update. I'd like to propose a strategic refinement to better align with our core objectives.",
            'Formal': "I have reviewed the current proposal and believe there is an opportunity to improve the approach for better project outcomes.",
            'Direct': "The current version has some performance gaps. I suggest we refocus on the primary requirements.",
            'Empathetic': "I understand the effort put into this, though I think we can make it even more impactful with some adjustments."
          };
          setRespect(mockTransformations[tone] || mockTransformations['Formal']);
          setLoading(false);
          setMeterValue(100);
        }, 1200);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(respect);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="min-h-screen bg-[#0f172a] text-white pt-24 pb-16 px-6 font-['Inter']">
            <div className="max-w-7xl mx-auto mt-12 space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold font-['Manrope'] mb-2">Message Converter</h2>
                        <p className="text-slate-400">Refine your tone and enhance your professional impact.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[600px]">
                    {/* Left Pane (Input) */}
                    <div className="flex-1 flex flex-col bg-[#1e293b]/50 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                        <div className="px-8 py-6 border-b border-slate-800 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500 font-mono tracking-widest uppercase">Input: Raw Rant</span>
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        </div>
                        <textarea 
                            value={rant}
                            onChange={(e) => setRant(e.target.value)}
                            placeholder="Type your frustrated message here... 'This is garbage!'"
                            className="flex-1 p-8 bg-transparent text-xl text-white focus:outline-none resize-none placeholder:text-slate-700 leading-relaxed"
                        />
                        <div className="p-8 bg-[#0f172a]/40 border-t border-slate-800 flex items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                                {['Formal', 'Executive', 'Direct', 'Empathetic'].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setTone(t)}
                                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${tone === t ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800 text-slate-500 hover:bg-slate-700'}`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                            <button 
                                onClick={transform}
                                disabled={loading}
                                className={`px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-600/20 ${loading ? 'opacity-50 cursor-not-allowed scale-95' : 'hover:-translate-y-0.5 active:scale-95'}`}
                            >
                                {loading ? 'Refining...' : 'Transform'}
                                <Zap className="w-5 h-5 fill-white" />
                            </button>
                        </div>
                    </div>

                    {/* Right Pane (Output) */}
                    <div className="flex-1 flex flex-col bg-[#1e293b]/30 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                        <div className="px-8 py-6 border-b border-slate-800 flex items-center justify-between">
                            <span className="text-xs font-bold text-emerald-500 font-mono tracking-widest uppercase">Output: Professional</span>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold text-slate-500 uppercase">Respect Meter</span>
                                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-emerald-500 transition-all duration-1000 ease-out" 
                                        style={{ width: `${meterValue}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex-1 p-8 text-xl leading-relaxed transition-all duration-500 ${respect ? 'text-white' : 'text-slate-700 italic'}`}>
                            {respect ? (
                                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                    {respect}
                                </div>
                            ) : "Your professional message will be generated here..."}
                        </div>
                        <div className="p-8 bg-[#0f172a]/20 border-t border-slate-800 flex items-center justify-end">
                            {respect && (
                                <button 
                                    onClick={copyToClipboard}
                                    className="px-8 py-4 bg-emerald-600/10 text-emerald-400 hover:bg-emerald-600/20 border border-emerald-600/20 rounded-2xl font-bold flex items-center gap-2 transition-all active:scale-95"
                                >
                                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                    {copied ? 'Copied to clipboard' : 'Copy Respect Message'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-6 bg-slate-800/10 rounded-2xl border border-slate-800/50">
                    <History className="w-6 h-6 text-slate-600 mb-3" />
                    <h4 className="text-sm font-bold text-slate-300 mb-1">Previous Tone</h4>
                    <p className="text-xs text-slate-500">Executive (Today, 2:00 PM)</p>
                </div>
                <div className="p-6 bg-slate-800/10 rounded-2xl border border-slate-800/50">
                    <Shield className="w-6 h-6 text-slate-600 mb-3" />
                    <h4 className="text-sm font-bold text-slate-300 mb-1">Safe Communication</h4>
                    <p className="text-xs text-slate-500">100% Private and Anonymous</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
