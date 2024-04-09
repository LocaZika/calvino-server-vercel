import { Router } from "express";
import { planController } from "./plan.controller";

const router = Router();
// GET plan
router.get("/", planController.index);
// POST plan
router.post("/", planController.post);

export default router;
