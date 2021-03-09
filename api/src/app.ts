import express, { Request, Response } from 'express';

export const app = express();

app.get('/', async (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Health Check OK' });
});
