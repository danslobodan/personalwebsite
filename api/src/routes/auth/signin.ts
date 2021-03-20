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
        successRedirect: 'back',
        failureRedirect: 'back',
    })
);

export { router as signInRouter };
