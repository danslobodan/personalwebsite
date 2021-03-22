import React from 'react';
import { Google } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { signOut } from '../../state';

const signOutText = 'Sign Out';

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
                <Google />
                {signOutText}
            </button>
        );
    }
}

export default connect(null, { signOut })(SignOutButton);
