import express from 'express';
import {
  showAll, create, show, destroy, update,
} from '../controllers/hotels.js';

const router = express.Router();

router.get('/', showAll);
router.post('/', create);
router.get('/:_id', show);
router.patch('/:_id', update);
router.delete('/:_id', destroy);

export default router;
