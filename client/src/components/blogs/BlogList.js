import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs } from '../../actions';

class BlogList extends React.Component {

    componentDidMount() {
        this.props.getBlogs();
    }

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
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            );
        };
    };

    renderList = () => {
        return this.props.blogs.map(blog => {
            return (
                <div className="item" key={blog.id}>
                    {this.renderAdmin(blog)}
                    <i className="large middle aligned icon edit" />
                    <div className="content">
                        <a href={blog.url} className="header">{blog.title}</a>
                        <div className="description">{blog.description}</div>
                    </div>
                </div>
            );
        });
    }

    renderCreate = () => {
        if (this.props.isAdmin) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link className="ui button primary" to="/blogs/create">Create Blog</Link>
                </div>
            )
        }
    }
    
    render() {

        return (
            <div>
                <h3>Blogs</h3>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
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
    mapStateToProps,
    { getBlogs }
)(BlogList);