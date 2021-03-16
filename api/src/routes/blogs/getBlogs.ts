import express, { Request, Response } from 'express';
import { Blog } from '../../models/blog';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const blogs = await Blog.find({});
    res.send(blogs);
});

export { router as getBlogsRouter };
