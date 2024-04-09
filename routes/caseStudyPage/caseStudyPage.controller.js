import { caseStudyModel } from "../caseStudy/caseStudy.model";
import { caseStudyPageModel } from "./caseStudyPage.model";

export const caseStudyPageController = {
  index: async (req, res) => {
    const caseStudyPage = await caseStudyPageModel.findOne().select(["title", "subTitle"]).exec();
    const caseStudy = await caseStudyModel.findOne().exec();
    res.status(200).json({
      title: caseStudyPage.title,
      subTitle: caseStudyPage.subTitle,
      caseStudy,
    });
  },
  post: async (req, res) => {
    const { title, subTitle } = req.body;
    if (!title) {
      return res.status(400).json("Don't have a title");
    }
    if (!subTitle) {
      return res.status(400).json("Don't have a subTitle");
    }
    const response = await caseStudyPageModel.create({ title, subTitle });
    return res.status(201).json(response);
  },
};
