import React from 'react';
import { connect } from 'react-redux';
import { Blog } from '../../models/Blog';

import { deleteBlog } from '../../state';
import { RootState } from '../../state';
import { Modal, ModalButton } from '../form/modal';

interface OwnProps {
    blog: Blog;
}

interface DispatchProps {
    deleteBlog(id: string): void;
}

type BlogDeleteProps = OwnProps & DispatchProps;

class BlogDelete extends React.Component<BlogDeleteProps> {
    onClick = () => {
        this.props.deleteBlog(this.props.blog.id);
    };

    renderContent = () => {
        const title = this.props.blog.title;
        const content = `Are you sure you want to delete ${title}?`;
        return <div>{content}</div>;
    };

    renderControls = () => {
        return (
            <div>
                <ModalButton text='Cancel' classType='primary' />
                <ModalButton
                    text='Delete'
                    classType='danger'
                    onClick={this.onClick}
                />
            </div>
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
