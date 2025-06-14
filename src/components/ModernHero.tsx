
import React from 'react';
import { ArrowRight, Globe, Users, Zap } from 'lucide-react';
import { smoothScroll } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';
import { translations } from '@/lib/i18n';

const MatrixEffect = () => (
  <div className="absolute inset-0 z-0 pointer-events-none select-none">
    <div className="matrix-parent h-full w-full overflow-hidden">
      <MatrixRain />
    </div>
  </div>
);

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Generates the visual matrix rain effect using canvas
const MatrixRain = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight / 1.22;
    let fontSize = 18;
    let columns = Math.floor(width / fontSize);
    let drops = Array.from({ length: columns }, () => Math.random() * height / fontSize);

    const draw = () => {
      ctx.fillStyle = 'rgba(249,250,255,0.12)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + "px monospace";
      ctx.fillStyle = "rgba(67,99,235,0.86)";
      for (let i = 0; i < drops.length; i++) {
        let char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (Math.random() > 0.965) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    animate();
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight / 1.22;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * height / fontSize);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: 0.28,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
};

const ModernHero = () => {
  const { t, lang } = useI18n();

  // Get heroStats from translations object directly
  const heroStats = React.useMemo(() => {
    if (translations && lang in translations) {
      return translations[lang]?.heroStats || translations["en"].heroStats;
    }
    // fallback to hardcoded values if SSR/missing
    return [
      { value: "3", label: lang === "ja" ? "国" : "Countries" },
      { value: "50+", label: lang === "ja" ? "クライアント" : "Clients" },
      { value: "100+", label: lang === "ja" ? "プロジェクト" : "Projects" }
    ];
  }, [lang]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 pb-0">
      {/* Matrix Effect underneath everything */}
      <MatrixEffect />
      {/* Gradient Blobs */}
      <div className="absolute inset-0 z-0">
        {/* blue gradient blob */}
        <div className="absolute top-28 left-20 w-72 h-72 bg-yeti-blue rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float"></div>
        {/* purple gradient blob */}
        <div className="absolute bottom-12 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float" style={{animationDelay: '1.7s'}}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/5 rounded-full px-6 py-2 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">{t('heroHi')}</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="gradient-text">Prem Regmi</span>
          </h1>

          {/* Subtitle (translated) */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 font-light leading-relaxed animate-fade-in-up max-w-3xl mx-auto" style={{animationDelay: '0.4s'}}>
            {t('heroSubtitle')}
          </h2>

          {/* Description (translated) */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            {t('heroDescription')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <button
              onClick={() => smoothScroll('about')}
              className="btn-primary group"
            >
              <span className="relative z-10 flex items-center justify-center">
                {lang === 'ja' ? t('exploreBtn') : t('exploreBtn')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => smoothScroll('connect')}
              className="btn-outline"
            >
              {t('connectBtn')}
            </button>
          </div>

          {/* Translated Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '1s'}}>
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-black rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? <Globe className="h-8 w-8 text-white"/> : index === 1 ? <Users className="h-8 w-8 text-white"/> : <Zap className="h-8 w-8 text-white"/>}
                </div>
                <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
