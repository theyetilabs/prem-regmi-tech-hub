import React from 'react';
import { Linkedin, Globe } from 'lucide-react';
import TechLogo from './TechLogo';
import { useI18n } from '@/lib/i18n';

const Footer = () => {
  const { t, lang } = useI18n();
  return (
    <footer className="bg-gradient-to-r from-yeti-blue to-purple-500 py-10 text-white relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pb-6 px-6">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <TechLogo size={54} />
          <span className="text-xl font-mono font-bold tracking-tight drop-shadow-lg">The Yeti Labs</span>
        </div>
        {/* Social links */}
        <div className="flex gap-4 items-center">
          <a href="https://www.linkedin.com/in/regmiprem/" className="hover:text-blue-200 hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
            <Linkedin size={28} />
          </a>
          <a href="https://theyetilabs.com/" className="hover:text-purple-200 hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
            <Globe size={28} />
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center text-white/90 font-mono pb-2">
        <span dangerouslySetInnerHTML={{
          __html: t('footer').replace('{year}', String(new Date().getFullYear()))
        }} />
      </div>
    </footer>
  );
};

export default Footer;
