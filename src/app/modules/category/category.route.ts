import express from 'express';
import { CategoryController } from './category.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get("/",CategoryController.getAllFromDB);
router.get("/:id", CategoryController.getDataById);
router.post("/create",auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.EDITOR), CategoryController.insertIntoDB);
router.patch("/:id",auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.EDITOR), CategoryController.updateDataById);
router.delete("/:id",auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.EDITOR), CategoryController.deleteDataById);


export const CategoryRoutes = router;