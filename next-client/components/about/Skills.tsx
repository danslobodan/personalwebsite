import React from "react";
import CvSection from "./CvSection";

import { Codepen, PlusCircle } from "react-feather";

const Skills: React.FC = () => {
    return (
        <>
            <CvSection icon={<Codepen />} title="Technical Skills">
                <SkillSection skills={techSkills} />
            </CvSection>
            <CvSection icon={<PlusCircle />} title="Other Skills">
                <SkillSection skills={otherSkills} />
            </CvSection>
        </>
    );
};

interface SkillSectionProps {
    skills: string[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => {
    return (
        <ul style={{ marginLeft: "50px" }}>
            {skills.map((skill) => {
                return (
                    <li key={skill} style={{ marginBottom: "5px" }}>
                        {skill}
                    </li>
                );
            })}
        </ul>
    );
};

const techSkills: string[] = [
    "React",
    "NodeJs",
    "Express",
    "MongoDb",
    "AWS",
    "Git",
    ".NET Framework",
    "SQL Server",
    "Azure",
    "TFVC",
];

const otherSkills: string[] = [
    "English Language - Proficient Speaker",
    "Leadership",
    "Team psychology",
    "Software architecture",
    "Strong soft skills",
];

export default Skills;
