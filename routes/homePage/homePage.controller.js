// import { homePageModel } from "./homePage.model";
import { homePageModel } from "./homePage.model";
import { serviceModel } from "../service/service.model";
import { aboutModel } from "../about/about.model";
import { planModel } from "../plan/plan.model";
import { chooseUsModel } from "../chooseUs/chooseUs.model";
import { caseStudyModel } from "../caseStudy/caseStudy.model";

export const homePageController = {
  index: async (req, res) => {
    const homePage = await homePageModel.findOne().exec();
    const service = await serviceModel.findOne().exec();
    const about = await aboutModel.findOne().exec();
    const plan = await planModel.findOne().exec();
    const chooseUs = await chooseUsModel.findOne().exec();
    const caseStudy = await caseStudyModel.findOne().exec();
    const response = {
      hero: homePage.hero,
      service,
      about,
      plan,
      caseStudy,
      chooseUs,
    };
    res.status(200).json(response);
  },
  post: async (req, res) => {
    const { hero } = req.body;
    if (!hero) {
      return res.status(404).json("Don't have the hero object");
    }
    const response = await homePageModel.create({ hero });
    return res.status(201).json(response);
  },
};
