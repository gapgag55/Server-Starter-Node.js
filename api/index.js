import express from 'express';
import exampleRoute from './example';

const router = express.Router();
router.use('/example', exampleRoute);

export default router;