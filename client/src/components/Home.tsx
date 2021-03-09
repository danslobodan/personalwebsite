import React from 'react';

const Home: React.FC = () => {
    return (
        <div className='ui vertical segment'>
            <div>
                The true architect is an ideal I have created to strive to. It's
                not meant to be achieved.
            </div>
            <div>It encompases five tenets:</div>
            <ul className='ui list'>
                <li>
                    <div className='ui small header'>Master programmer</div>
                    <div>
                        The true architect never stops coding. He has can
                        singlehandedly create a prototype of the product he
                        designed, including writing code, setting up
                        infrastructure and deployment pipeline, and writing
                        documentation.
                    </div>
                </li>
                <li>
                    <div className='ui small header'>Inventive designer</div>
                    <div>
                        The true architect always practices creating and
                        modifying models. He seeks to understand the business,
                        the users and his team, to unite the three in the model
                        they all understand and agree upon.
                    </div>
                </li>
                <li>
                    <div className='ui small header'>Supportive manager</div>
                    <div>
                        The true architect understands that communication,
                        cooperation and trust are at the foundation of success,
                        and that the team is the keystone. He works to empower
                        the team, and help them find purpose and reach autonomy
                        and mastery.
                    </div>
                </li>
                <li>
                    <div className='ui small header'>Patient teacher</div>
                    <div>
                        The true architect continuously teaches his team
                        everything he knows, repeating the same lessons when he
                        needs to, and points to the correct sources of
                        knowledge. He keeps improving his teaching techniques,
                        motivates his pupils to learn and never stops learning
                        himself.
                    </div>
                </li>
                <li>
                    <div className='ui small header'>Adept psychologist</div>
                    <div>
                        The true architect remembers that people create
                        software. He learns about people as much as he learns
                        about technology.
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Home;
