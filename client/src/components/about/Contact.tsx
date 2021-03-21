export interface ContactProps {
    icon: string;
    link: string;
    text: string;
}

const Contact: React.FC<ContactProps> = ({ icon, link, text }) => {
    return (
        <li>
            <i className={icon} />
            <div>
                <a href={link}>{text}</a>
            </div>
        </li>
    );
};

export default Contact;
