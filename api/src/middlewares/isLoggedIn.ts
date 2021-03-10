import { NextFunction, Request, Response } from 'express';

const isLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/login');
};
