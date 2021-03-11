import React from 'react';

interface SignInButtonProps {
    text: string;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const SignInButton: React.FC<SignInButtonProps> = ({ text, onClick }) => {
    return (
        <button type='button' className='btn btn-danger' onClick={onClick}>
            <i className='google icon' />
            {text}
        </button>
    );
};

export default SignInButton;
