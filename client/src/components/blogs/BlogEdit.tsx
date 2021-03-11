import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import BlogForm from './BlogForm';
import { editBlog, getBlog } from '../../state';
import { RootState } from '../../state';
import { Blog, BlogFields } from '../../models/Blog';

interface MatchParams {
    id: string;
}

interface OwnProps extends RouteComponentProps<MatchParams> {}

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
        this.props.getBlog(this.props.match.params.id);
    }

    onSubmit = (formValues: BlogFields) => {
        this.props.editBlog(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.blog) {
            return <div>Loading...</div>;
        }

        return (
            <div className='row'>
                <div className='col-md-8 order-md-1'>
                    <h4 className='mb-3'>Edit Blog Information</h4>
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
    return { blog: state.blogs[ownProps.match.params.id] };
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    {
        editBlog,
        getBlog,
    }
)(BlogEdit);
