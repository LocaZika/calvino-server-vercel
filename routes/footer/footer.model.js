import { Schema, model } from "mongoose";

//Menu item
const menuItem = {
  name: { type: String, required: true },
  path: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
};
const menuItemSchema = new Schema(menuItem, { timestamps: true });
//Caption item
const captionItem = {
  title: { type: String, required: true },
  menu: [menuItem],
  createdAt: Date,
  updatedAt: Date,
};
const captionItemSchema = new Schema(captionItem, { timestamps: true });

//Footer
const footer = {
  logo: { type: String, require: true },
  description: { type: String, require: true },
  captions: [captionItemSchema],
  createdAt: Date,
  updatedAt: Date,
};
const footerSchema = new Schema(footer, { timestamps: true });
export const footerModel = model("footer", footerSchema);
