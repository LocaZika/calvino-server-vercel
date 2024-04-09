import { Schema, model } from "mongoose";

//About content
const aboutContent = {
  text: { type: String, required: true },
};
//About
const about = {
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  contents: [aboutContent],
  link: {
    text: { type: String, required: true },
    path: { type: String, required: true },
  },
  img: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
};
const aboutSchema = new Schema(about, { timestamps: true });
export const aboutModel = model("about", aboutSchema);
