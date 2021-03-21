import './ContactInfo.css';
import Contact, { ContactProps } from './Contact';

const contactText = 'Contact';

const ContactInfo: React.FC = () => {
    return (
        <div>
            <h4 className='contact-info-title'>{contactText}</h4>
            <ul className='contact-info-list'>
                {contacts.map((contact) => {
                    const { icon, link, text } = contact;
                    return <Contact icon={icon} link={link} text={text} />;
                })}
            </ul>
        </div>
    );
};

const contacts: ContactProps[] = [
    {
        icon: 'mail',
        link: 'mailto:danastroman@gmail.com',
        text: 'danastroman@gmail.com',
    },
    {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/slobodan-dan-05b2631b9/',
        text: 'Slobodan Dan',
    },
    {
        icon: 'github',
        link: 'https://github.com/danslobodan',
        text: 'danslobodan',
    },
    {
        icon: 'address',
        link: 'https://goo.gl/maps/anCeibGud6WGTTRr6',
        text: 'Novi Sad, Serbia',
    },
];

export default ContactInfo;
