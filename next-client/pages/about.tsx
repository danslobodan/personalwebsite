import styles from "./about.module.css";

import React from "react";
import CvSection from "../components/about/CvSection";
import EducationHistory from "../components/about/EducationHistory";
import WorkExperience from "../components/about/WorkExperience";
import Skills from "../components/about/Skills";
import Heading from "../components/about/Heading";

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <Heading />
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <CvSection title="Personal Profile">{profile}</CvSection>
                    <Skills />
                </div>
                <div className="col-md-8">
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
