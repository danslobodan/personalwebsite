import express from 'express';

import { blogRouter } from './blogs';
import { authRouter } from './auth';

const router = express.Router();

router.use('/api', [authRouter, blogRouter]);

export { router as routes };
