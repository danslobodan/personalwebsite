import express, { Request, Response } from 'express';
import { NotFoundError } from '../../errors/notFoundError';
import { Blog } from '../../models/blog';

const router = express.Router();

router.get('/api/blogs/:id', async (req: Request, res: Response) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        throw new NotFoundError();
    }

    res.send(blog);
});

export { router as getBlogRouter };
