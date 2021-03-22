import './ContactInfo.css';
import Contact from './Contact';
import { Envelope, GeoAlt, Github, Linkedin } from 'react-bootstrap-icons';

const contactText = 'Contact';

const ContactInfo: React.FC = () => {
    return (
        <div>
            <h4 className='contact-info-title'>{contactText}</h4>
            <ul className='contact-info-list'>
                <Contact
                    key='email'
                    link='mailto:danastroman@gmail.com'
                    text='danastroman@gmail.com'
                >
                    <Envelope />
                </Contact>
                <Contact
                    key='linkedin'
                    link='https://www.linkedin.com/in/slobodan-dan-05b2631b9/'
                    text='Slobodan Dan'
                >
                    <Linkedin />
                </Contact>
                <Contact
                    key='github'
                    link='https://github.com/danslobodan'
                    text='danslobodan'
                >
                    <Github />
                </Contact>
                <Contact
                    key='address'
                    link='https://goo.gl/maps/MSFKjggEzKsEBfJp8'
                    text='Novi Sad, Serbia'
                >
                    <GeoAlt />
                </Contact>
            </ul>
        </div>
    );
};

export default ContactInfo;
