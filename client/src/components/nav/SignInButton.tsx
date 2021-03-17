import React from 'react';

const SignInButton: React.FC = () => {
    return (
        <a
            href='http://localhost:5000/api/auth/google'
            type='button'
            className='btn btn-danger'
        >
            <i className='google icon' />
            Sign In
        </a>
    );
};

export default SignInButton;
