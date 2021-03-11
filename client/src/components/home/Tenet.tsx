interface TProps {
    title: string;
}

export const Tenet: React.FC<TProps> = ({ title, children }) => {
    return (
        <div className='col-lg-4'>
            <img
                className='rounded-circle'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                width='140'
                height='140'
            />
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};
