import styles from "./NavMenuItem.module.css";
import Link from "next/link";

interface Props {
    label: string;
    href: string;
}

const NavMenuItem: React.FC<Props> = ({ label, href }) => {
    return (
        <Link className={styles.navitem} href={href}>
            {label}
        </Link>
    );
};

export default NavMenuItem;
