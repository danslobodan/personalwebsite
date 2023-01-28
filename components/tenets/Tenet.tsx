interface Props {
    title: string;
    imageSrc: string;
    children?: React.ReactNode;
}

export const Tenet: React.FC<Props> = ({ title, children, imageSrc }) => {
    const renderImage = () => {
        return <img src={imageSrc} alt={title} />;
    };

    const renderTenet = () => {
        return (
            <div>
                <h2 style={{ marginBottom: "10px" }}>{title}</h2>
                <p className="lead">{children}</p>
            </div>
        );
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ paddingTop: "25px" }}>{renderImage()}</div>
                <div>{renderTenet()}</div>
            </div>
        </div>
    );
};
