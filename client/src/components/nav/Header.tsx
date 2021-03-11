import React from 'react';
import { NavMenuItem } from './NavMenuItem';

const Header: React.FC = () => {
    const renderBrand = () => {
        return (
            <div className='navbar-brand'>
                {'{ '}
                <span style={{ fontFamily: 'Brush Script MT,cursive' }}>
                    TA
                </span>
                {' } '}The True Architect
            </div>
        );
    };

    const renderToggler = () => {
        return (
            <button
                className='navbar-toggler collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#navbarCollapse'
                aria-controls='navbarCollapse'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
        );
    };

    const renderButtons = () => {
        return (
            <div className='navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                    <NavMenuItem label='Home' to='/' />
                    <NavMenuItem label='Blogs' to='/blogs' />
                    <NavMenuItem label='About' to='/about' />
                </ul>
            </div>
        );
    };

    return (
        <header className='header'>
            <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
                {renderBrand()}
                {renderToggler()}
                {renderButtons()}
            </nav>
        </header>
    );
};

export default Header;
