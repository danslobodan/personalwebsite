import React from 'react';

const SignInButton = ({ text, onClick }) => {

    

    return (
        <button
            className="ui red google button"
            onClick={onClick}
        >
        <i className="google icon" />
            {text}
        </button>
    );
};

export default SignInButton;