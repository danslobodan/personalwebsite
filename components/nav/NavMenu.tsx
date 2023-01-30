import styles from "./NavMenu.module.css";
import React from "react";
import Image from "next/image";

import NavMenuItem from "./NavMenuItem";

interface Props {}

const NavMenu: React.FC<Props> = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <Image
                    src="/ta_logo_white_h.png"
                    alt="true architect logo"
                    width={280}
                    height={150}
                />
            </div>
            <nav className={styles.navbar}>
                <NavMenuItem label="Home" href="/" />
                <NavMenuItem label="True Architect" href="/truearchitect" />
                <NavMenuItem label="Library" href="/library" />
                <NavMenuItem label="CV" href="/cv" />
            </nav>
        </header>
    );
};

export default NavMenu;
