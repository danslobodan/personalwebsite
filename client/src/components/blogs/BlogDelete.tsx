import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../../history';
import Modal from '../Modal';
import { getBlog, deleteBlog } from '../../state';
import { RootState } from '../../state';
import { Blog } from '../../models/Blog';

interface MatchParams {
    id: string;
}

interface OwnProps extends RouteComponentProps<MatchParams> {}

interface StateProps {
    blog: Blog;
}

interface DispatchProps {
    getBlog(id: string): void;
    deleteBlog(id: string): void;
}

type BlogDeleteProps = StateProps & DispatchProps & OwnProps;

class BlogDelete extends React.Component<BlogDeleteProps> {
    componentDidMount() {
        this.props.getBlog(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteBlog(id)}
                    className='ui button negative'
                >
                    Delete
                </button>
                <Link to='/blogs' className='ui button'>
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.blog) {
            return `Are you sure you want to delete this blog?`;
        }

        return `Are you sure you want to delete: ${this.props.blog.title}`;
    }

    render() {
        return (
            <Modal
                header='Delete Blog'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/blogs')}
            />
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
    return { blog: state.blogs[ownProps.match.params.id] };
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    {
        getBlog,
        deleteBlog,
    }
)(BlogDelete);
