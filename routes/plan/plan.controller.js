import { planModel } from "./plan.model";

export const planController = {
  index: async (req, res) => {
    const plan = await planModel.findOne().exec();
    res.status(200).json(plan);
  },
  post: async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(404).json("Don't have a plan body");
    }
    const response = await planModel.create(body);
    return res.status(201).json(response);
  },
};
