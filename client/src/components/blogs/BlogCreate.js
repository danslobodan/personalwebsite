import React from 'react';
import { connect } from 'react-redux';

import BlogForm from './BlogForm';
import { createBlog } from '../../actions';

class BlogCreate extends React.Component {

    onSubmit = formValues => {
        this.props.createBlog(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create new blog</h3>
                <BlogForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(
    null,
    { createBlog }
)(BlogCreate);