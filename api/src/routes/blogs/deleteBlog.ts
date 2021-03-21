import express, { Request, Response } from 'express';
import { NotFoundError } from '../../errors/notFoundError';
import { Blog } from '../../models/blog';

const router = express.Router();

router.delete('/:id', async (req: Request, res: Response) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        throw new NotFoundError();
    }

    blog.delete();

    res.send({ id: req.params.id });
});

export { router as deleteBlogRouter };
