import React from 'react';

const About: React.FC = () => {
    return (
        <div className='ui vertical segment'>
            <div className='ui container grid'>
                <div className='ui row'>
                    <div className='column four wide'>
                        <img
                            className='ui small circular image'
                            src='CV2.jpg'
                            alt='CV picture'
                        />
                        <div className='ui list'>
                            <div className='item'>
                                <i className='users icon' />
                                <div className='content'>Slobodan Dan</div>
                            </div>
                            <div className='item'>
                                <i className='mail icon' />
                                <div className='content'>
                                    <a href='mailto:danastroman@gmail.com'>
                                        danastroman@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className='item'>
                                <i className='linkedin icon' />
                                <div className='content'>
                                    <a href='https://www.linkedin.com/in/slobodan-dan-05b2631b9/'>
                                        Slobodan Dan
                                    </a>
                                </div>
                            </div>
                            <div className='item'>
                                <i className='github icon' />
                                <div className='content'>
                                    <a href='https://github.com/danslobodan'>
                                        danslobodan
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='column ten wide'>
                        <div className='ui vertical segment'>
                            <p>
                                I've been in the IT industry from 2012. I worked
                                4 years in the gaming industry, and the rest in
                                web development.
                            </p>
                            <p>
                                My focus is not on mastering a single
                                technology, but understanding how to be a good
                                programmer and a good professional.
                            </p>
                            <p>
                                I strive to make a lasting betterment for both
                                the people and the business, wherever I work.
                            </p>
                        </div>
                        <div className='ui vertical segment'>
                            <p>Have a wonderful day!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
