import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs, RootState } from '../../state';
import { Blog } from '../../models/Blog';
import BlogItem from './BlogItem';
import BlogButtons from './BlogButtons';

interface DispatchProps {
    getBlogs(): void;
}

interface StateProps {
    blogs: Blog[];
    isAdmin: boolean;
}

type BlogListProps = DispatchProps & StateProps;

class BlogList extends React.Component<BlogListProps> {
    componentDidMount() {
        this.props.getBlogs();
    }

    renderAdmin = (id: string) => {
        if (this.props.isAdmin) {
            return <BlogButtons id={id} />;
        }
    };

    renderList = () => {
        return this.props.blogs.map((blog) => {
            return <BlogItem blog={blog}>{this.renderAdmin(blog.id)}</BlogItem>;
        });
    };

    renderCreate = () => {
        if (this.props.isAdmin) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link className='btn btn-primary' to='/blogs/create'>
                        Create Blog
                    </Link>
                </div>
            );
        }
    };

    render() {
        return (
            <div className='container'>
                <div className='row mb-2'>{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    const { auth, blogs } = state;
    const { isAdmin } = auth;
    return {
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
