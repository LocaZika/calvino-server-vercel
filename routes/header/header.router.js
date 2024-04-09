import { Router } from "express";
import headerController from "./header.controller";

const router = Router();

//GET header
router.get("/", headerController.index);
//POST header
router.post("/", headerController.post);

//PATCH header
router.patch("/", headerController.patch);

export default router;