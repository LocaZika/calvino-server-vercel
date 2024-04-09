import { Router } from "express";
import { chooseUsController } from "./chooseUs.controller";

const router = Router();
// GET chooseUs
router.get("/", chooseUsController.index);
// POST chooseUs
router.post("/", chooseUsController.post);

export default router;
