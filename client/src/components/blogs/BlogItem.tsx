import './BlogItem.css';

import { Blog } from '../../models/Blog';
import dateFormat from 'dateformat';
import React from 'react';

interface Props {
    blog: Blog;
}

const publisherText = 'Medium';

const BlogItem: React.FC<Props> = ({
    blog: { title, snippet, imgSrc, link, date },
    children,
}) => {
    return (
        <div className='col-md-10'>
            <div className='card flex-md-row mb-4 box-shadow h-md-250'>
                <div className='card-body d-flex flex-column align-items-start'>
                    <strong className='d-inline-block mb-2 text-primary-ts'>
                        {publisherText}
                    </strong>
                    <h3 className='mb-0'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-dark'
                            href={link}
                        >
                            {title}
                        </a>
                    </h3>
                    <div className='mb-1 text-muted'>
                        {date ? dateFormat(date, 'd mmm yy') : 'Unpublished'}
                    </div>
                    <p className='card-text mb-auto blog-snippet-ta'>
                        {snippet}
                    </p>
                </div>
                <div>
                    <img
                        className='card-img-right flex-auto d-none d-md-block blog-image-ta'
                        data-src='holder.js/200x250?theme=thumb'
                        alt='Blog image'
                        src={imgSrc}
                        data-holder-rendered='true'
                    />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
