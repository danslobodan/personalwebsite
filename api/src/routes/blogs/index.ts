import express from 'express';

import { getBlogsRouter } from './getBlogs';

const router = express.Router();

router.use('/blogs', [getBlogsRouter]);

export { router as blogRouter };
