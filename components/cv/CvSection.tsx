interface Props {
    title: string;
    children?: React.ReactNode;
    icon?: JSX.Element;
}

const CvSection: React.FC<Props> = ({ title, icon, children }) => {
    return (
        <div
            style={{
                marginBottom: "30px",
                width: "100%",
                paddingLeft: "50px",
                paddingRight: "50px",
            }}
        >
            <div style={{ display: "flex" }}>
                <div style={{ marginRight: "10px" }}>{icon}</div>
                <h3
                    style={{ textTransform: "uppercase", letterSpacing: "2px" }}
                >
                    {title}
                </h3>
            </div>
            <hr />
            <div>{children}</div>
        </div>
    );
};

export default CvSection;
