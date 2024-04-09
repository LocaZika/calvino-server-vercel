import { Schema, model } from "mongoose";

//Pricing plans
const pricingPlan = {
  price: { type: Number, required: true },
  increaseTraffic: { type: Number, required: true },
  socialMediaMkt: { type: Boolean, required: true },
  freeOptimization: { type: Number, required: true },
  support: { type: String, required: true },
  period: { type: String, required: true },
  classification: { type: String, required: true },
  path: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
};
export const pricingPlanSchema = new Schema(pricingPlan, { timestamps: true });
//Plan
const plan = {
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  pricingPlans: [pricingPlanSchema],
  createdAt: Date,
  updatedAt: Date,
};
const planSchema = new Schema(plan, { timestamps: true });
export const planModel = model("plan", planSchema);
