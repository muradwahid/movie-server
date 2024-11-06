import express from 'express';
import { SubCategoryController } from './subCategory.controller';

const router = express.Router();
router.get("/", SubCategoryController.getAllFromDB);
router.get("/:id", SubCategoryController.getDataById);
router.post("/", SubCategoryController.insertIntoDB);
router.patch("/:id", SubCategoryController.updateInDB);
router.delete("/:id", SubCategoryController.deleteFromDB);

export const SubCategoryRoutes = router;