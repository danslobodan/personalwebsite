import styles from "./Layout.module.css";
import Header from "./nav/Header";

interface Props {
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.layout}>{children}</div>
        </>
    );
};

export default Layout;
