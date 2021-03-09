import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../state';
import SignInButton from './SignInButton';
import { RootState } from '../state';

interface OwnProps {}

interface StateProps {
    isSignedIn: boolean;
    userId: string | null;
}

interface DispatchProps {
    signIn(userId: string): void;
    signOut(): void;
}

type GoogleAuthProps = OwnProps & StateProps & DispatchProps;

class GoogleAuth extends React.Component<GoogleAuthProps> {
    componentDidMount() {
        // window.gapi.load('client:auth2', () => {
        //     window.gapi.client
        //         .init({
        //             clientId: process.env.CLIENT_ID,
        //             scope: 'email',
        //         })
        //         .then(() => {
        //             this.auth = window.gapi.auth2.getAuthInstance();
        //             this.onAuthChange(this.auth.isSignedIn.get());
        //             this.auth.isSignedIn.listen(this.onAuthChange);
        //         });
        // });
    }

    onAuthChange = (isSignedIn: boolean) => {
        // if (isSignedIn) {
        //     this.props.signIn(this.auth.currentUser.get().getId());
        // } else {
        //     this.props.signOut();
        // }
    };

    renderLoginButton = () => {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <SignInButton text={'Sign Out'} onClick={this.onSignOutClick} />
            );
        } else {
            return (
                <SignInButton text={'Sign In'} onClick={this.onSignInClick} />
            );
        }
    };

    onSignInClick = () => {
        // this.auth.signIn();
    };

    onSignOutClick = () => {
        // this.auth.signOut();
    };

    render() {
        return <div>{this.renderLoginButton()}</div>;
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
    };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
