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
    id: string;
}

interface DispatchProps {
    getBlog(id: string): void;
    editBlog(id: string, formValues: BlogFields): void;
}

interface StateProps {
    blog: Blog;
}

type BlogEditProps = StateProps & DispatchProps & OwnProps;

class BlogEdit extends React.Component<BlogEditProps> {
    componentDidMount() {
        this.props.getBlog(this.props.id);
    }

    onSubmit = (formValues: BlogFields) => {
        this.props.editBlog(this.props.id, formValues);
    };

    renderContent = () => {
        if (!this.props.blog) {
            return <div>Loading...</div>;
        }

        return (
            <BlogForm
                onSubmit={this.onSubmit}
                initialValues={_.pick(
                    this.props.blog,
                    'title',
                    'description',
                    'link',
                    'date'
                )}
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

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
    return { blog: state.blogs[ownProps.id] };
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    {
        editBlog,
        getBlog,
    }
)(BlogEdit);
