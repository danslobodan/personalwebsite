interface Props {
    title: string;
    imageLeft: boolean;
}

export const Tenet: React.FC<Props> = ({ title, imageLeft, children }) => {
    const renderFlip = (imageLeft: boolean) => {
        if (imageLeft) {
            return renderImage();
        }

        return renderTenet();
    };

    const renderImage = () => {
        const className = imageLeft ? 'float-left' : 'float-right';

        return (
            <img
                className={`rounded ${className}`}
                src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                width='300'
                height='300'
                alt='Tenet'
            />
        );
    };

    const renderTenet = () => {
        const className = !imageLeft ? 'text-left' : 'text-right';

        return (
            <div className={`md ${className}`}>
                <br />
                <h2 className='featurette-heading'>{title}</h2>
                <br />
                <hr />
                <br />
                <p className='lead'>{children}</p>
            </div>
        );
    };

    return (
        <div>
            <hr className='featurette-divider' />
            <div className='row featurette'>
                <div className='col-md-6'>{renderFlip(imageLeft)}</div>
                <div className='col-md-6'>{renderFlip(!imageLeft)}</div>
            </div>
        </div>
    );
};
