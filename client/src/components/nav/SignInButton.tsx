import React from 'react';
import { connect } from 'react-redux';

import { signIn } from '../../state';
import { Google } from 'react-bootstrap-icons';

const signInText = 'Sign In';

interface Props {
    signIn(): void;
}

class SignInButton extends React.Component<Props> {
    render() {
        return (
            <a
                href='http://localhost:5000/api/auth/google'
                className='btn btn-danger'
            >
                <Google />
                <span>{signInText}</span>
            </a>
        );
    }
}

export default connect(null, {
    signIn,
})(SignInButton);
