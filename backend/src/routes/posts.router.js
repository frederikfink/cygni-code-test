import express from 'express';
import get from '../controllers/posts.controller.js';
const router = express.Router();

/* GET search */
router.get('/:id', get);

export default router;