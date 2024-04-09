import { Router } from "express";
import { footerController } from "./footer.controller";

const router = Router();
// GET footer
router.get("/", footerController.index);
// POST footer
router.post("/", footerController.post);

export default router;
