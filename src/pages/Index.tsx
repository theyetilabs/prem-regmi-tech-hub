
import React from 'react';
import ModernHeader from '@/components/ModernHeader';
import ModernHero from '@/components/ModernHero';
import ModernSection from '@/components/ModernSection';
import YetiLabsMap from '@/components/YetiLabsMap';
import Footer from '@/components/Footer';
import { Linkedin, Globe, Briefcase, GraduationCap, Users, Target, Lightbulb, Award } from 'lucide-react';
import { smoothScroll } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

const Index = () => {
  const { t } = useI18n();

  const journeySteps = [
    {
      year: "2008-2012",
      title: "Foundation Years",
      description: "Bachelor's in Software Engineering at Gandaki College of Engineering and Science",
      icon: GraduationCap
    },
    {
      year: "2014-2017",
      title: "International Education",
      description: "Degree in Information Science from Oslo and Akershus University College",
      icon: Globe
    },
    {
      year: "2018-2020",
      title: "Industry Experience",
      description: "Roles at ClinchTech and Black Tech, COO at Mero Padhai",
      icon: Briefcase
    },
    {
      year: "2021-Present",
      title: "The Yeti Labs",
      description: "Founded and leading Nepal's premier tech consulting company",
      icon: Target
    }
  ];

  const visionCards = [
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Driving technological innovation that bridges global opportunities with local talent, creating sustainable solutions for Nepal's tech ecosystem."
    },
    {
      icon: Users,
      title: "Inclusive Growth",
      description: "Building an inclusive workforce that welcomes talent from all backgrounds, fostering diversity and equality in Nepal's tech sector."
    },
    {
      icon: Award,
      title: "Global Impact",
      description: "Positioning Nepal as a premier destination for tech talent and innovation, creating opportunities that benefit both local communities and global markets."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <ModernHeader />
      <ModernHero />

      <ModernSection id="about" heading="About Me" background="gray">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am Prem Regmi, the Founder and CEO of The Yeti Labs, a technology consulting and software development company dedicated to unlocking Nepal's potential as a global technology leader. Born and raised in Pokhara in the 1990s, I was captivated by the rapid evolution of technology during my formative years.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My international education and experiences have shaped my vision to bridge global tech opportunities with Nepal's talented workforce. My passion for social contribution drives my mission to create a skilled, inclusive workforce that can compete globally.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/in/regmiprem/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a href="https://theyetilabs.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Globe className="mr-2 h-5 w-5" />
                Visit Website
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
          </div>
        </div>
      </ModernSection>

      <ModernSection id="journey" heading="My Journey">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-black"></div>
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative flex items-start space-x-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-black rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="flex-1 glass-card rounded-xl p-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-sm font-medium text-blue-600 mb-2">{step.year}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModernSection>

      <ModernSection id="vision" heading="Leadership & Vision" background="gradient">
        <div className="grid md:grid-cols-3 gap-8">
          {visionCards.map((card, index) => (
            <div key={index} className="group">
              <div className="glass-card rounded-xl p-8 h-full group-hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ModernSection>

      <ModernSection id="yeti-labs" heading="The Yeti Labs: Global Reach">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 glass-card rounded-xl p-6 mb-8">
            <img 
              src="/lovable-uploads/5f1c40f8-4798-452e-8ba1-737f048eab9e.png" 
              alt="The Yeti Labs Logo" 
              className="h-16 w-16 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div className="text-left">
              <h3 className="text-2xl font-bold text-black mb-2">The Yeti Labs</h3>
              <p className="text-gray-700">Technology Consulting & Software Development</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            "We assist businesses from all over the world to create the software for the future. We come up with solutions that help you get to your goal faster while ensuring control and adaptability."
          </p>
        </div>
        <YetiLabsMap />
      </ModernSection>

      <ModernSection id="connect" heading="Let's Connect" background="gray">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Ready to explore how technology can drive social impact? Let's discuss opportunities to collaborate and build Nepal's tech future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.linkedin.com/in/regmiprem/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </a>
            <a href="https://theyetilabs.com/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Globe className="mr-2 h-5 w-5" />
              Visit The Yeti Labs
            </a>
          </div>
        </div>
      </ModernSection>

      <Footer />
    </div>
  );
};

export default Index;
