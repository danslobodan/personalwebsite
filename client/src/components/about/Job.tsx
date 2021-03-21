export interface JobProps {
    company: string;
    position: string;
    duties: string[];
    special?: string;
}

const ExperienceItem: React.FC<JobProps> = ({
    position,
    company,
    duties,
    special,
}) => {
    return (
        <div>
            <h3>{position}</h3>
            <h4>
                <b>{company}</b>
            </h4>
            <ul>
                {duties.map((duty) => {
                    return <li>{duty}</li>;
                })}
                {special && (
                    <li>
                        <b>Special contribution: </b>
                        {special}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ExperienceItem;
