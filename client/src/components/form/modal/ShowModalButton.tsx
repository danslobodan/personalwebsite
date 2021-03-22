interface Props {
    text: string;
    buttonType: string;
    onClick(): void;
}

export const ShowModalButton: React.FC<Props> = ({
    text,
    buttonType,
    onClick,
}) => {
    return (
        <button
            type='button'
            className={`btn btn-${buttonType}-ts`}
            data-toggle='modal'
            data-target='#modalDialog'
            onClick={onClick}
        >
            {text}
        </button>
    );
};
