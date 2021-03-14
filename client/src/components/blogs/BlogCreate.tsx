import React from 'react';
import { connect } from 'react-redux';

import BlogForm from './BlogForm';
import { createBlog } from '../../state';
import { BlogFields } from '../../models/Blog';
import ModalButton from '../form/modal/ModalButton';
import Modal from '../form/modal/Modal';

interface DispatchProps {
    createBlog(formValues: BlogFields): void;
}

type BlogCreateProps = DispatchProps;

class BlogCreate extends React.Component<BlogCreateProps> {
    onSubmit = (formValues: BlogFields) => {
        this.props.createBlog(formValues);
    };

    renderContent = () => {
        return <BlogForm onSubmit={this.onSubmit} />;
    };

    renderControls = () => {
        return <ModalButton text='Submit' type='submit' classType='primary' />;
    };

    render() {
        return (
            <Modal
                title='Create Blog'
                content={this.renderContent()}
                controls={this.renderControls()}
            />
        );
    }
}

export default connect(null, { createBlog })(BlogCreate);
