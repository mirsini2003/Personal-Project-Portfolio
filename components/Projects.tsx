
import React from 'react';
import { GitHubIcon } from './icons.tsx';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    sourceUrl: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Customer Management Web Application',
        description: 'Web application for customer management using C# ASP.NET.',
        imageUrl: 'https://cdn.iveybusinessjournal.com/wp-content/uploads/2002/11/iStock_000022736460_Large.jpg',
        tags: ['C#', 'ASP.NET', 'Web App', 'CRM'],
        sourceUrl: 'https://github.com/mirsini2003/Customer-Management-Web-Application',
    },
    {
        id: 2,
        title: 'Intelligent Agent Chatbot with GUI',
        description: 'A multi-agent chatbot application developed in Python, featuring a graphical user interface for user interaction.',
        imageUrl: 'https://regent.ac.za/wp-content/uploads/2024/10/shutterstock_1154457493.jpg',
        tags: ['Python', 'Chatbot', 'AI', 'GUI'],
        sourceUrl: 'https://github.com/mirsini2003/Intelligent-Agent-Chatbot-with-GUI-',
    },
    {
        id: 3,
        title: 'Personalized Learning Application for Kids',
        description: 'An Educational Desktop Application developed in C# and .NET Framework',
        imageUrl: 'https://babaoo.com/wp-content/uploads/applications-ducatives-6-8-ans.png',
        tags: ['C#', '.NET Framework', 'SQLite', 'Windows Forms'],
        sourceUrl: 'https://github.com/mirsini2003/Personalized-Learning-App-for-Kids',
    },
     {
        id: 4,
        title: 'PATHFINDERS: A Personalized Counseling Application',
        description: 'A Full-Stack Personalized Desktop Application for Career Guidance',
        imageUrl: 'https://babafaridgroup.edu.in/assets/img/bfgi/free-career-guidance.jpg',
        tags: ['C#', '.NET Framework', 'SQLite', 'Windows Forms'],
        sourceUrl: 'https://github.com/mirsini2003/PATHFINDERS-A-Personalized-Counseling-Application',
    }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-neutral rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img src={project.imageUrl} alt={project.title} className={`w-full h-48 ${project.id === 1 ? 'object-contain p-4' : 'object-cover'}`} />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-secondary text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            {project.sourceUrl && project.sourceUrl !== '#' && (
                <div className="mt-auto pt-4 border-t border-gray-700 flex justify-start items-center">
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                        <GitHubIcon className="w-5 h-5" />
                        Source Code
                    </a>
                </div>
            )}
        </div>
    </div>
);


const Projects: React.FC = () => {
    return (
        <section className="py-20 bg-neutral">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">My Projects</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(p => <ProjectCard key={p.id} project={p} />)}
                </div>
            </div>
        </section>
    );
};

export default Projects;