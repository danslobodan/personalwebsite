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
        <div style={{ paddingTop: "10px", marginBottom: "10px" }}>
            <h4
                style={{
                    fontWeight: "lighter",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "5px",
                }}
            >
                {position}
            </h4>
            <h5 style={{ marginBottom: "10px" }}>
                {company}, <span className="text-muted">{duration}</span>
            </h5>
            <ul style={{ marginLeft: "50px" }}>
                {duties.map((duty) => {
                    return <li key={duty}>{duty}</li>;
                })}
                {special && (
                    <li key={special}>
                        <u style={{ letterSpacing: "1px" }}>
                            Special contribution
                        </u>
                        : {special}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Job;
