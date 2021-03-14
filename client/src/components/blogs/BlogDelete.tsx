import React from 'react';
import { connect } from 'react-redux';
import { Blog } from '../../models/Blog';

import { deleteBlog } from '../../state';
import { RootState } from '../../state';
import Modal from '../form/modal/Modal';
import ModalButton from '../form/modal/ModalButton';

interface OwnProps {
    blog: Blog;
}

interface DispatchProps {
    deleteBlog(id: string): void;
}

type BlogDeleteProps = OwnProps & DispatchProps;

class BlogDelete extends React.Component<BlogDeleteProps> {
    onClick() {
        this.props.deleteBlog(this.props.blog.id);
    }

    renderContent = () => {
        const title = this.props.blog.title;
        const content = `Are you sure you want to delete ${title}?`;
        return <div>{content}</div>;
    };

    renderControls = () => {
        return (
            <>
                <ModalButton text='Cancel' classType='primary' />
                <ModalButton
                    text='Delete'
                    classType='danger'
                    onClick={this.onClick}
                />
            </>
        );
    };

    render() {
        return (
            <Modal
                title='Delete Blog'
                content={this.renderContent()}
                controls={this.renderControls()}
            />
        );
    }
}

export default connect<{}, DispatchProps, OwnProps, RootState>(null, {
    deleteBlog,
})(BlogDelete);
