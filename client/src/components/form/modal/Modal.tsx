import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
    title: string;
    content: JSX.Element | string;
    controls: JSX.Element;
}

const Modal: React.FC<Props> = ({ title, content, controls }) => {
    return ReactDOM.createPortal(
        <div
            className='modal fade'
            id='modalDialog'
            tabIndex={-1}
            role='dialog'
            aria-labelledby='modalDialogLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='modalDialogLabel'>
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
                    <div className='modal-footer'>{controls}</div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
