import { Schema, model } from "mongoose";

const servicePage = {
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
};
const servicePageSchema = new Schema(servicePage, { timestamps: true });
export const servicePageModel = model("servicePage", servicePageSchema);
