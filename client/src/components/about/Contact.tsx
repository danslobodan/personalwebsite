interface Props {
    icon: string;
    link: string;
    text: string;
}

const Contact: React.FC<Props> = ({ icon, link, text }) => {
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
