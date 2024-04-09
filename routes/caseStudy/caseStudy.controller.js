import { caseStudyModel } from "./caseStudy.model";

export const caseStudyController = {
  index: async (req, res) => {
    const caseStudy = await caseStudyModel.findOne().exec();
    res.status(200).json(caseStudy);
  },
  post: async (req, res) => {
    const { title, subTitle, imgs } = req.body;
    if (!title) {
      return res.status(400).json("Don't have a title!");
    }
    if (!subTitle) {
      return res.status(400).json("Don't have a subTitle!");
    }
    if (!imgs) {
      return res.status(400).json("Don't have the imgs!");
    }
    const response = await caseStudyModel.create({
      title,
      subTitle,
      imgs,
    });
    return res.status(201).json(response);
  },
};
