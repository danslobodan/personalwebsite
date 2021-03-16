import express from 'express';

import { signInRouter } from './signin';
import { signOutRouter } from './signout';

const router = express.Router();

router.use('/api/auth', [signInRouter, signOutRouter]);

export { router as authRouter };
