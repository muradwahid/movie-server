import express from 'express';
import { TrendingController } from './trending.controller';
const router = express.Router();
router.get('/', TrendingController.getAllFromDB);
router.get('/:id', TrendingController.getDataById);
router.post('/', TrendingController.insertIntoDB);
router.patch('/:id', TrendingController.updateInDB);
router.delete('/:id', TrendingController.deleteFromDB);

export const TrendingRouter = router;