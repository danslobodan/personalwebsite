interface ContactProps {
    link: string;
    text: string;
    children?: React.ReactNode;
}

const Contact: React.FC<ContactProps> = ({ link, text, children }) => {
    return (
        <li
            style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "7px",
            }}
        >
            {children}
            <a target="_blank" rel="noopener noreferrer" href={link}>
                {text}
            </a>
        </li>
    );
};

export default Contact;
