interface Props {
    text: string;
    classDecorator: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ModalButton: React.FC<Props> = ({ text, classDecorator, onClick }) => {
    return (
        <button
            onClick={onClick}
            type='button'
            className={`btn ${classDecorator}`}
            data-dismiss='modal'
        >
            {text}
        </button>
    );
};

export default ModalButton;
