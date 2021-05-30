import React from 'react';
import { Tenet } from './Tenet';

const Tenets: React.FC = () => {
    return (
        <div>
            <div className='row featurette'>
                <p className='lead'>
                    <p>
                        Like many of the job titles in the software industry the
                        title <i>software architect</i> has devolved to the
                        point of meaninglessness. I'd like to restore it's
                        meaning by defining it as an ideal.
                    </p>
                    <p>The true architect ideal comprises of five tenets.</p>
                </p>
            </div>
            <Tenet
                imageLeft
                imageSrc='master_programmer.png'
                title='Master Programmer'
            >
                He can singlehandedly create a prototype of the product he
                designed, including writing code, setting up infrastructure and
                deployment pipeline, and writing documentation.
            </Tenet>
            <Tenet
                imageLeft={false}
                imageSrc='inventive_designer.png'
                title='Inventive Designer'
            >
                The true architect always practices creating and modifying
                models. He seeks to understand the business, the users and his
                team, to unite the three in the model they all understand and
                agree upon.
            </Tenet>
            <Tenet
                imageLeft
                imageSrc='supportive_manager.png'
                title='Supportive Manager'
            >
                The true architect understands that communication, cooperation
                and trust are at the foundation of success, and that the team is
                the keystone. He works to empower the team, and help them find
                purpose and reach autonomy and mastery.
            </Tenet>
            <Tenet
                imageLeft={false}
                imageSrc='patient_teacher.png'
                title='Patient Teacher'
            >
                The true architect continuously teaches his team everything he
                knows, repeating the same lessons when he needs to, and points
                to the correct sources of knowledge. He keeps improving his
                teaching techniques, motivates his pupils to learn and never
                stops learning himself.
            </Tenet>
            <Tenet
                imageLeft
                imageSrc='adept_psychologist.png'
                title='Adept Psychologist'
            >
                The true architect remembers that people create software. He
                learns about people as much as he learns about technology.
            </Tenet>
        </div>
    );
};

export default Tenets;
