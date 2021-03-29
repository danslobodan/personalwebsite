import './Education.css';

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
        <div className='education'>
            <h5>
                {institution}, <span>{location}</span>
            </h5>
            <div className='degree'>
                {degree}, <span className='text-muted'>{duration}</span>
            </div>
        </div>
    );
};

export default Education;
