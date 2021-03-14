import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import BlogForm from './BlogForm';
import { editBlog, getBlog } from '../../state';
import { RootState } from '../../state';
import { Blog, BlogFields } from '../../models/Blog';
import Modal from '../form/modal/Modal';
import ModalButton from '../form/modal/ModalButton';

interface OwnProps {
    blog: Blog;
}

interface DispatchProps {
    getBlog(id: string): void;
    editBlog(id: string, formValues: BlogFields): void;
}

type BlogEditProps = DispatchProps & OwnProps;

class BlogEdit extends React.Component<BlogEditProps> {
    componentDidMount() {
        this.props.getBlog(this.props.blog.id);
    }

    onSubmit = (formValues: BlogFields) => {
        this.props.editBlog(this.props.blog.id, formValues);
    };

    renderContent = () => {
        return (
            <BlogForm
                onSubmit={this.onSubmit}
                initialValues={this.props.blog}
            />
        );
    };

    renderControls = () => {
        return <ModalButton text='Submit' buttonType='primary' />;
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

export default connect<{}, DispatchProps, OwnProps, RootState>(null, {
    editBlog,
    getBlog,
})(BlogEdit);
