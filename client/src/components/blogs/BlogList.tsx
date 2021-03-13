import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs, RootState } from '../../state';
import { Blog } from '../../models/Blog';
import BlogItem from './BlogItem';
import Modal from '../form/modal/Modal';
import ModalButton from '../form/modal/ModalButton';

interface DispatchProps {
    getBlogs(): void;
}

interface StateProps {
    blogs: { [id: string]: Blog };
    isAdmin: boolean;
}

interface State {
    activeBlog: string;
}

type BlogListProps = DispatchProps & StateProps;

class BlogList extends React.Component<BlogListProps, State, {}> {
    state = {
        activeBlog: '',
    };

    componentDidMount() {
        this.props.getBlogs();
    }

    renderAdmin = (id: string) => {
        if (this.props.isAdmin) {
            return (
                <div className='d-flex flex-row-reverse'>
                    <button
                        type='button'
                        className='btn btn-danger'
                        data-toggle='modal'
                        data-target='#modalDialog'
                        onClick={() => this.setState({ activeBlog: id })}
                    >
                        Delete
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary'
                        data-toggle='modal'
                        data-target='#modalDialog'
                        onClick={() => this.setState({ activeBlog: id })}
                    >
                        Edit
                    </button>
                </div>
            );
        }
    };

    renderList = () => {
        return Object.values(this.props.blogs).map((blog) => {
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

    renderContent = (id: string) => {
        const title = this.props.blogs[id]?.title;
        return `Are you sure you want to delete ${title}?`;
    };

    renderControls = () => {
        return (
            <>
                <ModalButton text='Cancel' classDecorator='btn-primary' />
                <ModalButton
                    text='Delete'
                    classDecorator='btn-danger'
                    onClick={() => console.log('Delete!')}
                />
            </>
        );
    };

    render() {
        return (
            <div className='container'>
                <div className='row mb-2'>{this.renderList()}</div>
                {this.renderCreate()}
                <Modal
                    title='Delete modal'
                    content={this.renderContent(this.state.activeBlog)}
                    controls={this.renderControls()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    const { auth, blogs } = state;
    const { isAdmin } = auth;
    return {
        isAdmin: true,
        blogs,
    };
};

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    {
        getBlogs,
    }
)(BlogList);
