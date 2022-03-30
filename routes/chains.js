import express from 'express';
import {
  showAll, create, show, destroy, update, showAllHotels, createHotel,
} from '../controllers/chains.js';

const router = express.Router();

router.get('/', showAll);
router.post('/', create);
router.get('/:_id', show);
router.patch('/:_id', update);
router.delete('/:_id', destroy);
router.get('/:_id/hotels', showAllHotels);
router.post('/:_id/hotels', createHotel);

export default router;
