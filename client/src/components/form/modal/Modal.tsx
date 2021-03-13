import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
    id: string;
    title: string;
    content: string;
}

const Modal: React.FC<Props> = ({ id, title, content, children }) => {
    return ReactDOM.createPortal(
        <div
            className='modal fade'
            id={id}
            tabIndex={-1}
            role='dialog'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                            {title}
                        </h5>
                        <button
                            type='button'
                            className='close'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>{content}</div>
                    <div className='modal-footer'>{children}</div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
