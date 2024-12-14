import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  dish: { type: Schema.Types.ObjectId, ref: "Dish", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
  orderDate: { type: Date, required: true },
});

const Order = mongoose.model("Order", schema);

export default Order;
