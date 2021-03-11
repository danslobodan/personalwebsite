interface Props {
    title: string;
}

export const Tenet: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <hr className='featurette-divider' />
            <div className='row featurette'>
                <div className='col-md-2'>
                    <img
                        className='rounded-circle'
                        src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                        width='150'
                        height='150'
                    />
                </div>
                <div className='col-md-10'>
                    <h2 className='featurette-heading'>{title}</h2>
                    <p className='lead'>{children}</p>
                </div>
            </div>
        </>
    );
};
