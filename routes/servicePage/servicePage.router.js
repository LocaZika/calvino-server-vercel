import { Router } from "express";
import { servicePageController } from "./servicePage.controller";

const router = Router();
// GET servicePage
router.get("/", servicePageController.index);
// POST servicePage
router.post("/", servicePageController.post);

export default router;
