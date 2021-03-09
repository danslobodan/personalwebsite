import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs, RootState } from '../../state';
import { Blog } from '../../models/Blog';

interface DispatchProps {
    getBlogs(): void;
}

interface StateProps {
    blogs: Blog[];
    isSignedIn: boolean;
    isAdmin: boolean;
}

const initialState = {
    blogs: [],
    isSignedIn: false,
    isAdmin: false,
};

type BlogListProps = DispatchProps & StateProps;

class BlogList extends React.Component<BlogListProps> {
    componentDidMount() {
        this.props.getBlogs();
    }

    renderAdmin = (blog: Blog) => {
        if (this.props.isAdmin) {
            return (
                <div className='right floated content'>
                    <Link
                        to={`/blogs/edit/${blog.id}`}
                        className='ui button primary'
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/blogs/delete/${blog.id}`}
                        className='ui button negative'
                    >
                        Delete
                    </Link>
                </div>
            );
        }
    };

    renderList = () => {
        return this.props.blogs.map((blog) => {
            const publishedDate = blog.date
                ? `Published on: ${blog.date}`
                : 'Unpublished';

            return (
                <div className='item' key={blog.id}>
                    {this.renderAdmin(blog)}
                    <i className='large middle aligned icon edit' />
                    <div className='content'>
                        <a href={blog.url} className='header'>
                            {blog.title}
                        </a>
                        <div className='description'>{blog.description}</div>
                        <div className='extra'>{publishedDate}</div>
                    </div>
                </div>
            );
        });
    };

    renderCreate = () => {
        if (this.props.isAdmin) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link className='ui button primary' to='/blogs/create'>
                        Create Blog
                    </Link>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <div className='ui celled list'>{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    const { auth, blogs } = state;
    const { isSignedIn, isAdmin } = auth;
    return {
        isSignedIn: isSignedIn,
        isAdmin: isAdmin,
        blogs: Object.values(blogs),
    };
};

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    {
        getBlogs,
    }
)(BlogList);
