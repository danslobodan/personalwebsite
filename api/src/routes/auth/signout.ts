import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/api/auth/signout', async (req: Request, res: Response) => {
    req.logOut();
    res.send({});
});

export { router as signoutRouter };
