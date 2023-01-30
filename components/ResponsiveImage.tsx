import Image from "next/image";
import { CSSProperties } from "react";

interface Props {
    src: string;
    alt: string;
    height: number;
    width: number;
    className?: string;
    style?: CSSProperties;
}

export const ResponsiveImage: React.FC<Props> = ({
    src,
    alt,
    height,
    width,
    className,
    style,
}) => {
    return (
        <Image
            className={className}
            style={{
                ...style,
                width: "100%",
                height: "auto",
            }}
            src={`/${src}`}
            alt={alt}
            width={width}
            height={height}
        />
    );
};
