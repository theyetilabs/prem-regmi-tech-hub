
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { smoothScroll } from '@/lib/utils';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Journey', id: 'journey' },
  { name: 'Vision', id: 'vision' },
  { name: 'Background', id: 'background' },
  { name: 'Connect', id: 'connect' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { lang, setLang, menu } = useI18n();
  const menuLabels = menu();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    smoothScroll(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled ? "bg-white/60 shadow-lg backdrop-blur-md" : "bg-white/20"}
      `}
      style={{ borderBottom: "1px solid rgba(200,200,200,0.08)", backdropFilter: "blur(8px)" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16 relative">
        <a href="#hero" className="z-50 flex items-center group" onClick={() => handleNavClick('hero')}>
          <img src="/lovable-uploads/5f1c40f8-4798-452e-8ba1-737f048eab9e.png" alt="The Yeti Labs Logo" className="h-10 w-10 grayscale group-hover:scale-105 transition-transform" />
          <span className="ml-2 font-mono font-bold text-lg text-black group-hover:text-yeti-blue transition-colors hidden sm:block">
            Yeti Labs
          </span>
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative px-2 py-1 text-black font-mono uppercase tracking-wide
                transition-colors duration-250 hover:text-yeti-blue
                focus:text-yeti-blue
                after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yeti-blue after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left"
            >
              <span className="text-gray-400 font-bold">0{idx + 1}.</span> {menuLabels[idx]}
            </button>
          ))}
          <select
            className="ml-4 border border-black bg-transparent rounded px-2 py-1 font-mono text-sm"
            value={lang}
            onChange={e => setLang(e.target.value as any)}
            aria-label="Language"
          >
            <option value="en">EN</option>
            <option value="ja">日本語</option>
          </select>
        </nav>
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-1">
          <select
            className="border border-black bg-transparent rounded px-2 py-1 font-mono text-xs"
            value={lang}
            onChange={e => setLang(e.target.value as any)}
            aria-label="Language"
          >
            <option value="en">EN</option>
            <option value="ja">日本語</option>
          </select>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black z-50 p-2 rounded hover:bg-black/5 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Animated shadow line */}
        <div className={`absolute left-0 bottom-0 w-full h-0.5 transition-all duration-300 ${isScrolled ? "bg-yeti-blue/30" : "bg-transparent"}`}/>
      </div>
      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-xl transition-all duration-500 z-40
        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0 pointer-events-none'}
        shadow-xl`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-2xl text-black hover:text-yeti-blue transition-colors font-mono"
            >
              <span className="text-gray-400 font-bold">0{idx + 1}.</span> {menuLabels[idx]}
            </button>
          ))}
          <div className="mt-8">
            <select
              className="border border-black bg-transparent rounded px-2 py-1 font-mono text-base"
              value={lang}
              onChange={e => setLang(e.target.value as any)}
              aria-label="Language"
            >
              <option value="en">EN</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
