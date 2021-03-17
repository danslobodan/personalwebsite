import React from 'react';
import { connect } from 'react-redux';

import { signIn } from '../../state';

interface Props {
    signIn(): void;
}

class SignInButton extends React.Component<Props> {
    render() {
        return (
            <button
                type='button'
                className='btn btn-danger'
                onClick={this.props.signIn}
            >
                <i className='google icon' />
                Sign In
            </button>
        );
    }
}

export default connect(null, {
    signIn,
})(SignInButton);
