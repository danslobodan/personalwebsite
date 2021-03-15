import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../state';

interface DispatchProps {
    signOut(): void;
}

class SignOutButton extends React.Component<DispatchProps> {
    render() {
        return (
            <button
                type='button'
                className='btn btn-danger'
                onClick={this.props.signOut}
            >
                <i className='google icon' />
                Sign Out
            </button>
        );
    }
}

export default connect(null, { signOut })(SignOutButton);
