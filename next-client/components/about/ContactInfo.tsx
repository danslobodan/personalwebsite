import styles from "./ContactInfo.module.css";
import Contact from "./Contact";
import { Mail, MapPin, GitHub, Linkedin } from "react-feather";

const contactText = "Contact";

const ContactInfo: React.FC = () => {
    return (
        <div>
            <h4 className={styles.contactInfoTitle}>{contactText}</h4>
            <ul className={styles.contactInfoList}>
                <Contact
                    key="email"
                    link="mailto:danastroman@gmail.com"
                    text="danastroman@gmail.com"
                >
                    <Mail />
                </Contact>
                <Contact
                    key="linkedin"
                    link="https://www.linkedin.com/in/slobodan-dan-05b2631b9/"
                    text="Slobodan Dan"
                >
                    <Linkedin />
                </Contact>
                <Contact
                    key="github"
                    link="https://github.com/danslobodan"
                    text="danslobodan"
                >
                    <GitHub />
                </Contact>
                <Contact
                    key="address"
                    link="https://goo.gl/maps/uphxpBZLWoRG2yzX9"
                    text="Kragujevac, Serbia"
                >
                    <MapPin />
                </Contact>
            </ul>
        </div>
    );
};

export default ContactInfo;
