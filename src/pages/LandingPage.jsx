import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Search } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white pt-32 pb-24 px-6 font-['Inter'] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Hero Content - Editorial Voice */}
                <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                    <div className="inline-block px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-full">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Diplomacy Elevated</span>
                    </div>
                    <h1 className="text-6xl lg:text-[5rem] font-extrabold leading-[1.1] tracking-[-0.03em] font-['Manrope'] text-gradient-professional">
                        Transform <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Rants</span> Into <span className="text-white underline decoration-blue-500/30 underline-offset-8">Respect</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                        The definitive AI-powered communication engine for high-stakes workplace diplomacy. Express with precision, command with presence.
                    </p>
                    <div className="flex items-center gap-6 pt-4">
                        <Link to="/dashboard" className="px-10 py-5 bg-gradient-to-br from-blue-600 to-[#1a237e] hover:from-blue-500 hover:to-[#000666] rounded-2xl font-bold text-lg flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/20 group hover:-translate-y-1 active:scale-95">
                            Enter the Dashboard
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-sm font-bold text-white">4.9/5 Rating</span>
                            <span className="text-xs text-slate-500">Trusted by Professionals</span>
                        </div>
                    </div>
                </div>

                {/* Visual Representation - Layered Surfaces */}
                <div className="lg:w-1/2 relative animate-in fade-in zoom-in-95 duration-1000">
                    <div className="relative z-10 p-8 bg-[#1e293b]/50 backdrop-blur-3xl rounded-[2.5rem] border border-slate-800 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
                        <div className="space-y-6">
                            <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-700/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase font-mono italic">Emotional Input</span>
                                </div>
                                <p className="text-slate-400 font-medium">"This project is a disaster. Who approved this mess? Fix it now."</p>
                            </div>
                            
                            <div className="flex justify-center -my-3">
                                <div className="p-3 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] relative z-20">
                                    <Zap className="w-6 h-6 text-white fill-white" />
                                </div>
                            </div>
                            
                            <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,0.05)]">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                    <span className="text-[10px] font-bold text-emerald-500 uppercase font-mono italic">Professional Output</span>
                                </div>
                                <p className="text-white font-medium italic">"I've observed some areas for optimization in the current project flow. Let's collaborate to align this with our standard quality benchmarks."</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-24 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
                </div>
            </div>

            {/* Features Section - No-Line Sectioning */}
            <div className="max-w-7xl mx-auto mt-40 grid md:grid-cols-3 gap-12">
                <div className="space-y-4 group">
                    <div className="w-14 h-14 bg-slate-800/20 flex items-center justify-center rounded-2xl border border-slate-800 group-hover:border-blue-500/30 transition-all">
                        <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold font-['Manrope']">Corporate Shield</h3>
                    <p className="text-slate-500 leading-relaxed">Ensure every message maintains the highest level of professionalism, protecting your reputation.</p>
                </div>
                <div className="space-y-4 group">
                    <div className="w-14 h-14 bg-slate-800/20 flex items-center justify-center rounded-2xl border border-slate-800 group-hover:border-blue-500/30 transition-all">
                        <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold font-['Manrope']">Contextual Precision</h3>
                    <p className="text-slate-500 leading-relaxed">Our AI understands the nuance of workplace hierarchy and adjusts the tone with surgical accuracy.</p>
                </div>
                <div className="space-y-4 group">
                    <div className="w-14 h-14 bg-slate-800/20 flex items-center justify-center rounded-2xl border border-slate-800 group-hover:border-blue-500/30 transition-all">
                        <Search className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold font-['Manrope']">Conversion Vault</h3>
                    <p className="text-slate-500 leading-relaxed">Anonymized logs of your most effective transformations, allowing you to learn and grow as a communicator.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
