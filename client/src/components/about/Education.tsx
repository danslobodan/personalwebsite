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
        <div>
            <h4>
                {institution}, {location}
            </h4>
            <div>
                {degree}, {duration}
            </div>
        </div>
    );
};

export default Education;
