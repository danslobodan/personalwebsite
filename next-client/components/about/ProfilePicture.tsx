import styles from "./ProfilePicture.module.css";

const ProfilePicture: React.FC = () => {
    return <img className={styles.aboutImage} src="CV-Profile.jpg" alt="CV" />;
};

export default ProfilePicture;
