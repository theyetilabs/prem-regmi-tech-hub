
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  heading?: ReactNode;
}

const AnimatedSection = ({ id, className, children, heading }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative py-16 md:py-28 px-4 md:px-0 transition-all duration-700",
        "before:absolute before:left-2 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-yeti-blue/0 before:via-yeti-blue/60 before:to-yeti-blue/0 before:rounded",
        "overflow-x-clip",
        "opacity-0 translate-y-10",
        inView && "animate-fade-in-up opacity-100 translate-y-0",
        className
      )}
    >
      {heading && <h2 className="section-heading mb-12">{heading}</h2>}
      {children}
    </section>
  );
};

export default AnimatedSection;
