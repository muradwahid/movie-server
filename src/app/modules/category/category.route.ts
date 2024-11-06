import express from 'express';
import { CategoryController } from './category.controller';
const router = express.Router();
router.get("/", CategoryController.getAllFromDB);
router.get("/:id", CategoryController.getDataById);
router.post("/create", CategoryController.insertIntoDB);
router.patch("/:id", CategoryController.updateDataById);
router.delete("/:id", CategoryController.deleteDataById);


export const CategoryRoutes = router;