import { ResponsiveImage } from "../ResponsiveImage";

interface Props {
    title: string;
    imageSrc: string;
    children?: React.ReactNode;
}

export const Tenet: React.FC<Props> = ({ title, children, imageSrc }) => {
    const renderImage = () => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ResponsiveImage
                    style={{ maxWidth: "376px" }}
                    src={imageSrc}
                    alt={title}
                    width={376}
                    height={261}
                />
            </div>
        );
    };

    const renderTenet = () => {
        return (
            <div>
                <h2 style={{ marginBottom: "10px" }}>{title}</h2>
                <div className="lead">{children}</div>
            </div>
        );
    };

    return (
        <div style={{ marginBottom: "50px" }}>
            <div className="row">
                <div className="col-6">{renderImage()}</div>
                <div className="col-6">{renderTenet()}</div>
            </div>
        </div>
    );
};
