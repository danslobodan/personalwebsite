import React from 'react';
import ContactInfo from './ContactInfo';

const Heading: React.FC = () => {
    return (
        <div className='row'>
            <div className='col-lg-4'>
                <img
                    className='about-image'
                    src='CV2.jpg'
                    width='350'
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
    );
};

export default Heading;
