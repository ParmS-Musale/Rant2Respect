import React from 'react';
import { History, Search, ArrowRight, Shield, Zap, Copy, ExternalLink, Calendar } from 'lucide-react';

const Vault = () => {
    const history = [
        { id: 1, original: "What were you even thinking? This is garbage.", respect: "I'd like to propose a strategic refinement to better align with our core objectives.", tone: "Executive", date: "Today, 2:00 PM" },
        { id: 2, original: "I'm not doing this, it's not my job.", respect: "I believe there's an opportunity to improve the approach for better project outcomes.", tone: "Formal", date: "Yesterday, 10:30 AM" },
        { id: 3, original: "Stop talking and let me finish.", respect: "Thank you for that perspective. Could we perhaps refocus on the primary requirements first?", tone: "Direct", date: "Monday, 4:15 PM" },
    ];

    return (
        <div className="min-h-screen bg-[#0f172a] text-white pt-32 pb-24 px-6 font-['Inter'] relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/5 pb-12">
                    <div className="space-y-4">
                        <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest font-mono italic underline font-bold">Encrypted Archive</span>
                        </div>
                        <h2 className="text-5xl font-extrabold font-['Manrope'] tracking-tight">
                            Conversion <span className="text-slate-500">Vault</span>
                        </h2>
                        <p className="text-slate-400 max-w-md">Your history of professional transformations, archived with end-to-end privacy.</p>
                    </div>
                    <div className="flex items-center bg-slate-900/40 p-4 rounded-2xl border border-slate-800 w-full md:w-96 backdrop-blur-xl group focus-within:border-blue-500/50 transition-all">
                        <Search className="w-5 h-5 text-slate-600 mr-3 group-focus-within:text-blue-500 transition-colors" />
                        <input type="text" placeholder="Search archive..." className="bg-transparent text-sm text-white focus:outline-none w-full placeholder:text-slate-700" />
                    </div>
                </div>

                <div className="grid gap-8">
                  {history.map((item) => (
                    <div key={item.id} className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="p-10 bg-[#1e293b]/40 rounded-[2.5rem] border border-slate-800/60 backdrop-blur-3xl relative overflow-hidden transition-all duration-500 hover:border-blue-500/30">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-1/2 space-y-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                        <label className="text-[10px] font-bold text-slate-500 font-mono tracking-widest uppercase italic">The Rant</label>
                                    </div>
                                    <p className="text-slate-400 italic text-lg leading-relaxed">"{item.original}"</p>
                                </div>
                                <div className="flex items-center justify-center lg:w-16">
                                    <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="lg:w-1/2 space-y-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                        <label className="text-[10px] font-bold text-emerald-500 font-mono tracking-widest uppercase italic">The Respect</label>
                                    </div>
                                    <p className="text-white font-medium text-lg leading-relaxed tracking-tight underline-offset-4">{item.respect}</p>
                                </div>
                            </div>
                            
                            <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                                <div className="flex items-center gap-8">
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-blue-500" />
                                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest font-mono">{item.tone} Tone</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-slate-600" />
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">{item.date}</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button className="p-3 bg-slate-900/40 rounded-xl text-slate-500 hover:text-white border border-transparent hover:border-slate-700 transition-all">
                                        <Copy className="w-5 h-5" />
                                    </button>
                                    <button className="p-3 bg-slate-900/40 rounded-xl text-slate-500 hover:text-white border border-transparent hover:border-slate-700 transition-all">
                                        <ExternalLink className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    );
};

export default Vault;
