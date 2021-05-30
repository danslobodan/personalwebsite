import React from 'react';
import { Tenet } from './Tenet';

const Tenets: React.FC = () => {
    const videoSrc = `https://www.youtube.com/embed/4-079YIasck`;

    return (
        <div>
            <h2>The Path Of The True Architect</h2>
            <hr />
            <div className='row featurette'>
                <p className='lead'>
                    <p>
                        As Master Shi Heng Yi teaches us,{' '}
                        <i>
                            all of our lives are too unique to copy the path of
                            someone else.
                        </i>{' '}
                        The True Architect is a path I have chosen for myself.
                        To help me stay on the path, I have defined five tenets.
                    </p>
                    <hr />
                </p>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe
                        className='embed-responsive-item'
                        width='560'
                        height='315'
                        src={videoSrc}
                        title='Five Hindrances'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
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
