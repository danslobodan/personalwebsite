import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
}

const BlogButtons: React.FC<Props> = ({ id }) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
                <Link
                    type='button'
                    className='btn btn-primary'
                    to={`/blogs/edit/${id}`}
                >
                    Edit
                </Link>
                <Link
                    type='button'
                    className='btn btn-danger'
                    to={`/blogs/delete/${id}`}
                >
                    Delete
                </Link>
            </div>
        </div>
    );
};

export default BlogButtons;
