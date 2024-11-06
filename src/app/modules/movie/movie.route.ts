import express from 'express';
import { MovieController } from './movie.controller';
const router = express.Router();

router.get("/", MovieController.getAllFromDB);
router.get("/:id",MovieController.getDataById);
router.post("/upload",MovieController.insertIntoDB);
router.patch("/:id", MovieController.updateIntoDB);
router.delete("/:id",MovieController.deleteFromDB);



export const MovieRoutes = router;