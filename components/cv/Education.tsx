export interface EducationProps {
    institution: string;
    location: string;
    degree: string;
    duration: string;
}

const Education: React.FC<EducationProps> = ({
    institution,
    location,
    degree,
    duration,
}) => {
    return (
        <div style={{ paddingTop: "10px" }}>
            <h5
                style={{
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    marginBottom: "5px",
                }}
            >
                {institution}, <span>{location}</span>
            </h5>
            <div style={{ paddingLeft: "30px" }}>
                {degree}, <span className="text-muted">{duration}</span>
            </div>
        </div>
    );
};

export default Education;
