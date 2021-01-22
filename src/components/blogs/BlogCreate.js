import React from 'react';
import { connect } from 'react-redux';


import BlogForm from './BlogForm';

class BlogCreate extends React.Component {

    onSubmit = formValues => {
        console.log(formValues);
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

export default connect()(BlogCreate);