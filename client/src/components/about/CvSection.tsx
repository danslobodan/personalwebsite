interface Props {
    title: string;
}

const CvSection: React.FC<Props> = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
            <hr />
        </div>
    );
};

export default CvSection;
