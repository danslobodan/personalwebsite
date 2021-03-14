interface Props {
    text: string;
    buttonType: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ModalButton: React.FC<Props> = ({ text, buttonType, onClick }) => {
    return (
        <button
            onClick={onClick}
            type='button'
            className={`btn btn-${buttonType}`}
            data-dismiss='modal'
        >
            {text}
        </button>
    );
};

export default ModalButton;
