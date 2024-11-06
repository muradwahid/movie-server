import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router.get('/',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN),UserController.getAllFromDB);
router.get('/:id',auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.EDITOR,ENUM_USER_ROLE.USER),UserController.getDataById);
router.post('/create', UserController.insertIntoDB);
router.patch('/:id', UserController.updateInDB);
router.delete('/:id', UserController.deleteFromDB);

export const UserRoutes = router;
