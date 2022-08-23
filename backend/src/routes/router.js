import express from 'express';
import get from './../controllers/controller.js';
const router = express.Router();

/* GET programming languages. */
router.get('/', get);

router.get('/:id', get);

export default router;

