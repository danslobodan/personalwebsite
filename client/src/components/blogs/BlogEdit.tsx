import React from 'react';
import { connect } from 'react-redux';

import BlogForm from './BlogForm';
import { editBlog } from '../../state';
import { Blog, BlogFields } from '../../models/Blog';
import { Modal } from '../form/modal';

interface OwnProps {
    blog: Blog;
}

interface DispatchProps {
    editBlog(id: string, formValues: BlogFields): void;
}

type BlogEditProps = DispatchProps & OwnProps;

class BlogEdit extends React.Component<BlogEditProps> {
    onSubmit = (formValues: BlogFields) => {
        this.props.editBlog(this.props.blog.id, formValues);
    };

    renderContent = () => {
        return (
            <BlogForm
                id='edit'
                onSubmit={this.onSubmit}
                initialValues={this.props.blog}
            />
        );
    };

    renderControls = () => {
        return (
            <button className='btn btn-primary' type='submit'>
                Submit
            </button>
        );
    };

    render() {
        return (
            <Modal
                title='Edit Blog'
                content={this.renderContent()}
                controls={this.renderControls()}
            />
        );
    }
}

export default connect(null, {
    editBlog,
})(BlogEdit);
