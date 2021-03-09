import express, { Request, Response } from 'express';
import { Blog } from '../../models/blog';

const router = express.Router();

router.get('/api/blogs', async (req: Request, res: Response) => {
    const blogs = Blog.find();
    res.send(blogs);
});

export { router as getBlogsRouter };
