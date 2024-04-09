import { Schema, Types, model, mongo } from "mongoose";

const navbarItem = {
  name: { type: String, required: true },
  path: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
};

const navbarItemSchema = new Schema(navbarItem, { timestamps: true });

const header = {
  navbar: [navbarItemSchema],
  callUs: String,
  contact: {
    name: { type: String, required: true },
    path: { type: String, required: true },
  },
};

const headerSchema = new Schema(header, { timestamps: true });
export default model("header", headerSchema);
