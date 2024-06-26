import { Tenet } from '@/components/tenets/Tenet';

export const metadata = {
    title: 'Five Tenets of The True Architect',
    description:
        'Five tenets of The True Architect: master programmer, inventive designer, supportive manager, patient teacher, adept phychologist.',
    favicon: '/favicon.ico',
};

export default function Tenets() {
    const videoSrc = `https://www.youtube.com/embed/4-079YIasck`;

    return (
        <main className='flex flex-col justify-center items-center'>
            <div className='row mb-16'>
                <div className='col-6'>
                    <div className='p-8'>
                        <h2 className='pb-8'>The Path Of The True Architect</h2>
                        <div className='text-justify'>
                            As Master Shi Heng Yi teaches us,{' '}
                            <u>
                                <i>
                                    all of our lives are too unique to copy the
                                    path of someone else.
                                </i>
                            </u>{' '}
                            The True Architect is a path I have chosen for
                            myself. It is defined by five tenets.
                        </div>
                    </div>
                </div>
                <div className='col-6 items-center'>
                    <iframe
                        style={{
                            width: '100%',
                            maxWidth: '560px',
                            aspectRatio: '16/9',
                        }}
                        height='315'
                        src={videoSrc}
                        title='Five Hindrances'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    />
                </div>
            </div>
            <Tenet imageSrc='master_programmer.png' title='Master Programmer'>
                The True Architect can singlehandedly create a prototype of the
                product he designed, including writing code, setting up
                infrastructure and deployment pipeline, and writing
                documentation.
            </Tenet>
            <Tenet imageSrc='inventive_designer.png' title='Inventive Designer'>
                The True Architect always practices creating and modifying
                models. He seeks to understand the business, the users and his
                team, to unite the three in the model they all understand and
                agree upon.
            </Tenet>
            <Tenet imageSrc='supportive_manager.png' title='Supportive Manager'>
                The True Architect understands that communication, cooperation
                and trust are at the foundation of success, and that the team is
                the keystone. He works to empower the team, and help them find
                purpose and reach autonomy and mastery.
            </Tenet>
            <Tenet imageSrc='patient_teacher.png' title='Patient Teacher'>
                The True Architect continuously teaches his team everything he
                knows, repeating the same lessons when he needs to, and points
                to the correct sources of knowledge. He keeps improving his
                teaching techniques, motivates his pupils to learn and never
                stops learning himself.
            </Tenet>
            <Tenet imageSrc='adept_psychologist.png' title='Adept Psychologist'>
                The True Architect remembers that people create software and
                people use software. He learns about people as much as he learns
                about technology.
            </Tenet>
        </main>
    );
}
