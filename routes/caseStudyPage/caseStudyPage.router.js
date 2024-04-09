import { Router } from "express";
import { caseStudyPageController } from "./caseStudyPage.controller";

const router = Router();
// GET caseStudyPage
router.get("/", caseStudyPageController.index);
// POST caseStudyPage
router.post("/", caseStudyPageController.post);

export default router;
