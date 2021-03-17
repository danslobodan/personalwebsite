import express from 'express';

import { signInRouter } from './signin';
import { signOutRouter } from './signout';
import { currentUserRouter } from './currentUser';

const router = express.Router();

router.use('/auth', [signInRouter, signOutRouter, currentUserRouter]);

export { router as authRouter };
