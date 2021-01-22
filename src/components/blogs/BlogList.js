import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BlogList extends React.Component {

    renderAdmin = blog => {
        
        if (this.props.isAdmin) {
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

    renderList = () => {
        return this.props.blogs.map(blog => {
            return (
                <div className="item" key={blog.id}>
                    {this.renderAdmin(blog)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {blog.title}
                    </div>
                </div>
            );
        });
    }
    
    render() {

        return (
            <div>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({ auth, blogs }) => {

    const { isSignedIn, isAdmin } = auth;
    return { 
        isSignedIn,
        isAdmin,
        blogs: Object.values(blogs)
    };
};

export default connect(
    mapStateToProps
)(BlogList);