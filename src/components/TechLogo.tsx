
import React from 'react';

interface TechLogoProps {
  size?: number;
  className?: string;
}

const TechLogo = ({ size = 40, className = '' }: TechLogoProps) => {
  return (
    <div className={`relative group ${className}`}>
      <img 
        src="/lovable-uploads/55481b70-d540-48c2-8a35-c4ef51b32a7d.png" 
        alt="Yeti Labs Tech Logo" 
        style={{ width: size, height: size }}
        className="rounded-[18%] shadow-xl border-4 border-yeti-blue bg-white p-1"
      />
      <div className="absolute inset-0 rounded-[18%] pointer-events-none border-2 border-transparent group-hover:border-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] border-blue-500"></div>
    </div>
  );
};

export default TechLogo;
