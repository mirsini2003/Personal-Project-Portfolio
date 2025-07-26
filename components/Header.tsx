
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onAboutClick: () => void;
    onProjectsClick: () => void;
    onSkillsClick: () => void;
    onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick, onProjectsClick, onSkillsClick, onContactClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = "px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <button onClick={onAboutClick} className={navLinkClasses}>About</button>
                        <button onClick={onProjectsClick} className={navLinkClasses}>Projects</button>
                        <button onClick={onSkillsClick} className={navLinkClasses}>Skills</button>
                        <button onClick={onContactClick} className={navLinkClasses}>Contact</button>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
};

export default Header;