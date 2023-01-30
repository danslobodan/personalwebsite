import CvSection from "@/components/cv/CvSection";
import EducationHistory from "@/components/cv/EducationHistory";
import WorkExperience from "@/components/cv/WorkExperience";
import Skills from "@/components/cv/Skills";
import Heading from "@/components/cv/Heading";
import ContactInfo from "@/components/cv/ContactInfo";
import ProfilePicture from "@/components/cv/ProfilePicture";

import { User } from "react-feather";

const About: React.FC = () => {
    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    flex: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <ProfilePicture />
                <div
                    style={{
                        paddingLeft: "30px",
                        paddingRight: "30px",
                    }}
                >
                    <ContactInfo />
                    <Skills />
                </div>
            </div>
            <div
                style={{
                    flex: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                <div
                    style={{
                        marginLeft: "10px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                    }}
                >
                    <Heading title="Full Stack Developer" name="Slobodan Dan" />
                    <CvSection title="Profile Info" icon={<User />}>
                        Software developer with over a decade of professional
                        experience, and a history of excellence.
                    </CvSection>
                    <WorkExperience />
                    <EducationHistory />
                </div>
            </div>
        </div>
    );
};

export default About;
