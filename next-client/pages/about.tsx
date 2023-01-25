import CvSection from "@/components/about/CvSection";
import EducationHistory from "@/components/about/EducationHistory";
import WorkExperience from "@/components/about/WorkExperience";
import Skills from "@/components/about/Skills";
import Heading from "@/components/about/Heading";
import ContactInfo from "@/components/about/ContactInfo";
import ProfilePicture from "@/components/about/ProfilePicture";

import { User } from "react-feather";

const About: React.FC = () => {
    return (
        <div
            style={{
                fontSize: "20px",
                marginTop: "25px",
                marginLeft: "10%",
                marginRight: "10%",
            }}
        >
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
                    <ContactInfo />
                    <Skills />
                </div>
                <div
                    style={{
                        flex: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <Heading />
                    <CvSection title="Profile Info" icon={<User />}>
                        Developer with 8 years of professional experience, and a
                        history of excellence.
                    </CvSection>
                    <WorkExperience />
                    <EducationHistory />
                </div>
            </div>
        </div>
    );
};

export default About;
