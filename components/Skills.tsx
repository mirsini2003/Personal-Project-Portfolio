import React from 'react';
import { CSharpIcon, JavaIcon, HtmlCssIcon, JavaScriptIcon, DatabasesIcon, DataStructuresIcon, GitIcon } from './icons.tsx';

interface Skill {
    name: string;
    icon: React.ReactNode;
}

const skills: Skill[] = [
    { name: 'C#', icon: <CSharpIcon className="w-12 h-12" /> },
    { name: 'Java', icon: <JavaIcon className="w-12 h-12" /> },
    { name: 'HTML + CSS', icon: <HtmlCssIcon className="w-12 h-12" /> },
    { name: 'JavaScript', icon: <JavaScriptIcon className="w-12 h-12" /> },
    { name: 'Databases', icon: <DatabasesIcon className="w-12 h-12" /> },
    { name: 'Data Structures & Algorithms', icon: <DataStructuresIcon className="w-12 h-12" /> },
    { name: 'Git / GitHub', icon: <GitIcon className="w-12 h-12" /> },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="bg-neutral p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-md hover:shadow-primary/50 transition-shadow duration-300 w-44 h-44">
        <div className="text-primary mb-4">
            {skill.icon}
        </div>
        <h3 className="text-lg font-semibold text-white flex-grow flex items-center">{skill.name}</h3>
    </div>
);

const Skills: React.FC = () => {
    return (
        <section className="py-20 bg-base-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Skills</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map(skill => <SkillCard key={skill.name} skill={skill} />)}
                </div>
            </div>
        </section>
    );
};

export default Skills;