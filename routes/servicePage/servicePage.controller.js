import { servicePageModel } from "./servicePage.model";
import { serviceModel } from "../service/service.model";
import { planModel } from "../plan/plan.model";

export const servicePageController = {
  index: async (req, res) => {
    const servicePage = await servicePageModel.findOne().select(["title", "subTitle"]).exec();
    const service = await serviceModel.findOne().exec();
    const plan = await planModel.findOne().exec();
    res.status(200).json({
      title: servicePage.title,
      subTitle: servicePage.subTitle,
      service,
      plan,
    });
  },
  post: async (req, res) => {
    const { title, subTitle } = req.body;
    if (!title) {
      return res.status(404).json("Don't have a title!");
    }
    if (!subTitle) {
      return res.status(404).json("Don't have a subTitle!");
    }
    const response = await servicePageModel.create({ title, subTitle });
    return res.status(201).json(response);
  },
};
