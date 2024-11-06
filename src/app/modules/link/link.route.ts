import express from 'express';
import { LinkController } from './link.controller';
const router = express.Router();
router.get('/', LinkController.getAllFromDB);
router.get('/:id', LinkController.getDataById);
router.post('/', LinkController.insertIntoDB);
router.patch('/:id', LinkController.updateInDB);
router.delete('/:id', LinkController.deleteFromDB);

export const LinkRoutes = router;
