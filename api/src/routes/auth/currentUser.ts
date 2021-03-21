import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/currentuser', (req: Request, res: Response) => {
    return res.send(req.user || null);
});

export { router as currentUserRouter };
