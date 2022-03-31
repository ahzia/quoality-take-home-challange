import express from 'express';
import {
  showAll, show, destroy, update,
} from '../controllers/guests.js';

const router = express.Router();

router.get('/', showAll);
router.get('/:_id', show);
router.patch('/:_id', update);
router.delete('/:_id', destroy);

export default router;
