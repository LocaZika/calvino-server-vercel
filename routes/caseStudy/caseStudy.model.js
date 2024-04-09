import { Schema, model } from "mongoose";

//CaseStudy images
const imgs = {
  path: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
};
//CaseStudy
const caseStudy = {
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  imgs: [imgs],
  createdAt: Date,
  updatedAt: Date,
};
const caseStudySchema = new Schema(caseStudy, { timestamps: true });
export const caseStudyModel = model("caseStudy", caseStudySchema);
