import { chooseUsModel } from "./chooseUs.model";

export const chooseUsController = {
  index: async (req, res) => {
    const chooseUs = await chooseUsModel.findOne().exec();
    res.status(200).json(chooseUs);
  },
  post: async (req, res) => {
    const { title, subTitle, completedProjects, specialisedEmployees, text, speaker, brands } =
      req.body;
    if (!title) {
      return res.status(400).json("Don't have a title");
    }
    if (!subTitle) {
      return res.status(400).json("Don't have a subTitle");
    }
    if (!completedProjects) {
      return res.status(400).json("Don't have the completedProjects");
    }
    if (!specialisedEmployees) {
      return res.status(400).json("Don't have the specialisedEmployees");
    }
    if (!text) {
      return res.status(400).json("Don't have the text");
    }
    if (!speaker) {
      return res.status(400).json("Don't have the speaker");
    }
    if (!brands) {
      return res.status(400).json("Don't have the brands");
    }
    const response = await chooseUsModel.create({
      title,
      subTitle,
      completedProjects,
      specialisedEmployees,
      text,
      speaker,
      brands,
    });
    return res.status(201).json(response);
  },
};
