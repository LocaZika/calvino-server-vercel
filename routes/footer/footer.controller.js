import { footerModel } from "./footer.model";

export const footerController = {
  index: async (req, res) => {
    const footer = await footerModel.findOne().exec();
    res.status(200).json(footer);
  },
  post: async (req, res) => {
    const { logo, description, captions } = req.body;
    if (!logo) {
      return res.status(400).json("Don't have a logo!");
    }
    if (!description) {
      return res.status(400).json("Don't have a description!");
    }
    if (!captions) {
      return res.status(400).json("Don't have captions!");
    }
    const response = await footerModel.create({
      logo,
      description,
      captions,
    });
    return res.status(201).json(response);
  },
};
