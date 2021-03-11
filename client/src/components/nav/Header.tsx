import React from 'react';
import Brand from './Brand';
import NavMenuItem from './NavMenuItem';
import SignInButton from './SignInButton';
import Toggler from './Toggler';

const Header: React.FC = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
                <Brand />
                <Toggler />
                <div className='collapse navbar-collapse' id='navbarCollapse'>
                    <ul className='navbar-nav mr-auto'>
                        <NavMenuItem label='Home' to='/' />
                        <NavMenuItem label='Blogs' to='/blogs' />
                        <NavMenuItem label='About' to='/about' />
                    </ul>
                    <div className='mt-2 mt-md-0'>
                        <SignInButton
                            text='Sign In'
                            onClick={(e) => console.log('sign in')}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
