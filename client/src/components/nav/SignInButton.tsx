import React from 'react';

interface SignInButtonProps {
    text: string;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const SignInButton: React.FC<SignInButtonProps> = ({ text, onClick }) => {
    return (
        <a
            className='btn btn-danger'
            href='http://localhost:5000/api/auth/google'
        >
            Sign In with Google
        </a>
        // <button type='button' className='btn btn-danger' onClick={onClick}>
        //     <i className='google icon' />
        //     {text}
        // </button>
    );
};

export default SignInButton;
