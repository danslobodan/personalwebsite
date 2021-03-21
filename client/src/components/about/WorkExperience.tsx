import React from 'react';
import CvSection from './CvSection';
import Job, { JobProps } from './Job';

const WorkExperience: React.FC = () => {
    return (
        <CvSection title='Work Experience'>
            {jobs.map((job) => {
                const { company, position, duties, special } = job;
                return (
                    <Job
                        key={company}
                        company={company}
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
        company: 'efiport GmbH',
        position: 'Tech Lead',
        duties: [
            'Development of business management software platform, Team Leading',
            'Team-leading',
        ],
    },
    {
        company: 'Levi9 Global Sourcing',
        position: 'Tech Lead / Department Manager',
        duties: [
            'Development of an enterprise banking solution by Five Degrees',
            'Team-leading',
            'Department management',
        ],
        special:
            "stabilizing the development life-cycle of two of Five Degrees' biggest customers, by applying SCRUM and Agile methodologies, introducing code standards, unit testing, integration testing, build and deployment automation, team coherence and trust",
    },
    {
        company: 'Eipix Entertainment',
        position: 'Game Developer',
        duties: [
            'Development of a game engine',
            'Development of game-play logic',
            'Development of automation tools',
        ],
        special:
            'development of a project template, upon which more than 50 games were built',
    },
];

export default WorkExperience;
