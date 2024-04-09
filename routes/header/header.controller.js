import { handleError } from "../../utils";
import headerModel from "./header.model.js";

const headerController = {
  index: async (req, res) => {
    const header = await headerModel.findOne().exec();
    res.status(200).json(header);
  },
  post: async (req, res) => {
    const { navbar, callUs, contact } = req.body;
    if (!navbar) {
      handleError("You must have navbar!");
      return res.status(204).json("Don't exist navbar!");
    }
    if (!callUs) {
      handleError("You must have callUs!");
      return res.status(204).json("Don't exist callUs!");
    }
    if (!contact) {
      handleError("You must have contact!");
      return res.status(204).json("Don't exist contact!");
    }
    const response = await headerModel.create({
      navbar,
      callUs,
      contact,
    });
    res.status(201).json(response);
  },
  patch: async (req, res) => {
    const { navbar, callUs, contact } = req.body;
    if (!navbar) {
      handleError("You must have navbar!");
      return res.status(204).json("Don't exist navbar!");
    }
    if (!callUs) {
      handleError("You must have callUs!");
      return res.status(204).json("Don't exist callUs!");
    }
    if (!contact) {
      handleError("You must have contact!");
      return res.status(204).json("Don't exist contact!");
    }
    const response = await headerModel
      .findOneAndUpdate({
        navbar,
        callUs,
        contact,
      })
      .exec();
    return res.status(200).json(response);
  },
};
export default headerController;
