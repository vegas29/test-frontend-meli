import express from 'express';
import { getToken } from '../controllers/tokenController.js';

const router = express.Router();

router
    .route('/')
    .get(getToken);

export default router;