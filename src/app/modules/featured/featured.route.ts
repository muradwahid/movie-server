import express from 'express';
import { FeaturedController } from './featured.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();

router.get('/', FeaturedController.getAllFromDB);
router.get('/:id', FeaturedController.getDataById);
router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.EDITOR),
  FeaturedController.insertIntoDB,
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.EDITOR),
  FeaturedController.updateInDB,
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.EDITOR),
  FeaturedController.deleteFromDB,
);


export const FeaturedRoutes = router;