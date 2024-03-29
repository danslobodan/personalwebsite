import styles from "./Layout.module.css";
import NavMenu from "./nav/NavMenu";

interface Props {
    children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <NavMenu />
            <div className={styles.layout}>{children}</div>
        </>
    );
};
