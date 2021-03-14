interface Props {
    text: string;
    classType: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ModalButton: React.FC<Props> = ({ text, classType, onClick }) => {
    return (
        <button
            onClick={onClick}
            type='button'
            className={`btn btn-${classType}`}
            data-dismiss='modal'
        >
            {text}
        </button>
    );
};

export default ModalButton;
