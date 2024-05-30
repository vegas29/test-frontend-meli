import express from 'express';
import checkAuth from '../middleware/checkAuth.js';
import { getItemById, getItemByQuery } from '../controllers/itemsControllers.js';

const router = express.Router();


router
    .route('/')
    .get(checkAuth, getItemByQuery);

router
    .route('/:id')
    .get(checkAuth, getItemById);

export default router;