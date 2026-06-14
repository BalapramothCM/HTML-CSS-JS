import { orderModal } from "../model/order.model.js";
import productModel from "../model/product.model.js";

export const updateQtyWhenOrderPlaced = async (order) => {

   // 4️⃣ Reduce stock for each product in the order
   for (const item of order.products) {
      const product = await productModel.findById(item.productId);
      if (!product) continue; // Skip if product not found

      // Find the correct size entry
      const sizeEntry = product.sizes.find(s => s.size === item.size);
      if (sizeEntry) {
         sizeEntry.stock = Math.max(0, sizeEntry.stock - item.quantity);
      }

      await product.save();
   }

}

// Service - Fetch limited order info
export const getAllOrders = async () => {

   const orders = await orderModal
      .find({}, {
         _id: 1,
         "user.name": 1,
         "user.mobile": 1,
         products: 1,
         totalAmount: 1,
         paymentStatus: 1,
         orderStatus: 1
      })
      .sort({ createdAt: -1 });

   // add product count for convenience
   const formattedOrders = orders.map(order => ({
      _id: order._id,
      name: order.user.name,
      mobile: order.user.mobile,
      productsCount: order.products.length,
      totalAmount: order.totalAmount,
      paymentStatus: order.paymentStatus,
      orderStatus: order.orderStatus
   }));

   return formattedOrders;

};

// Admin order details page
export const orderDetail = async (orderId) => {
   // Fetch order with product details (only what we need)
   const order = await orderModal
      .findById(orderId)
      .populate("products.productId", "name images") // name + images only
      .lean(); // plain JS object

   if (!order) {
      return { success: false, mess: "Order not found" };
   }

   // For each ordered product, build a base64 image string using imageIdx
   order.products = order.products.map(p => {
      const prod = p.productId;
      const idx = typeof p.imageIdx === "number" ? p.imageIdx : 0;

      let productImage = null;

      if (prod && Array.isArray(prod.images) && prod.images.length > idx && idx >= 0) {
         const img = prod.images[idx];
         productImage = `data:${img.contentType};base64,${img.data.toString("base64")}`;
      }

      return {
         ...p,
         productImage,
      };
   });

   return { success: true, order };
};


// PATCH /api/admin/order/:id/status
export const updateOrderStatusRepo = async (id, orderStatus) => {
   const order = await orderModal.findByIdAndUpdate(id, { orderStatus: orderStatus }, { new: true });

   if (!order) {
      return { success: false, mess: "Order not found" };
   }

   return { success: true, mess: "Order status updated", order: order };
};