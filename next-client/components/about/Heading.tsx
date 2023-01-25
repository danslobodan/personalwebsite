import React from "react";

const Heading: React.FC = () => {
    return (
        <div
            style={{
                marginLeft: "30px",
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
                Technical Team Lead
            </h3>
            <h1
                style={{
                    marginLeft: "30px",
                    fontWeight: "lighter",
                    fontSize: "70px",
                }}
            >
                Slobodan Dan
            </h1>
        </div>
    );
};

export default Heading;
