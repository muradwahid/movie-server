import express from 'express';
import { RegionController } from './region.controller';
const router = express.Router();
router.get('/', RegionController.getAllFromDB);
router.get('/:id', RegionController.getDataById);
router.post('/', RegionController.insertIntoDB);
router.patch('/:id', RegionController.updateInDB);
router.delete('/:id', RegionController.deleteFromDB);
export const RegionRoutes = router;