import { Request, Response, NextFunction } from 'express';
import { CustomError, ErrorMessage } from '../errors/customError';

const formatErrorMessage = (code: number, errors: ErrorMessage[]) => {
    console.log('ERROR Status Code', code, ' ', errors);
};

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        formatErrorMessage(err.statusCode, err.serializeErrors());
        return res
            .status(err.statusCode)
            .send({ errors: err.serializeErrors() });
    }

    formatErrorMessage(500, [{ message: 'Unknown server error.' }]);
    res.status(500).send({ errors: [{ message: 'Unknown server error.' }] });
};
