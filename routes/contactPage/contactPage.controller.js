import { contactPageModel } from "./contactPage.model";

export const contactPageController = {
  index: async (req, res) => {
    const contactPage = await contactPageModel.findOne().exec();
    res.status(200).json(contactPage);
  },
  post: async (req, res) => {
    const { title, subTitle, formTitle, info } = req.body;
    if (!title) {
      return res.status(404).json("Don't have a title!");
    }
    if (!subTitle) {
      return res.status(404).json("Don't have a subTitle!");
    }
    if (!formTitle) {
      return res.status(404).json("Don't have a formTitle!");
    }
    if (!info) {
      return res.status(404).json("Don't have the info object!");
    }
    const response = await contactPageModel.create({
      title,
      subTitle,
      formTitle,
      info,
    });
    return res.status(201).json(response);
  },
};
