import React from 'react';
import CvSection from './CvSection';
import Education, { EducationProps } from './Education';

const EducationHistory: React.FC = () => {
    return (
        <CvSection title='Education History'>
            {education.map((edu) => {
                const { institution, location, degree, duration } = edu;
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
    );
};

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

export default EducationHistory;
