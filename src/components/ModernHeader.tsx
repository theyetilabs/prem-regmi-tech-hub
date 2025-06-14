
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/contexts/ThemeContext';
import { smoothScroll } from '@/lib/utils';
import TechLogo from '@/components/TechLogo';
import ThemeToggle from '@/components/ThemeToggle';

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
  const { theme } = useTheme();
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
            ? 'glass-card shadow-lg border-b border-gray-200 dark:border-gray-700' 
            : 'bg-transparent'
        } ${theme === 'dark' ? 'dark' : ''}`}
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
                <span className="text-xl font-bold text-black dark:text-white group-hover:text-blue-600 transition-colors duration-300 font-mono">
                  Yeti Labs
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono tracking-wider">
                  {'</>'}
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative text-black dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group font-mono"
                >
                  <span className="text-xs text-gray-400 absolute -top-3 left-0 font-mono">
                    0{idx + 1}
                  </span>
                  {menuLabels[idx]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              <div className="relative">
                <select
                  className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium text-black dark:text-white font-mono"
                  value={lang}
                  onChange={e => setLang(e.target.value as any)}
                >
                  <option value="en">EN</option>
                  <option value="ja">日本語</option>
                </select>
                <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} className="text-black dark:text-white" /> : <Menu size={24} className="text-black dark:text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } ${theme === 'dark' ? 'dark' : ''}`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-8 pt-24">
            <nav className="space-y-6">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block text-xl font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-mono"
                >
                  <span className="text-sm text-gray-400 block font-mono">0{idx + 1}</span>
                  {menuLabels[idx]}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernHeader;
