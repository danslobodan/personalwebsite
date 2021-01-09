import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/blog" className="item">
                Blog
            </Link>
            <div className="right menu">
                <Link to="/about" className="item">
                    About
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;