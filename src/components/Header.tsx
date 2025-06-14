
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    smoothScroll(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={() => handleNavClick('hero')} className="z-50">
          <img src="/lovable-uploads/5f1c40f8-4798-452e-8ba1-737f048eab9e.png" alt="The Yeti Labs Logo" className="h-10 w-10 transition-transform hover:scale-110" />
        </a>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-light-slate hover:text-yeti-blue transition-colors duration-300 font-mono text-sm">
              <span className="text-yeti-blue">0{index + 1}.</span> {item.name}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-yeti-blue z-50">
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-light-navy flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-2xl text-lightest-slate hover:text-yeti-blue transition-colors duration-300 font-mono">
                <span className="text-yeti-blue">0{index + 1}.</span> {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
