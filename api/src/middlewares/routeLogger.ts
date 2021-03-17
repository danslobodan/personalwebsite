import { Request, Response, NextFunction } from 'express';

const getDurationInMilliseconds = (start: [number, number]) => {
    const NS_PER_SEC = 1e9;
    const NS_TO_MS = 1e6;
    const diff = process.hrtime(start);

    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

const formatOutput = (url: string, statusCode: number, miliseconds: number) => {
    console.log(
        `route ${url} response ${statusCode} miliseconds ${miliseconds}`
    );
};

export const routeLogger = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const route = req.url;
    const start = process.hrtime();

    console.log('route', req.url);

    res.on('finish', () => {
        const miliseconds = getDurationInMilliseconds(start);
        formatOutput(route, res.statusCode, miliseconds);
    });
    res.on('close', () => {
        const miliseconds = getDurationInMilliseconds(start);
        formatOutput(route, res.statusCode, miliseconds);
    });
    next();
};
