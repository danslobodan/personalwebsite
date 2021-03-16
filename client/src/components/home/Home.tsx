import React from 'react';
import { Tenet } from './Tenet';

const Home: React.FC = () => {
    return (
        <div className='container'>
            <div className='row featurette'>
                <p className='lead'>
                    The true architect is an ideal I have created to strive to.
                    It's not meant to be achieved. It comprises five tenets.
                </p>
            </div>
            <Tenet title='Master Programmer'>
                He has can singlehandedly create a prototype of the product he
                designed, including writing code, setting up infrastructure and
                deployment pipeline, and writing documentation.
            </Tenet>
            <Tenet title='Inventive Designer'>
                The true architect always practices creating and modifying
                models. He seeks to understand the business, the users and his
                team, to unite the three in the model they all understand and
                agree upon.
            </Tenet>
            <Tenet title='Supportive Manager'>
                The true architect understands that communication, cooperation
                and trust are at the foundation of success, and that the team is
                the keystone. He works to empower the team, and help them find
                purpose and reach autonomy and mastery.
            </Tenet>
            <Tenet title='Patient Teacher'>
                The true architect continuously teaches his team everything he
                knows, repeating the same lessons when he needs to, and points
                to the correct sources of knowledge. He keeps improving his
                teaching techniques, motivates his pupils to learn and never
                stops learning himself.
            </Tenet>
            <Tenet title='Adept Psychologist'>
                The true architect remembers that people create software. He
                learns about people as much as he learns about technology.
            </Tenet>
        </div>
    );
};

export default Home;
