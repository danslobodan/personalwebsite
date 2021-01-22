import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogList = ({ isAdmin }) => {

    const renderAdmin = blog => {
        
        if (isAdmin) {
            return (
                <div className="right floated content">
                    <Link 
                        to={`/blogs/edit/${blog.id}`}
                        className="ui button primary"
                    >
                        Edit
                    </Link>
                </div>
            );
        };
    };
    
    if (isAdmin) {
        return (
            <div>BlogListAdmin</div>
        );
    }

    return (
        <div>BlogList</div>
    );
};

const mapStateToProps = ({ auth, blogs }) => {

    const { isSignedIn, isAdmin } = auth;
    return { 
        isSignedIn,
        isAdmin,
        blogs
    };
};

export default connect(
    mapStateToProps
)(BlogList);