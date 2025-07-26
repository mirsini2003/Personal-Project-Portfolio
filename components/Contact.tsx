
import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons.tsx';

const Contact: React.FC = () => {
    return (
        <section className="py-20 bg-neutral">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
                <p className="text-lg text-gray-300 mt-8 max-w-2xl mx-auto">
                    I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
                </p>
                <div className="mt-10">
                    <a href="mailto:mirsini.kafetsi@gmail.com" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-focus transition-transform transform hover:scale-105 duration-300 shadow-lg inline-block">
                        Contact Me
                    </a>
                </div>
                <div className="flex justify-center gap-6 mt-12">
                    <a href="https://github.com/mirsini2003" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
                        <GitHubIcon className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/myrsini-kafetsi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
                        <LinkedInIcon className="w-8 h-8" />
                    </a>
                     <a href="mailto:mirsini.kafetsi@gmail.com" className="text-gray-400 hover:text-primary transition-colors duration-300">
                        <EmailIcon className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;