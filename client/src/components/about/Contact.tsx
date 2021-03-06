interface ContactProps {
    link: string;
    text: string;
}

const Contact: React.FC<ContactProps> = ({ link, text, children }) => {
    return (
        <li>
            {children}
            <a target='_blank' rel='noopener noreferrer' href={link}>
                {text}
            </a>
        </li>
    );
};

export default Contact;
