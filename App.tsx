
import React, { useRef } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-base-100 font-sans">
            <Header
                onAboutClick={() => scrollToSection(aboutRef)}
                onProjectsClick={() => scrollToSection(projectsRef)}
                onSkillsClick={() => scrollToSection(skillsRef)}
                onContactClick={() => scrollToSection(contactRef)}
            />
            <main>
                <Hero onProjectsClick={() => scrollToSection(projectsRef)} />
                <div ref={aboutRef}>
                    <About />
                </div>
                <div ref={projectsRef}>
                    <Projects />
                </div>
                <div ref={skillsRef}>
                    <Skills />
                </div>
                <div ref={contactRef}>
                    <Contact />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;