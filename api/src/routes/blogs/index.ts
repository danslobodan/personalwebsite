import express from 'express';

import { createBlogRouter } from './createBlog';
import { deleteBlogRouter } from './deleteBlog';
import { getBlogRouter } from './getBlog';
import { getBlogsRouter } from './getBlogs';
import { updateBlogRouter } from './updateBlog';

const router = express.Router();

router.use('/api/blogs', [
    createBlogRouter,
    deleteBlogRouter,
    getBlogRouter,
    getBlogsRouter,
    updateBlogRouter,
]);

export { router as blogRouter };
