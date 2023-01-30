import { ResponsiveImage } from "@/components/ResponsiveImage";

const ProfilePicture: React.FC = () => {
    return (
        <ResponsiveImage
            style={{
                padding: "20px",
                borderRadius: "50px",
                marginBottom: "20px",
            }}
            src="CV-Profile.jpg"
            alt="CV"
            width={450}
            height={650}
        />
    );
};

export default ProfilePicture;
