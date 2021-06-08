import React from 'react';

interface Props {
    href: string;
}

export const ExternalLink: React.FC<Props> = ({ href, children }) => {
    return (
        <a href={href} target='_blank' rel='noreferrer noopener'>
            {children}
        </a>
    );
};
