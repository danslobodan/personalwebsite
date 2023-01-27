import React from "react";
import CvSection from "./CvSection";
import Education, { EducationProps } from "./Education";

import { BookOpen } from "react-feather";

const EducationHistory: React.FC = () => {
    return (
        <CvSection icon={<BookOpen />} title="Education History">
            <div>
                {education.map((edu) => {
                    const { institution, location, degree, duration } = edu;
                    return (
                        <Education
                            key={degree}
                            institution={institution}
                            location={location}
                            degree={degree}
                            duration={duration}
                        />
                    );
                })}
            </div>
        </CvSection>
    );
};

const education: EducationProps[] = [
    {
        institution: "Singidunum University",
        location: "Novi Sad",
        degree: "Bachelor of Software Engineering",
        duration: "2018-Present (2nd year)",
    },
    {
        institution: "University Of Novi Sad",
        location: "Novi Sad",
        degree: "Bachelor of Physics",
        duration: "2007-Present (4th year, 4 exams left)",
    },
    {
        institution: "School Of Technical Sciences",
        location: "Sombor",
        degree: "Computer Technician",
        duration: "2002-2007",
    },
];

export default EducationHistory;
