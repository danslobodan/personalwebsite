import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get(
    '/api/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
    })
);

router.get(
    '/api/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:3000/',
        failureRedirect: 'http://localhost:3000/auth/error',
    })
);

export { router as signinRouter };
