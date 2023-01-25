import React from "react";
import ContactInfo from "./ContactInfo";

const titleText = "Technical Team Lead";
const nameText = "Slobodan Dan";

const Heading: React.FC = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <img
                    className="about-image"
                    src="CV-Profile.jpg"
                    width="350"
                    alt="CV"
                />
            </div>
            <div className="col-lg-8">
                <div className="jumbotron about-heading">
                    <h3 className="about-heading-title">{titleText}</h3>
                    <h1 className="about-heading-name">{nameText}</h1>
                </div>
                <ContactInfo />
            </div>
        </div>
    );
};

export default Heading;
