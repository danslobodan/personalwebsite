import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    header: string;
    content: JSX.Element;
    actions: JSX.Element;
    onDismiss: () => void;
}

const Modal: React.FC<ModalProps> = ({
    header,
    content,
    actions,
    onDismiss,
}) => {
    const modalHtml = document.querySelector('#modal');
    if (!modalHtml) {
        return <div>Modal Element not found</div>;
    }

    return ReactDOM.createPortal(
        <div onClick={onDismiss} className='ui dimmer modals visible active'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='ui standard modal visible active'
            >
                <div className='header'>{header}</div>
                <div className='content'>{content}</div>
                <div className='actions'>{actions}</div>
            </div>
        </div>,
        modalHtml
    );
};

export default Modal;
