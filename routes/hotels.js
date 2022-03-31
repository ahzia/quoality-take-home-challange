import express from 'express';
import {
  showAll, create, show, destroy, update, showAllServices, createService, showAllGuests, createGuest,
} from '../controllers/hotels.js';

const router = express.Router();

router.get('/', showAll);
router.post('/', create);
router.get('/:_id', show);
router.patch('/:_id', update);
router.delete('/:_id', destroy);
router.get('/:_id/services', showAllServices);
router.post('/:_id/services', createService);
router.get('/:_id/guests', showAllGuests);
router.post('/:_id/guests', createGuest);

export default router;
