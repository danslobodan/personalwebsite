import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { NotFoundError } from '../../errors/notFoundError';
import { validateRequest } from '../../middlewares/validateRequest';
import { Blog } from '../../models/blog';

const router = express.Router();

router.put(
    '/api/blogs',
    [
        body('title').notEmpty().withMessage('Title is required'),
        body('description').notEmpty().withMessage('Description is required'),
        body('link')
            .notEmpty()
            .withMessage('Link is required')
            .isURL()
            .withMessage('Link must be a valid url'),
        body('date').isDate(),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            throw new NotFoundError();
        }

        const { title, description, link, date } = req.body;

        blog.set({
            title,
            description,
            link,
            date,
        });

        await blog.save();
        res.send(blog);
    }
);

export { router as updateBlogRouter };
