import CvSection from '@/components/cv/CvSection';
import EducationHistory from '@/components/cv/EducationHistory';
import WorkExperience from '@/components/cv/WorkExperience';
import Skills from '@/components/cv/Skills';
import Heading from '@/components/cv/Heading';
import ContactInfo from '@/components/cv/ContactInfo';
import ProfilePicture from '@/components/cv/ProfilePicture';

import { User } from 'react-feather';

export const metadata = {
    title: 'Slobodan Dan - Full Stack Developer',
    description:
        'Slobodan Dan is a full stack developer with over a decade of professional experience, and a history of excellence.',
};

export default function About() {
    return (
        <main>
            <div className='row'>
                <div className='col-4'>
                    <ProfilePicture />
                </div>
                <div className='col-8'>
                    <div className='ml-0 md:ml-6'>
                        <Heading
                            title='Full Stack Developer'
                            name='Slobodan Dan'
                        />
                        <CvSection title='Profile Info' icon={<User />}>
                            Full stack developer with over a decade of
                            professional experience, and a history of
                            excellence.
                        </CvSection>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-4' style={{ alignSelf: 'flex-start' }}>
                    <ContactInfo />
                    <Skills />
                </div>
                <div className='col-8 column'>
                    <div className='ml-0 md:ml-6'>
                        <WorkExperience />
                        <EducationHistory />
                    </div>
                </div>
            </div>
        </main>
    );
}
