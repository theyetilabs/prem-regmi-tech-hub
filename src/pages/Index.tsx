
import React from 'react';
import ModernHeader from '@/components/ModernHeader';
import ModernHero from '@/components/ModernHero';
import ModernSection from '@/components/ModernSection';
import Footer from '@/components/Footer';
import { Linkedin, Globe, Briefcase, GraduationCap, Users, Target, Lightbulb, Award } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const Index = () => {
  const { t, lang } = useI18n();

  const journeySteps = [
    {
      year: "2008-2012",
      title: t("journeyStep1Title"),
      description: t("journeyStep1Desc"),
      icon: GraduationCap
    },
    {
      year: "2014-2017", 
      title: t("journeyStep2Title"),
      description: t("journeyStep2Desc"),
      icon: Globe
    },
    {
      year: "2018-2020",
      title: t("journeyStep3Title"),
      description: t("journeyStep3Desc"),
      icon: Briefcase
    },
    {
      year: "2021-Present",
      title: t("journeyStep4Title"),
      description: t("journeyStep4Desc"),
      icon: Target
    }
  ];

  const visionCards = [
    {
      icon: Lightbulb,
      title: t("visionCard1Title"),
      description: t("visionCard1Desc"),
    },
    {
      icon: Users,
      title: t("visionCard2Title"),
      description: t("visionCard2Desc"),
    },
    {
      icon: Award,
      title: t("visionCard3Title"),
      description: t("visionCard3Desc"),
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div>
        <ModernHeader />
        <ModernHero />

        <ModernSection id="about" heading={t('aboutTitle')} background="gray">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-mono">
                {t("aboutParagraph1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-mono">
                {t("aboutParagraph2")}
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.linkedin.com/in/regmiprem/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Linkedin className="mr-2 h-5 w-5" />
                  {t("linkedin")}
                </a>
                <a href="https://theyetilabs.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Globe className="mr-2 h-5 w-5" />
                  {t("website")}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="tech-border rounded-2xl p-1 animate-glow">
                <img 
                  src="/lovable-uploads/55e37f60-8432-43da-8cc4-fa4a371ff61b.png" 
                  alt="Prem Regmi" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
              {/* Matrix effect overlay */}
              <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>
            </div>
          </div>
        </ModernSection>

        <ModernSection id="journey" heading={t('journeyTitle')}>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 animate-gradient"></div>
            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative flex items-start space-x-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 animate-pulse-border">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1 glass-card rounded-xl p-6 group-hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    <div className="text-sm font-medium text-blue-600  mb-2 font-mono">{step.year}</div>
                    <h3 className="text-xl font-bold text-black  mb-3 font-mono">{step.title}</h3>
                    <p className="text-gray-700  font-mono">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModernSection>

        <ModernSection id="vision" heading={t('visionTitle')} background="gradient">
          <div className="grid md:grid-cols-3 gap-8">
            {visionCards.map((card, index) => (
              <div key={index} className="group">
                <div className="glass-card rounded-xl p-8 h-full group-hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <card.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-black  mb-4 font-mono">{card.title}</h3>
                  <p className="text-gray-700  leading-relaxed font-mono">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ModernSection>

        <ModernSection id="connect" heading={t('connectTitle')} background="gray">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-700  mb-8 leading-relaxed font-mono">
              {t("connectDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.linkedin.com/in/regmiprem/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Linkedin className="mr-2 h-5 w-5" />
                {t("connectOnLinkedin")}
              </a>
              <a href="https://theyetilabs.com/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Globe className="mr-2 h-5 w-5" />
                {t("visitYetiLabs")}
              </a>
            </div>
          </div>
        </ModernSection>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

// Map/country section has already been removed in previous edits
