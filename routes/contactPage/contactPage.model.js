import { Schema, model } from "mongoose";

const contactPage = {
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  formTitle: { type: String, required: true },
  info: {
    address: {
      home: { type: String, required: true },
      detail: { type: String, required: true },
    },
    tel: {
      phoneNumber: { type: String, required: true },
      schedule: { type: String, required: true },
    },
    email: {
      mail: { type: String, required: true },
      text: { type: String, required: true },
    },
  },
  createdAt: Date,
  updatedAt: Date,
};
const contactPageSchema = new Schema(contactPage, { timestamps: true });
export const contactPageModel = model("contactPage", contactPageSchema);
