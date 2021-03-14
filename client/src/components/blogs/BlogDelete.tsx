import React from 'react';
import { connect } from 'react-redux';

import { deleteBlog } from '../../state';
import { RootState } from '../../state';
import Modal from '../form/modal/Modal';
import ModalButton from '../form/modal/ModalButton';

interface OwnProps {
    id: string;
    title: string;
}

interface DispatchProps {
    deleteBlog(id: string): void;
}

type BlogDeleteProps = OwnProps & DispatchProps;

class BlogDelete extends React.Component<BlogDeleteProps> {
    onClick() {
        this.props.deleteBlog(this.props.id);
    }

    renderContent = () => {
        const title = this.props.title;
        const content = `Are you sure you want to delete ${title}?`;
        return <div>{content}</div>;
    };

    renderControls = () => {
        return (
            <>
                <ModalButton text='Cancel' buttonType='primary' />
                <ModalButton
                    text='Delete'
                    buttonType='danger'
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
