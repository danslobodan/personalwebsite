import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui vertical segment">
            <div className="ui inverted block huge header">{'{ '}
                <span style={{fontFamily: 'Brush Script MT,cursive'}}>TA</span>
                {' } '}The True Architect</div>
            <div className="ui secondary menu">
                <Link to="/" className="item">
                    Home
                </Link>
                <Link to="/blogs" className="item">
                    Blogs
                </Link>
                <div className="right menu">
                    <Link to="/about" className="item">
                        About
                    </Link>
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
};

export default Header;