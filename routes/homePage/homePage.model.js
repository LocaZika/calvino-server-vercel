import { Schema, model } from "mongoose";

const homePage = {
  hero: {
    theme: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    link: { type: String, required: true },
  },
  createdAt: Date,
  updatedAt: Date,
};
const homePageSchema = new Schema(homePage, { timestamps: true });
export const homePageModel = model("homePage", homePageSchema);
