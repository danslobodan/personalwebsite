import styles from "./ProfilePicture.module.css";

import { ResponsiveImage } from "@/components/ResponsiveImage";

const ProfilePicture: React.FC = () => {
    return (
        <ResponsiveImage
            className={styles.image}
            src="CV-Profile.jpg"
            alt="CV"
            width={450}
            height={650}
        />
    );
};

export default ProfilePicture;
