import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../state';

interface DispatchProps {
    signIn(): void;
}

class SignInButton extends React.Component<DispatchProps> {
    render() {
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
    }
}

export default connect(null, { signIn })(SignInButton);
