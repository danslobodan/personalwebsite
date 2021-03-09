import express, { Request, Response } from 'express';
import 'express-async-errors';
import { NotFoundError } from './errors/notFoundError';
import { errorHandler } from './middlewares/errorHandler';
import { createBlogRouter } from './routes/blogs/createBlog';
import { getBlogsRouter } from './routes/blogs/getBlogs';
import { updateBlogRouter } from './routes/blogs/updateBlog';

const app = express();
app.use(express.json());

app.get('/api', async (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Health Check OK' });
});

app.use(getBlogsRouter);
app.use(createBlogRouter);
app.use(updateBlogRouter);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
