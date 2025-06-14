
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobeCanvas from '@/components/Globe';
import Section from '@/components/Section';
import { Linkedin, Globe, Briefcase, GraduationCap, Users } from 'lucide-react';
import { smoothScroll } from '@/lib/utils';

const Index = () => {
  return (
    <div className="bg-dark-navy">
      <Header />
      <main className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-start text-left">
            <GlobeCanvas />
            <div className="relative z-10">
                <p className="font-mono text-yeti-blue mb-4">Hi, my name is</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate">
                    Prem Regmi.
                </h1>
                <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate">
                    Transforming Nepal into a Global Tech Hub.
                </h2>
                <p className="mt-6 max-w-xl text-lg">
                    I'm the Founder and CEO of The Yeti Labs, a technology consulting and software development company dedicated to unlocking Nepal's potential as a global technology leader.
                </p>
                <button
                    onClick={() => smoothScroll('connect')}
                    className="mt-12 font-mono text-yeti-blue border border-yeti-blue rounded px-8 py-4 hover:bg-yeti-blue/10 transition-colors duration-300"
                >
                    Connect with Me
                </button>
            </div>
        </section>

        {/* About Me Section */}
        <Section id="about" title="About Me">
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-3 space-y-4 text-light-slate">
                    <p>I am Prem Regmi, the Founder and CEO of The Yeti Labs, a technology consulting and software development company dedicated to unlocking Nepal's potential as a global technology leader. Born and raised in Pokhara in the 1990s, I was captivated by the rapid evolution of technology during my formative years. This fascination led me to pursue a career in tech, culminating in a degree in Information Science from Oslo and Akershus University College. My international education and experiences have shaped my vision to bridge global tech opportunities with Nepal’s talented workforce.</p>
                    <p>My passion for social contribution drives my mission to create a skilled, inclusive workforce that can compete globally, fostering an environment that welcomes talent from all backgrounds without bias.</p>
                </div>
                <div className="md:col-span-2">
                    <div className="relative group w-full max-w-sm mx-auto">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yeti-blue to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <img src="/lovable-uploads/55e37f60-8432-43da-8cc4-fa4a371ff61b.png" alt="Prem Regmi" className="relative w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </Section>

        {/* My Journey Section */}
        <Section id="journey" title="My Journey">
            <div className="relative border-l-2 border-lightest-navy/20 pl-12 space-y-16">
                <div className="absolute -left-[11px] top-2 w-5 h-5 bg-yeti-blue rounded-full border-4 border-dark-navy"></div>
                <div>
                    <h3 className="text-xl font-bold text-lightest-slate mb-2 font-mono">Early Inspiration</h3>
                    <p className="text-light-slate">Growing up in Pokhara, I witnessed the transformative power of technology, which inspired me to pursue a tech-focused career. My degree opened my eyes to the potential of digitalization in addressing educational gaps in Nepal’s rural regions.</p>
                </div>
                <div className="absolute -left-[11px] top-1/3 w-5 h-5 bg-yeti-blue rounded-full border-4 border-dark-navy"></div>
                <div>
                    <h3 className="text-xl font-bold text-lightest-slate mb-2 font-mono">Founding The Yeti Labs</h3>
                    <p className="text-light-slate">I established The Yeti Labs to position Nepal as a tech outsourcing hub. Today, the company operates in Nepal, Australia, and the USA, delivering innovative IT solutions to global clients.</p>
                </div>
                <div className="absolute -left-[11px] top-2/3 w-5 h-5 bg-yeti-blue rounded-full border-4 border-dark-navy"></div>
                <div>
                    <h3 className="text-xl font-bold text-lightest-slate mb-2 font-mono">Empowering Through Education</h3>
                    <p className="text-light-slate">Recognizing the need for skilled talent, I aim to launch tech training bootcamps across Nepal, equipping students with expertise in software development, cybersecurity, and cloud technologies. These programs will impact thousands, preparing a future-ready workforce.</p>
                </div>
            </div>
        </Section>
        
        {/* Leadership and Vision Section */}
        <Section id="vision" title="Leadership & Vision">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-light-navy p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-lightest-slate mb-2 font-mono">Leadership Philosophy</h3>
                    <p className="text-light-slate">I believe technology is a catalyst for positive change. My leadership is rooted in inclusivity, innovation, and integrity. At The Yeti Labs, we foster an environment where diverse talent thrives, and I am committed to channeling global tech opportunities to Nepal to build a sustainable IT sector that empowers communities.</p>
                </div>
                 <div className="bg-light-navy p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-lightest-slate mb-2 font-mono">Vision for the Future</h3>
                    <p className="text-light-slate">My vision is to position Nepal as a premier destination for tech talent and innovation. By investing in education, infrastructure, and community engagement, I aim to create a sustainable tech ecosystem that benefits Nepal and the global community. I envision a Nepal where every corner has access to world-class tech training, empowering our youth to lead the future of technology.</p>
                </div>
            </div>
        </Section>

        {/* Professional Background Section */}
        <Section id="background" title="Professional Background">
            <div className="space-y-8">
                <div className="flex items-start space-x-4">
                    <Briefcase className="text-yeti-blue mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-lightest-slate text-lg">Chief Operating Officer, Mero Padhai</h3>
                        <p className="text-light-slate">Collaborated with a brilliant team to bridge educational gaps in Nepal’s rural regions through digital solutions.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                     <Briefcase className="text-yeti-blue mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-lightest-slate text-lg">Previous Roles</h3>
                        <p className="text-light-slate">Held positions at ClinchTech and Black Tech, gaining expertise in software engineering and technology consulting.</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <GraduationCap className="text-yeti-blue mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-lightest-slate text-lg">Degree in Information Science</h3>
                        <p className="text-light-slate">Oslo and Akershus University College</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <GraduationCap className="text-yeti-blue mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-lightest-slate text-lg">Bachelor’s in Software Engineering</h3>
                        <p className="text-light-slate">Gandaki College of Engineering and Science (2008–2012)</p>
                    </div>
                </div>
            </div>
        </Section>

        {/* The Yeti Labs Section */}
        <Section id="yeti-labs" title="The Yeti Labs: Our Mission">
            <div className="bg-light-navy p-8 rounded-lg shadow-lg text-center">
                <img src="/lovable-uploads/5f1c40f8-4798-452e-8ba1-737f048eab9e.png" alt="The Yeti Labs Logo" className="h-16 w-16 mx-auto mb-4" />
                <p className="text-light-slate italic text-lg max-w-3xl mx-auto">“We assist businesses from all over the world to create the software for the future. We come up with solutions that help you get to your goal faster while ensuring control and adaptability.”</p>
                <p className="mt-4 text-slate">Our services include technology consulting, software development, product design, and training programs.</p>
            </div>
        </Section>
        
        {/* Connect Section */}
        <section id="connect" className="min-h-fit py-20 md:py-40 text-center">
            <h2 className="font-mono text-yeti-blue mb-2">What's Next?</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
            <p className="max-w-xl mx-auto text-light-slate mb-8">Let’s connect to explore how technology can drive social impact or to learn more about The Yeti Labs’ journey toward making Nepal a global tech hub.</p>
            <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/regmiprem/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 font-mono text-yeti-blue border border-yeti-blue rounded px-6 py-3 hover:bg-yeti-blue/10 transition-colors duration-300">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                </a>
                 <a href="https://theyetilabs.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 font-mono text-yeti-blue border border-yeti-blue rounded px-6 py-3 hover:bg-yeti-blue/10 transition-colors duration-300">
                    <Globe size={20} />
                    <span>Company Website</span>
                </a>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
