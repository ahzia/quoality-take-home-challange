import express from 'express';
import {
  showAll, show, destroy, update, createItem
} from '../controllers/services.js';

const router = express.Router();

router.get('/', showAll);
router.get('/:_id', show);
router.patch('/:_id', update);
router.delete('/:_id', destroy);
router.post('/:_id/items', createItem);

export default router;