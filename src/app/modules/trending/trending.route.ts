import express from 'express';
import { TrendingController } from './trending.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get(
  '/',
  TrendingController.getAllFromDB,
);
router.get(
  '/:id',
  TrendingController.getDataById,
);
router.post(
  '/',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR
  ),
  TrendingController.insertIntoDB,
);
router.patch(
  '/:id',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR
  ),
  TrendingController.updateInDB,
);
router.delete(
  '/:id',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.EDITOR
  ),
  TrendingController.deleteFromDB,
);

export const TrendingRouter = router;