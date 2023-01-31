import styles from "./Job.module.css";

export interface JobProps {
    company: string;
    duration: string;
    position: string;
    duties: string[];
    special?: string;
}

const Job: React.FC<JobProps> = ({
    company,
    duration,
    position,
    duties,
    special,
}) => {
    return (
        <div className={styles.container}>
            <h4 className={styles.position}>{position}</h4>
            <h5 className={styles.company}>
                {company}, <span className={styles.duration}>{duration}</span>
            </h5>
            <ul className={styles.duties}>
                {duties.map((duty) => {
                    return <li key={duty}>{duty}</li>;
                })}
                {special && (
                    <li key={special}>
                        <i>
                            <u>Special contribution</u>
                        </i>
                        : {special}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Job;
