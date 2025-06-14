
import React, { useRef, useEffect } from 'react';

const NUM_PARTICLES = 45;

const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Tech/floating dots for hero background
const ParticlesBG = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight / 1.8;

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight / 1.8;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: NUM_PARTICLES }).map(() => ({
      x: random(0, w),
      y: random(0, h),
      r: random(2, 6),
      dx: random(-0.2, 0.2),
      dy: random(-0.2, 0.2),
      glow: random(0.5, 1),
    }));

    function animate() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(66,99,235,0.12)`;
        ctx.shadowColor = "#4263eb";
        ctx.shadowBlur = 12 * p.glow;
        ctx.fill();
        ctx.closePath();
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none select-none z-0"
      style={{ filter: 'blur(2px)' }}
      aria-hidden="true"
    />
  );
};

export default ParticlesBG;
