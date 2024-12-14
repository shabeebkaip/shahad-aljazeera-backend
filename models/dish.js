import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
  price: { type: Number, required: true },
  discount: { type: Number, required: false },
  offerPrice: { type: Number, required: false },
  servingSize: { type: String, required: true },
  customizationRequest: { type: String, required: false },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

const Dish = mongoose.model("Dish", schema);
export default Dish;
