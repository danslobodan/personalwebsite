import './About.css';

import React from 'react';
import CvSection from './CvSection';
import EducationHistory from './EducationHistory';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Heading from './Heading';

const About: React.FC = () => {
    return (
        <div className='about'>
            <Heading />
            <hr />
            <div className='row'>
                <div className='col-md-4'>
                    <CvSection title='Personal Profile'>{profile}</CvSection>
                    <Skills />
                </div>
                <div className='col-md-8'>
                    <WorkExperience />
                    <EducationHistory />
                </div>
            </div>
        </div>
    );
};

const profile =
    'Developer with 8 years of professional experience, and a history of excellence.';

export default About;
