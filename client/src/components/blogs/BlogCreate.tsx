import React from 'react';
import { connect } from 'react-redux';

import BlogForm from './BlogForm';
import { createBlog } from '../../state';
import { BlogFields } from '../../models/Blog';
import { Modal } from '../form/modal';

interface DispatchProps {
    createBlog(formValues: BlogFields): void;
}

type BlogCreateProps = DispatchProps;

class BlogCreate extends React.Component<BlogCreateProps> {
    onSubmit = (formValues: BlogFields) => {
        this.props.createBlog(formValues);
    };

    renderContent = () => {
        return <BlogForm id='create' onSubmit={this.onSubmit} />;
    };

    renderControls = () => {
        return (
            <button form='form' className='btn btn-primary' type='submit'>
                Submit
            </button>
        );
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
