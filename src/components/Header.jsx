import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, MessageSquare, History, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div >
            <img src="/favicon.svg" alt="Rant2Respect Logo" className="w-8 h-8 " />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Rant2Respect
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/dashboard" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Converter
          </Link>
          <Link to="/vault" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <History className="w-4 h-4" />
            Vault
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
            Get Started
          </button>
        </nav>

        <button className="md:hidden text-slate-300">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
