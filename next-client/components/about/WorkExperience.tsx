import React from "react";
import CvSection from "./CvSection";
import Job, { JobProps } from "./Job";

const WorkExperience: React.FC = () => {
    return (
        <CvSection title="Work Experience">
            {jobs.map((job) => {
                const { company, duration, position, duties, special } = job;
                return (
                    <Job
                        key={company}
                        company={company}
                        duration={duration}
                        position={position}
                        duties={duties}
                        special={special}
                    />
                );
            })}
        </CvSection>
    );
};

const jobs: JobProps[] = [
    {
        company: "Freelance",
        duration: "2021 november - Present",
        position: "Developer",
        duties: [
            "Development of a React-Native mobile application",
            "Solution architecture",
        ],
    },
    {
        company: "Grimworks Games",
        duration: "2020 september - 2021 november",
        position: "Co-founder and Developer",
        duties: [
            "Development of a Unity game",
            "Development of Articy Draft 3 intergration",
            "Solution architecture",
        ],
    },
    {
        company: "efiport GmbH",
        duration: "2020 february - 2020 august",
        position: "Tech Lead",
        duties: [
            "Development of business management software platform",
            "Team-leading",
            "Solution architecture",
        ],
    },
    {
        company: "Levi9 Global Sourcing",
        duration: "2017 - 2020",
        position: "Tech Lead / Department Manager",
        duties: [
            "Development of an enterprise banking solution by Five Degrees",
            "Team-leading",
            "Department management",
        ],
        special:
            "stabilizing the development life-cycle of two of Five Degrees' biggest customers, by applying SCRUM and Agile methodologies, introducing code standards, unit testing, integration testing, build and deployment automation, team coherence and trust",
    },
    {
        company: "Eipix Entertainment",
        duration: "2012 - 2017",
        position: "Game Developer",
        duties: [
            "Development of a game engine",
            "Development of game-play logic",
            "Development of automation tools",
        ],
        special:
            "development of a project template, upon which more than 50 games were built",
    },
];

export default WorkExperience;
