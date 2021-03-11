import React from 'react';

interface SignInButtonProps {
    text: string;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const SignInButton: React.FC<SignInButtonProps> = ({ text, onClick }) => {
    return (
        <button className='ui red google button' onClick={onClick}>
            <i className='google icon' />
            {text}
        </button>
    );
};

export default SignInButton;
