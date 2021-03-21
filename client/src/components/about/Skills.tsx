import React from 'react';
import CvSection from './CvSection';

const Skills: React.FC = () => {
    return (
        <div>
            <SkillSection title='Technical Skills' skills={techSkills} />
            <SkillSection title='Other Skills' skills={otherSkills} />
        </div>
    );
};

interface SkillSectionProps {
    title: string;
    skills: string[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => {
    return (
        <CvSection title={title}>
            <ul>
                {skills.map((skill) => {
                    return <li>{skill}</li>;
                })}
            </ul>
        </CvSection>
    );
};

const techSkills: string[] = [
    'React',
    'NodeJs',
    'Express',
    'MongoDb',
    'AWS',
    'Git',
    '.NET Framework',
    'SQL Server',
    'Azure',
    'TFVC',
];

const otherSkills: string[] = [
    'English Language - Proficient Speaker',
    'Understanding of team psychology',
    'Good understanding of software architecture and enterprise solutions',
    'Very strong soft skills',
];

export default Skills;
