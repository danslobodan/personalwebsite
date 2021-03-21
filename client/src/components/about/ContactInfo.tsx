import Contact from './Contact';

const ContactInfo: React.FC = () => {
    return (
        <>
            <h3>Contact</h3>
            <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                <Contact
                    icon='mail'
                    link={'mailto:danastroman@gmail.com'}
                    text='danastroman@gmail.com'
                />
                <Contact
                    icon='linkedin'
                    link={'https://www.linkedin.com/in/slobodan-dan-05b2631b9/'}
                    text='Slobodan Dan'
                />
                <Contact
                    icon='github'
                    link={'https://github.com/danslobodan'}
                    text='danslobodan'
                />
                <Contact
                    icon='address'
                    link={'https://goo.gl/maps/anCeibGud6WGTTRr6'}
                    text='Novi Sad, Serbia'
                />
            </ul>
        </>
    );
};

export default ContactInfo;
