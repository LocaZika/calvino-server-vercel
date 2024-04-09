import { aboutPageModel } from "./aboutPage.model";
import { aboutModel } from "../about/about.model";
import { chooseUsModel } from "../chooseUs/chooseUs.model";

export const aboutPageController = {
  index: async (req, res) => {
    const aboutPage = await aboutPageModel.findOne().select(["title", "subTitle"]).exec();
    const about = await aboutModel.findOne().exec();
    const chooseUs = await chooseUsModel.findOne().exec();
    res.status(200).json({
      title: aboutPage.title,
      subTitle: aboutPage.subTitle,
      about,
      chooseUs,
    });
  },
  post: async (req, res) => {
    const { title, subTitle } = req.body;
    if (!title) {
      return res.status(400).json("Don't have a title!");
    }
    if (!subTitle) {
      return res.status(400).json("Don't have a subTitle!");
    }
    const response = await aboutPageModel.create({ title, subTitle });
    return res.status(201).json(response);
  },
};
