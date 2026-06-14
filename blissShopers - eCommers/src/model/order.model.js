import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
   user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      mobile: { type: String, required: true },
      address: { type: String, required: true }
   },
   products: [
      {
         productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
         quantity: { type: Number, required: true },
         imageIdx: { type: Number, required: true },
         size: { type: String, required: true },
         price: { type: Number, required: true }
      }
   ],
   orderStatus: {
      type: String,
      enum: ["pending", "shipped", "cancelled"],
      default: "pending"
   },
   totalAmount: { type: Number, required: true },
   paymentStatus: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending"
   },
   razorpayOrderId: { type: String },
   razorpayPaymentId: { type: String },
   razorpaySignature: { type: String },
   createdAt: { type: Date, default: Date.now }
});

export const orderModal = mongoose.model("Order", orderSchema);