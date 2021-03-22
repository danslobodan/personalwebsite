import React from 'react';
import CvSection from './CvSection';
import Job, { JobProps } from './Job';

const WorkExperience: React.FC = () => {
    return (
        <CvSection title='Work Experience'>
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
        company: 'efiport GmbH',
        duration: '2020 - Present',
        position: 'Tech Lead',
        duties: [
            'Development of business management software platform, Team Leading',
            'Team-leading',
        ],
    },
    {
        company: 'Levi9 Global Sourcing',
        duration: '2017 - 2020',
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
        duration: '2012 - 2017',
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
