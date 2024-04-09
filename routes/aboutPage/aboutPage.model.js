import { Schema, model } from "mongoose";

const aboutPage = {
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
};
const aboutPageSchema = new Schema(aboutPage, { timestamps: true });
export const aboutPageModel = model("aboutPage", aboutPageSchema);
