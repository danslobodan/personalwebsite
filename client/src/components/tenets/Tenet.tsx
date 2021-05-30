interface Props {
    title: string;
    imageSrc: string;
}

export const Tenet: React.FC<Props> = ({ title, children, imageSrc }) => {
    const renderImage = () => {
        return (
            <img
                className={`rounded float-left`}
                src={imageSrc}
                alt={imageSrc}
            />
        );
    };

    const renderTenet = () => {
        return (
            <div className={`md text-right`}>
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
                <div className='col-md-6'>{renderImage()}</div>
                <div className='col-md-6'>{renderTenet()}</div>
            </div>
        </div>
    );
};
