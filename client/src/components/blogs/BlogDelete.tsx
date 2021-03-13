import React from 'react';
import { connect } from 'react-redux';

import { deleteBlog } from '../../state';
import { RootState } from '../../state';
import ModalButton from '../form/modal/ModalButton';

interface OwnProps {
    id: string;
}

interface DispatchProps {
    deleteBlog(id: string): void;
}

type BlogDeleteProps = OwnProps & DispatchProps;

class BlogDelete extends React.Component<BlogDeleteProps> {
    onClick() {
        this.props.deleteBlog(this.props.id);
    }

    render() {
        return (
            <div>
                <div>Are you sure you want to delete this blog?</div>
                <ModalButton text='Cancel' classDecorator='btn-primary' />
                <ModalButton
                    text='Delete'
                    classDecorator='btn-danger'
                    onClick={this.onClick}
                />
            </div>
        );
    }
}

export default connect<{}, DispatchProps, OwnProps, RootState>(null, {
    deleteBlog,
})(BlogDelete);
