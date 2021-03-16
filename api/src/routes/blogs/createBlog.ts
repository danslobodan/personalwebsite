import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/validateRequest';
import { Blog } from '../../models/blog';

const router = express.Router();

router.post(
    '/',
    [
        body('title').notEmpty().withMessage('Title is required'),
        body('description').notEmpty().withMessage('Description is required'),
        body('link')
            .notEmpty()
            .withMessage('Link is required')
            .isURL()
            .withMessage('Link must be a valid url'),
        body('date').optional({ nullable: true }).isDate(),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { title, description, link, date } = req.body;

        const blog = Blog.build({
            title,
            description,
            link,
            date,
        });
        await blog.save();
        res.status(201).send(blog);
    }
);

export { router as createBlogRouter };
