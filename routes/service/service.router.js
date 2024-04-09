import { Router } from "express";
import { serviceController } from "./service.controller";

const router = Router();
// GET service
router.get("/", serviceController.index);
// POST service
router.post("/", serviceController.post);

export default router;
