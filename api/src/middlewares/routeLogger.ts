import { Request, Response, NextFunction } from 'express';

export const routeLogger = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('route:', req.url, 'body', req.body);
    next();
};
