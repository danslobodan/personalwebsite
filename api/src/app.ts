import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import env from 'dotenv';

import { NotFoundError } from './errors/notFoundError';
import { errorHandler } from './middlewares/errorHandler';
import { createBlogRouter } from './routes/blogs/createBlog';
import { getBlogsRouter } from './routes/blogs/getBlogs';
import { updateBlogRouter } from './routes/blogs/updateBlog';
import { getBlogRouter } from './routes/blogs/getBlog';
import { deleteBlogRouter } from './routes/blogs/deleteBlog';

env.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.TOKEN_SECRET!,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/api', async (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Health Check OK' });
});

app.use(getBlogsRouter);
app.use(getBlogRouter);
app.use(createBlogRouter);
app.use(updateBlogRouter);
app.use(deleteBlogRouter);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
