import React, { useState, useEffect } from 'react';
import { smoothScroll } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Journey', id: 'journey' },
  { name: 'Vision', id: 'vision' },
  { name: 'Background', id: 'background' },
  { name: 'Connect', id: 'connect' },
];

import { useI18n } from '@/lib/i18n';
import { Globe } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { lang, setLang, t } = useI18n();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    smoothScroll(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={() => handleNavClick('hero')} className="z-50">
          <img src="/lovable-uploads/5f1c40f8-4798-452e-8ba1-737f048eab9e.png" alt="The Yeti Labs Logo" className="h-10 w-10 transition-transform hover:scale-110 grayscale" />
        </a>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-black hover:text-gray-800 transition-colors duration-300 font-mono text-sm uppercase tracking-wide"
            >
              <span className="text-gray-500 font-bold">0{idx + 1}.</span> {t('menu')[idx]}
            </button>
          ))}
          <div className="ml-4 flex items-center">
            <Globe className="mr-2 w-5 h-5 text-black" />
            <select className="bg-transparent border border-black rounded px-2 py-1 text-sm cursor-pointer"
              value={lang}
              onChange={e => setLang(e.target.value as any)}
              aria-label={t('language')}
            >
              <option value="en">EN</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <select className="bg-transparent border border-black rounded px-2 py-1 text-xs" value={lang} onChange={e => setLang(e.target.value as any)}>
            <option value="en">EN</option>
            <option value="ja">日本語</option>
          </select>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black z-50">
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-2xl text-black hover:text-gray-800 transition-colors duration-300 font-mono"
              >
                <span className="text-gray-500 font-bold">0{idx + 1}.</span> {t('menu')[idx]}
              </button>
            ))}
            <div className="mt-8 flex items-center">
              <Globe className="mr-2 w-5 h-5 text-black" />
              <select className="bg-transparent border border-black rounded px-2 py-1 text-base"
                value={lang}
                onChange={e => setLang(e.target.value as any)}
              >
                <option value="en">EN</option>
                <option value="ja">日本語</option>
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
