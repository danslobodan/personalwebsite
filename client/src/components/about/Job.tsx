import './Job.css';

export interface JobProps {
    company: string;
    position: string;
    duties: string[];
    special?: string;
}

const specialContributionText = 'Special contribution: ';

const Job: React.FC<JobProps> = ({ position, company, duties, special }) => {
    return (
        <div className='job'>
            <h4>{position}</h4>
            <h5>{company}</h5>
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
