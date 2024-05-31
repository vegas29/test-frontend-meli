import express from 'express';
import { getItemById, getItemByQuery } from '../controllers/itemsControllers.js';

const router = express.Router();


router
    .route('/')
    .get(getItemByQuery);

router
    .route('/:id')
    .get(getItemById);

export default router;