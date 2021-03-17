interface Props {
    title: string;
    imageLeft: boolean;
}

export const Tenet: React.FC<Props> = ({ title, imageLeft, children }) => {
    const renderFlip = (image: boolean) => {
        if (image) {
            return renderImage();
        }

        return renderTenet();
    };

    const renderImage = () => {
        return (
            <img
                className='rounded'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                width='300'
                height='300'
            />
        );
    };

    const renderTenet = () => {
        return (
            <>
                <h2 className='featurette-heading'>{title}</h2>
                <p className='lead'>{children}</p>
            </>
        );
    };

    return (
        <>
            <hr className='featurette-divider' />
            <div className='row featurette'>
                <div className='col-md-6'>{renderFlip(imageLeft)}</div>
                <div className='col-md-6'>{renderFlip(!imageLeft)}</div>
            </div>
        </>
    );
};
