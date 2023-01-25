import Contact from "./Contact";
import { Mail, MapPin, GitHub, Linkedin, User } from "react-feather";
import CvSection from "./CvSection";

const ContactInfo: React.FC = () => {
    return (
        <CvSection icon={<User />} title="Contact">
            <ul style={{ listStyle: "none" }}>
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
                    link="https://goo.gl/maps/4Tq5Z1a4fNssYUNK8"
                    text="Kragujevac, Serbia"
                >
                    <MapPin />
                </Contact>
            </ul>
        </CvSection>
    );
};

export default ContactInfo;
