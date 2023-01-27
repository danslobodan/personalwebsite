import React from "react";

interface Props {
    title: string;
    name: string;
}

const Heading: React.FC<Props> = ({ title, name }) => {
    return (
        <div
            style={{
                marginBottom: "30px",
                padding: "50px",
                borderRadius: "50px",
                backgroundColor: "#311432",
                color: "white",
                width: "100%",
            }}
        >
            <h3
                style={{
                    fontWeight: "lighter",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                }}
            >
                {title}
            </h3>
            <h1
                style={{
                    marginLeft: "30px",
                    fontWeight: "lighter",
                    fontSize: "70px",
                }}
            >
                {name}
            </h1>
        </div>
    );
};

export default Heading;
