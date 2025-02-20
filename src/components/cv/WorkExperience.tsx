import React from 'react';
import CvSection from './CvSection';
import Job, { JobProps } from './Job';

import { Briefcase } from 'react-feather';

const WorkExperience: React.FC = () => {
    return (
        <CvSection icon={<Briefcase />} title="Work Experience">
            <div>
                {jobs.map((job, i) => (
                    <Job key={job.company} job={job} />
                ))}
            </div>
        </CvSection>
    );
};

const jobs: JobProps[] = [
    {
        company: 'Music instrument practice app',
        duration: '2023 - 2025',
        position: 'Developer',
        technologies: [
            'C#',
            'Unity',
            'Typescript',
            'React',
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB',
            'Docker',
            'Git',
            'Github Actions',
            'AWS (Elastic Beanstalk, SES, ALB, EC2, S3, ECR, WAF, Route 53, Cloud Watch)',
        ],
        duties: [
            'Development of a Unity multi-platform application, website and server',
        ],
    },
    {
        company: 'Unity game',
        duration: '2021 - 2022',
        position: 'Co-founder and Developer',
        technologies: ['C#', 'Unity'],
        duties: ['Development of a Unity game', 'Articy Draft 3 intergration'],
    },
    {
        company: 'efiport GmbH',
        duration: '2021 February - 2021 August',
        position: 'Tech Lead',
        technologies: [
            'Typescript',
            'React',
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB',
            'Git',
            'Github Actions',
            'AWS (EC2, S3)',
        ],
        duties: [
            'Development of an education software platform',
            'Team-leading',
            'Coordination with sales, info-sec and operations',
            'Candidate interviews',
        ],
        special:
            'Migrated codebase from JavaScript to Typescript, introduced code standards, unit testing, automated builds, documentation, production incident debriefing, taught the team Agile and Lean methodologies and more.',
    },
    {
        company: 'Levi9 Global Sourcing',
        duration: '2017 - 2020',
        position: 'Tech Lead / Department Manager',
        technologies: [
            'C#',
            'ASP.NET',
            'WCF',
            'SQL Server',
            'Azure Pipelines',
            'TFS',
        ],
        duties: [
            'Development of an enterprise banking solution by Five Degrees',
            'Team-leading',
            'Department management',
        ],
        special:
            "stabilizing the development life-cycle of two of Five Degrees' biggest customers Van Lanschot Kempen and Knab, by applying SCRUM and Agile methodologies, introducing code standards, unit testing, integration testing, build and deployment automation, team coherence and trust",
    },
    {
        company: 'Eipix Entertainment',
        duration: '2012 - 2017',
        position: 'Game Developer',
        technologies: ['C++', 'C#', 'in-house script', 'SVN'],
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
