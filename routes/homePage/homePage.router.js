import { Router } from "express";
import { homePageController } from "./homePage.controller";

const router = Router();
// GET homePage
router.get("/", homePageController.index);
// POST homePage
router.post("/", homePageController.post);

export default router;
