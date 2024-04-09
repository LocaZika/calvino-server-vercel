import { Schema, model } from "mongoose";

//Service item
const serviceItem = {
  title: { type: String, required: true },
  img: { type: String, required: true },
  content: { type: String, required: true },
  path: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
};
const serviceItemSchema = new Schema(serviceItem, { timestamps: true });
//Service
const service = {
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  items: [serviceItemSchema],
  createdAt: Date,
  updatedAt: Date,
};
const serviceSchema = new Schema(service, { timestamps: true });
export const serviceModel = model("service", serviceSchema);
