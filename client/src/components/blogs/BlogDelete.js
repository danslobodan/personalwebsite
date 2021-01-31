import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal';

class BlogDelete extends React.Component {

    renderActions() {
        return (
            <React.Fragment>
                <button className="ui button primary">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    render() {
        return (
            <Modal
                header="Delete Blog"
                content="Do you want to delete this blog?"
                actions={this.renderActions()}
            />
        )
    }
}

export default BlogDelete;