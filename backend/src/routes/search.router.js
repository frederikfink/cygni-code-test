import express from 'express';
import get from '../controllers/search.controller.js';
const router = express.Router();

/* GET search */
router.get('/', get);

export default router;