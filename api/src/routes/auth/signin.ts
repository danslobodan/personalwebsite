import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:3000/',
        failureRedirect: 'http://localhost:3000/auth/error',
    })
);

export { router as signInRouter };
