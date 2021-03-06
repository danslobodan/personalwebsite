import './Job.css';

export interface JobProps {
    company: string;
    duration: string;
    position: string;
    duties: string[];
    special?: string;
}

const specialContributionText = 'Special contribution: ';

const Job: React.FC<JobProps> = ({
    company,
    duration,
    position,
    duties,
    special,
}) => {
    return (
        <div className='job'>
            <h4>{position}</h4>
            <h5>
                {company}, <span className='text-muted'>{duration}</span>
            </h5>
            <ul>
                {duties.map((duty) => {
                    return <li key={duty}>{duty}</li>;
                })}
                {special && (
                    <li key={special}>
                        <b>{specialContributionText}</b>
                        {special}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Job;
