import styles from "./NavMenu.module.css";
import React from "react";

import NavMenuItem from "./NavMenuItem";

interface Props {}

const NavMenu: React.FC<Props> = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <img
                    src="ta_logo_white_h.png"
                    height="150px"
                    alt="true architect logo"
                />
            </div>
            <nav className={styles.navbar}>
                <NavMenuItem label="Home" href="/" />
                <NavMenuItem label="The Path" href="/tenets" />
                <NavMenuItem label="Library" href="/library" />
                <NavMenuItem label="CV" href="/cv" />
            </nav>
        </header>
    );
};

export default NavMenu;
