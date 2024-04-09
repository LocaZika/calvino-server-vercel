import { serviceModel } from "./service.model";

export const serviceController = {
  index: async (req, res) => {
    const service = await serviceModel.findOne().exec();
    res.status(200).json(service);
  },
  post: async (req, res) => {
    const { title, subTitle, items } = req.body;
    if (!title) {
      return res.status(400).json("Don't have a title!");
    }
    if (!subTitle) {
      return res.status(400).json("Don't have a subTitle!");
    }
    if (!items) {
      return res.status(400).json("Don't have the items!");
    }
    const response = await serviceModel.create({
      title,
      subTitle,
      items,
    });
    return res.status(201).json(response);
  },
};
