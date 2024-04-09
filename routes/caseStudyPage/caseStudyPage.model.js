import { Schema, model } from "mongoose";

const caseStudyPage = {
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
};
const caseStudyPageSchema = new Schema(caseStudyPage, { timestamps: true });
export const caseStudyPageModel = model("caseStudyPage", caseStudyPageSchema);
