interface Props {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    classType: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ModalButton: React.FC<Props> = ({ text, type, classType, onClick }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`btn btn-${classType}`}
            data-dismiss='modal'
        >
            {text}
        </button>
    );
};

export default ModalButton;
