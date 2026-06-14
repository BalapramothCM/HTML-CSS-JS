import { getAllOrders, orderDetail, updateOrderStatusRepo } from "../repo/order.repo.js";

export const getAllOrdersView = async (req, res) => {
   try {
      const ordersList = await getAllOrders();

      return res.status(200).render("admin/admin_orders", {
         layout: 'layouts/admin_layout',
         orders: ordersList
      });

   } catch (err) {
      console.log(err.message);
      return res.status(500).send({
         success: false,
         mess: `Server error. Something went wrong. Please contact Developers.`
      });
   }
};

export const getOrderByIdView = async (req, res) => {
   try {
      const orderId = req.params.id;

      const order = await orderDetail(orderId);

      if (!order.success) {
         return res.status(404).render("admin/admin_order", {
            layout: "layouts/admin_layout",
            message: order.mess
         });
      }

      return res.status(200).render("admin/admin_order", {
         layout: "layouts/admin_layout",
         order: order.order
      });

   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({
         success: false,
         mess: `Server error. Something went wrong. Please contact Developers.`
      });
   }
}


export const updateOrderStatus = async (req, res) => {
   try {
      const { id } = req.params;
      const { orderStatus } = req.body;

      const order = await updateOrderStatusRepo(id, orderStatus);

      if (!order.success) {
         return res.status(404).json({ success: false, mess: order.mess });
      }

      res.status(200).json({ success: true, mess: order.mess });
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({
         success: false,
         mess: `Server error. Something went wrong. Please contact Developers.`
      });
   }
}