import { Router } from "express";
import { caseStudyController } from "./caseStudy.controller";

const router = Router();
// GET caseStudy
router.get("/", caseStudyController.index);
// POST caseStudy
router.post("/", caseStudyController.post);

export default router;
