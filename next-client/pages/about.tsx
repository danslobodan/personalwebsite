import styles from "./about.module.css";

import React from "react";
import CvSection from "@/components/about/CvSection";
import EducationHistory from "@/components/about/EducationHistory";
import WorkExperience from "@/components/about/WorkExperience";
import Skills from "@/components/about/Skills";
import Heading from "@/components/about/Heading";
import ContactInfo from "@/components/about/ContactInfo";
import ProfilePicture from "@/components/about/ProfilePicture";

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <hr />
            <div style={{ display: "flex" }}>
                <div style={{ flex: 4 }}>
                    <ProfilePicture />
                    <CvSection title="Personal Profile">{profile}</CvSection>
                    <ContactInfo />
                    <Skills />
                </div>
                <div style={{ flex: 8 }}>
                    <Heading />
                    <WorkExperience />
                    <EducationHistory />
                </div>
            </div>
        </div>
    );
};

const profile =
    "Developer with 8 years of professional experience, and a history of excellence.";

export default About;
