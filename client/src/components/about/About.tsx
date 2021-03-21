import './About.css';

import React from 'react';
import CvSection from './CvSection';
import Job, { JobProps } from './Job';
import Education, { EducationProps } from './Education';
import ContactInfo from './ContactInfo';

const About: React.FC = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-4'>
                    <img
                        src='CV2.jpg'
                        width='350'
                        style={{ borderRadius: '50px' }}
                        alt='CV'
                    />
                </div>
                <div className='col-lg-8'>
                    <div className='jumbotron about-heading'>
                        <h3 className='about-heading-title'>
                            Full Stack Developer
                        </h3>
                        <h1 className='about-heading-name'>Slobodan Dan</h1>
                    </div>
                    <ContactInfo />
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-md-4'>
                    <CvSection title='Personal Profile'>{profile}</CvSection>
                    <CvSection title='Areas of Expertise'>
                        <ul>
                            {techSkills.map((skill) => {
                                return <li>{skill}</li>;
                            })}
                        </ul>
                    </CvSection>
                    <CvSection title='Other Skills'>
                        <ul>
                            {otherSkills.map((skill) => {
                                return <li>{skill}</li>;
                            })}
                        </ul>
                    </CvSection>
                </div>
                <div className='col-md-8'>
                    <CvSection title='Work Experience'>
                        {jobs.map((job) => {
                            const { company, position, duties, special } = job;
                            return (
                                <Job
                                    company={company}
                                    position={position}
                                    duties={duties}
                                    special={special}
                                />
                            );
                        })}
                    </CvSection>
                    <CvSection title='Education History'>
                        {education.map((edu) => {
                            const {
                                institution,
                                location,
                                degree,
                                duration,
                            } = edu;
                            return (
                                <Education
                                    institution={institution}
                                    location={location}
                                    degree={degree}
                                    duration={duration}
                                />
                            );
                        })}
                    </CvSection>
                </div>
            </div>
        </div>
    );
};

export default About;

const profile =
    'Developer with 8 years of professional experience, and a history of excellence.';

const techSkills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'C#',
    '.NET Framework',
];

const otherSkills: string[] = [
    'English Language - Proficient Speaker',
    'Understanding of team psychology',
    'Good understanding of software architecture and enterprise solutions',
    'Very strong soft skills',
];

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

const education: EducationProps[] = [
    {
        institution: 'Singidunum University',
        location: 'Novi Sad',
        degree: 'Bachelor of Software Engineering',
        duration: '2018-Present',
    },
    {
        institution: 'University Of Novi Sad',
        location: 'Novi Sad',
        degree: 'Bachelor of Physics',
        duration: '2007-2012',
    },
    {
        institution: 'School Of Technical Sciences',
        location: 'Sombor',
        degree: 'Computer Technician',
        duration: '2002-2007',
    },
];
