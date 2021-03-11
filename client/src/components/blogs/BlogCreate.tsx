import React from 'react';
import { connect } from 'react-redux';

import BlogForm from './BlogForm';
import { createBlog } from '../../state';
import { BlogFields } from '../../models/Blog';

interface DispatchProps {
    createBlog(formValues: BlogFields): void;
}

type BlogCreateProps = DispatchProps;

class BlogCreate extends React.Component<BlogCreateProps> {
    onSubmit = (formValues: BlogFields) => {
        this.props.createBlog(formValues);
    };

    render() {
        return (
            <div className='row'>
                <div className='col-md-8 order-md-1'>
                    <h4 className='mb-3'>Create new blog</h4>
                    <BlogForm onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

export default connect(null, { createBlog })(BlogCreate);
