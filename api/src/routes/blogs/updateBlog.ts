import express, { Request, Response } from 'express';
import { body } from 'express-validator';
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
        const blogRecord = Blog.build(req.body);
        const blog = await blogRecord.save();
        res.status(200).send(blog);
    }
);

export { router as updateBlogRouter };
