import styles from "./Heading.module.css";

import React from "react";

interface Props {
    title: string;
    name: string;
}

const Heading: React.FC<Props> = ({ title, name }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <h1 className={styles.name}>{name}</h1>
        </div>
    );
};

export default Heading;
