
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { smoothScroll } from '@/lib/utils';
import TechLogo from '@/components/TechLogo';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Journey', id: 'journey' },
  { name: 'Vision', id: 'vision' },
  { name: 'Connect', id: 'connect' },
];

const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, menu } = useI18n();
  const menuLabels = menu();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    smoothScroll(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-card shadow-lg border-b border-yeti-blue/40' 
            : 'bg-gradient-to-r from-white to-blue-50'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center space-x-3 group"
            >
              <TechLogo size={48} />
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold text-yeti-blue group-hover:text-purple-600 transition-colors duration-300 font-mono tracking-tight">
                  Yeti Labs
                </span>
                <span className="text-xs text-slate-500 font-mono tracking-wider">
                  {"</>"}
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative text-yeti-blue font-semibold hover:text-purple-600 transition-colors duration-300 group font-mono"
                >
                  <span className="text-xs text-slate-400 absolute -top-3 left-0 font-mono">
                    0{idx + 1}
                  </span>
                  {menuLabels[idx]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yeti-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>
            {/* Controls */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  className="appearance-none bg-white border-2 border-yeti-blue rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-yeti-blue font-mono"
                  value={lang}
                  onChange={e => setLang(e.target.value as any)}
                  style={{minWidth: 90}}
                >
                  <option value="en">EN</option>
                  <option value="ja">日本語</option>
                </select>
                <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yeti-blue pointer-events-none" />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} className="text-yeti-blue" /> : <Menu size={24} className="text-yeti-blue" />}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yeti-blue/10 to-purple-400/30 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-2xl transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-8 pt-24">
            <nav className="space-y-6">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block text-xl font-semibold text-yeti-blue hover:text-purple-600 transition-colors duration-300 font-mono"
                >
                  <span className="text-sm text-slate-400 block font-mono">0{idx + 1}</span>
                  {menuLabels[idx]}
                </button>
              ))}
            </nav>
            <div className="mt-8">
              <select
                className="appearance-none bg-white border-2 border-yeti-blue rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-yeti-blue font-mono"
                value={lang}
                onChange={e => setLang(e.target.value as any)}
                style={{minWidth: 90}}
              >
                <option value="en">EN</option>
                <option value="ja">日本語</option>
              </select>
              <Globe className="absolute right-4 top-[74px] h-4 w-4 text-yeti-blue pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernHeader;
