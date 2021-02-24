import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import BlogForm from './BlogForm';
import { editBlog, getBlog } from '../../actions';

class BlogEdit extends React.Component {

    componentDidMount() {
        this.props.getBlog(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editBlog(this.props.match.params.id, formValues);
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
                    initialValues={_.pick(this.props.blog, 'title', 'description', 'url', 'date')}
                />
            </div>
        );
    };
};

const mapStateToProps = ({ blogs }, ownProps) => {
    return { blog: blogs[ownProps.match.params.id] }
}

export default connect(
    mapStateToProps,
    { editBlog, getBlog }
)(BlogEdit);