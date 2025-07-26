
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-20 bg-base-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">About Me</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/3 flex justify-center">
                        <img 
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="A close-up of colorful code on a dark monitor screen"
                            className="rounded-full w-64 h-64 object-cover border-4 border-primary shadow-xl"
                        />
                    </div>
                    <div className="md:w-2/3 text-lg text-gray-300 space-y-4">
                        <p>
                            I am a final-year Computer Science student at the University of Piraeus, with over 3 years of experience in developing desktop applications, mainly using <em>C#</em> and the <em>.NET Framework</em>.
                            <br /><br />
                            During my studies, I have worked on many projects (both individual and team-based), gaining substantial experience in software analysis, design, and implementation. My academic background has equipped me with the tools to deliver complete projects, accompanied by user guides, diagrams (such as UML), and detailed code documentation.
                            <br /><br />
                            Although I experiment with various technologies such as <em>HTML, CSS, JavaScript,</em> and <em>Java</em>, my main passion remains <em>C#</em>, through which I can create functional, user-friendly, and well-designed applications.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;