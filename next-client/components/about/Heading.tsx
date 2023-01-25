import styles from "./Heading.module.css";

import React from "react";
import ContactInfo from "./ContactInfo";

const titleText = "Technical Team Lead";
const nameText = "Slobodan Dan";

const Heading: React.FC = () => {
    return (
        <div className={styles.aboutHeading}>
            <h3 className={styles.aboutHeadingTitle}>{titleText}</h3>
            <h1 className={styles.aboutHeadingName}>{nameText}</h1>
        </div>
    );
};

export default Heading;
