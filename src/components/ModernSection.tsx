
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface ModernSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  heading?: ReactNode;
  background?: 'white' | 'gray' | 'gradient';
}

const ModernSection = ({ 
  id, 
  className = '', 
  children, 
  heading, 
  background = 'white' 
}: ModernSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 to-white'
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-32 px-6 md:px-12 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            inView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {heading && (
            <div className="text-center mb-16">
              <h2 className="section-heading inline-block">{heading}</h2>
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default ModernSection;
