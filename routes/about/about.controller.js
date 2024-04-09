import { aboutModel } from "./about.model";

export const aboutController = {
  index: async (req, res) => {
    const about = await aboutModel.findOne().exec();
    res.status(200).json(about);
  },
  post: async (req, res) => {
    const { title, subTitle, contents, link, img } = req.body;
    if (!title) {
      return res.status(400).json("Don't have a title!");
    }
    if (!subTitle) {
      return res.status(400).json("Don't have a subTitle!");
    }
    if (!contents) {
      return res.status(400).json("Don't have a contents!");
    }
    if (!link) {
      return res.status(400).json("Don't have the link detail object!");
    }
    if (!img) {
      return res.status(400).json("Don't have the img path!");
    }
    const response = await aboutModel.create({
      title,
      subTitle,
      contents,
      link,
      img,
    });
    return res.status(201).json(response);
  },
};
