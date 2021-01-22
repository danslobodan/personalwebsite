import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import BlogForm from './BlogForm';

class BlogEdit extends React.Component {

    onSubmit = formValues => {
        console.log(formValues);
    }

    render() {

        if (!this.props.blog) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Edit blog information</h3>
                <BlogForm 
                    onSubmit={this.onSubmit} 
                    initialValues={_.pick(this.props.blog, 'title', 'description', 'url')}
                />
            </div>
        );
    };
};

const mapStateToProps = ({ blogs }, ownProps) => {
    return { blog: blogs[ownProps.match.params.id] }
}

export default connect(
    mapStateToProps
)(BlogEdit);