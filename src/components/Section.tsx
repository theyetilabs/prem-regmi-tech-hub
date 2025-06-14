
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className }: SectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn('min-h-fit py-20 md:py-28 opacity-0', inView && 'animate-fade-in-up', className)}
    >
      <h2 className="section-heading">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
