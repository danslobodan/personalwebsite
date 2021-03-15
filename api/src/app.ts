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
import { signinRouter } from './routes/auth/signin';

declare global {
    namespace Express {
        interface User {
            id: string;
        }
    }
}

env.config();

const app = express();
app.use(express.json());
app.use(cors());

// session needs to be used BEFORE passport session
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.TOKEN_SECRET!,
    })
);

import { OAuth2Strategy } from 'passport-google-oauth';
import { User } from './models/user';

passport.use(
    new OAuth2Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: 'http://localhost:5000/api/auth/google/callback',
        },
        async (token, tokenSecret, profile, done) => {
            console.log('strategy', profile);
            try {
                if (!profile || !profile.id) {
                    return done(null, false, {
                        message: 'You need to authenticate with Google.',
                    });
                }

                let user = await User.findOne({ googleId: profile.id });
                if (!user) {
                    user = User.build({
                        googleId: profile.id,
                    });
                    await user.save();
                }

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = (await User.findById(id)) as Express.User;
        if (!user) {
            return done(null, false);
        }

        done(null, user);
    } catch (error) {
        done(error);
    }
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/api', async (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Health Check OK' });
});

app.use(signinRouter);

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
