import express from 'express';
import get from './../controllers/controller.js';
const router = express.Router();

/* GET programming languages. */
router.get('/', get);
  
// /* POST programming language */
// router.post('/', controller.create);

// /* PUT programming language */
// router.put('/:id', controller.update);

// /* DELETE programming language */
// router.delete('/:id', controller.remove);

export default router;

