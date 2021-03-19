import './Header.css';
import React from 'react';
import { connect } from 'react-redux';

import Brand from './Brand';
import NavMenuItem from './NavMenuItem';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import Toggler from './Toggler';
import { User } from '../../models/User';
import { RootState, getCurrentUser } from '../../state';

interface StateProps {
    currentUser: User | null;
}

interface DispatchProps {
    getCurrentUser(): void;
}

type Props = StateProps & DispatchProps;

class Header extends React.Component<Props> {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    renderAuth = () => {
        if (this.props.currentUser) {
            return <SignOutButton />;
        }

        return <SignInButton />;
    };

    render() {
        return (
            <header className='ta-header'>
                <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark ta-bg-primary'>
                    <Brand />
                    <Toggler />
                    <div
                        className='collapse navbar-collapse'
                        id='navbarCollapse'
                    >
                        <ul className='navbar-nav mr-auto'>
                            <NavMenuItem label='Home' to='/' />
                            <NavMenuItem label='Blogs' to='/blogs' />
                            <NavMenuItem label='About' to='/about' />
                        </ul>
                        <div className='mt-2 mt-md-0'>{this.renderAuth()}</div>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        currentUser: state.auth.currentUser,
    };
};

export default connect(mapStateToProps, { getCurrentUser })(Header);
