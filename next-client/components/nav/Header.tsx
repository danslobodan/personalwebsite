import styles from "./Header.module.css";
import React from "react";

import Brand from "./Brand";
import NavMenuItem from "./NavMenuItem";

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <Brand />
            </div>
            <nav className={styles.navbar}>
                <NavMenuItem label="Home" href="/" />
                <NavMenuItem label="The Path" href="/tenets" />
                <NavMenuItem label="Books" href="/books" />
                <NavMenuItem label="About" href="/about" />
            </nav>
        </header>
    );
};

export default Header;
