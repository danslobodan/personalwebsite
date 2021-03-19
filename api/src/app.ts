import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { passport } from './services/passport';
import session, { SessionOptions } from 'express-session';
import env from 'dotenv';

import { NotFoundError } from './errors/notFoundError';
import { errorHandler } from './middlewares/errorHandler';
import { routeLogger } from './middlewares/routeLogger';
import { routes } from './routes';

env.config();

const app = express();
app.use(express.json());
app.use(cors());

// session needs to be used BEFORE passport session
const isProduciton = app.get('env') === 'production';
if (isProduciton) {
    app.set('trust proxy', 1);
}

const sessionOptions: SessionOptions = {
    resave: false,
    saveUninitialized: true,
    secret: process.env.TOKEN_SECRET!,
    cookie: {
        secure: isProduciton,
    },
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());

app.get('/api', async (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Health Check OK' });
});

app.use(routeLogger);
app.use(routes);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
