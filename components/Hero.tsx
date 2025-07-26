import React from 'react';

interface HeroProps {
    onProjectsClick: () => void;
}

const GridPattern = () => (
     <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
);

const Hero: React.FC<HeroProps> = ({ onProjectsClick }) => {
    return (
        <section className="min-h-screen flex items-center bg-neutral relative overflow-hidden">
             <GridPattern />
            <div className="container mx-auto px-6 text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
                    Myrsini Kafetsi
                </h1>
                <p className="text-xl md:text-2xl text-accent mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Full Stack Software Developer | C# .NET
                </p>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <button onClick={onProjectsClick} className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-focus transition-transform transform hover:scale-105 duration-300 shadow-lg">
                        View My Work
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;