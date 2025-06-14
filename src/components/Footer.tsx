
import React from 'react';
import { Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://www.linkedin.com/in/regmiprem/" target="_blank" rel="noopener noreferrer" className="hover:text-yeti-blue transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://theyetilabs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yeti-blue transition-colors">
          <Globe size={24} />
        </a>
      </div>
      <p className="font-mono text-xs">
        Designed & Built by Prem Regmi with Lovable.
      </p>
    </footer>
  );
};

export default Footer;
