
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface TechLogoProps {
  size?: number;
  className?: string;
}

const TechLogo = ({ size = 40, className = '' }: TechLogoProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={`relative group ${className}`}>
      <img 
        src="/lovable-uploads/55481b70-d540-48c2-8a35-c4ef51b32a7d.png" 
        alt="Yeti Labs Tech Logo" 
        className={`w-${size/4} h-${size/4} transition-all duration-300 group-hover:scale-110 ${
          theme === 'dark' ? 'filter invert brightness-0' : ''
        }`}
        style={{ width: size, height: size }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
    </div>
  );
};

export default TechLogo;
