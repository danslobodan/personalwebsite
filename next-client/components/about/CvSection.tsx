interface Props {
    title: string;
    children?: React.ReactNode;
}

const CvSection: React.FC<Props> = ({ title, children }) => {
    return (
        <div>
            <h3 style={{ textTransform: "uppercase", letterSpacing: "2px" }}>
                {title}
            </h3>
            <div>{children}</div>
            <hr />
        </div>
    );
};

export default CvSection;
