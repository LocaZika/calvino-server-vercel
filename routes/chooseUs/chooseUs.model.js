import { Schema, model } from "mongoose";

//Brand
const brand = {
  path: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
};
const brandSchema = new Schema(brand, { timestamps: true });
//Choose us
const chooseUs = {
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  completedProjects: { type: Number, required: true },
  specialisedEmployees: { type: Number, required: true },
  text: { type: String, required: true },
  speaker: { type: String, required: true },
  brands: [brandSchema],
  createdAt: Date,
  updatedAt: Date,
};
const chooseUsSchema = new Schema(chooseUs, { timestamps: true });
export const chooseUsModel = model("chooseUs", chooseUsSchema);
