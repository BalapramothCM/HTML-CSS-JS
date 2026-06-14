import { getAllBanner } from "../repo/banner.repo.js";
import { getSubCategoryRepo, getCategoryRepo } from "../repo/category.repo.js";
import { getAllProductsRepo, getCartProducts, isProductExists } from "../repo/product.repo.js";
import sendMailer from "../../utils/nodemailer.js";
import { razorpayInstance } from "../../utils/razopay.js";
import { orderModal } from "../model/order.model.js";
import crypto from "crypto";
import { updateQtyWhenOrderPlaced } from "../repo/order.repo.js";

const otpStore = new Map();

export const getUserHome = async (req, res) => {
   try {
      const categories = await getCategoryRepo()
      const banners = await getAllBanner()
      const sareeProducts = await getAllProductsRepo("Trending Sarees", null, 0, 7);
      const chudiProducts = await getAllProductsRepo("Trending Kurtis", null, 0, 7);

      const processedSareeProducts = sareeProducts.productsArr.map(prod => {
         const imageObj = prod.images?.[0];
         const base64Image = imageObj
            ? `data:${imageObj.contentType};base64,${Buffer.from(imageObj.data).toString('base64')}`
            : null;

         return {
            ...prod._doc,
            imageBase64: base64Image
         };
      });

      const processedChudiProducts = chudiProducts.productsArr.map(prod => {
         const imageObj = prod.images?.[0];
         const base64Image = imageObj
            ? `data:${imageObj.contentType};base64,${Buffer.from(imageObj.data).toString('base64')}`
            : null;

         return {
            ...prod._doc,
            imageBase64: base64Image
         };
      });

      res.status(200).render("user/user_home", {
         banners: banners.banners,
         categories: categories.categoryArr,
         sareeProductsArr: processedSareeProducts,
         chudiProductsArr: processedChudiProducts,
         layout: "layouts/user_layout",
         
         // --- SEO ---
         title: "Bliss Shoppers – Trending Sarees & Kurtis Online",
         metaDescription: "Shop premium quality sarees and kurtis at Bliss Shoppers. Best ethnic fashion, budget friendly & fast delivery.",
         metaKeywords: "sarees, kurtis, trendy sarees, designer kurti, ethnic wear"
      });
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong. Please Contact Admin.` });
   }
}

export const getAllProducts = async (req, res) => {
   try {
      let { cat, subCat } = req.query;

      const categories = await getCategoryRepo()
      const subCategoryVal = await getSubCategoryRepo(cat)
      const productArr = await getAllProductsRepo(cat, subCat === "All" ? null : subCat, 0, 15)

      // Convert image buffer to base64 for frontend
      const processedProductsArr = productArr.productsArr.map(prod => {
         const imageObj = prod.images?.[0];
         const base64Image = imageObj
            ? `data:${imageObj.contentType};base64,${Buffer.from(imageObj.data).toString('base64')}`
            : null;

         return {
            ...prod._doc,
            imageBase64: base64Image
         };
      });

      return res.status(200).render("user/user_all_products", {
         selectedCat: cat,
         selectedSubCat: subCat,
         categories: categories.categoryArr,
         subCategories: subCategoryVal.subCategoryArr.sub_category,
         productsList: processedProductsArr,
         layout: 'layouts/user_layout',

         // --- SEO ---
         title: `${cat} – Buy Online`,
         metaDescription: `Discover the best ${cat}. Browse ${subCat === "All" ? "all styles" : subCat} now.`,
         metaKeywords: `${cat}, ${subCat}, womens fashion, ethnic wear`
      });
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong. Please Contact Admin.` });
   }


}

export const getAllProductsSearch = async (req, res) => {

   let { category, subCategory, skip, limit } = req.body;

   const productArr = await getAllProductsRepo(category, subCategory === "All" ? null : subCategory, skip, limit)

   if (productArr.success) {

      // Convert image buffer to base64 for frontend
      const processedProductsArr = productArr.productsArr.map(prod => {
         const imageObj = prod.images?.[0];
         const base64Image = imageObj
            ? `data:${imageObj.contentType};base64,${Buffer.from(imageObj.data).toString('base64')}`
            : null;

         return {
            ...prod._doc,
            imageBase64: base64Image
         };
      });


      res.status(200).send({ products: processedProductsArr })
   }

}

export const getProductDetail = async (req, res) => {
   try {
      const prodId = req.params.prodId;

      const prodFound = await isProductExists(prodId);

      if (!prodFound.success) {
         return { success: false, mess: prodFound.mess }
      }
      else {
         // Convert all images to base64
         const product = prodFound.product;
         const imagesBase64 = (product.images || []).map(img =>
            img && img.data
               ? `data:${img.contentType};base64,${Buffer.from(img.data).toString('base64')}`
               : null
         );
         product.imagesBase64 = imagesBase64;

         const categories = await getCategoryRepo()

         // --- JSON-LD Product Schema (For Google Rich Snippets) ---
         const productSchema = {
            id: product._id,
            name: product.name,
            image: imagesBase64[0], // main product image
            description: product.description?.slice(0, 160) || product.name,
            brand: product.brand,
            price: product.finalPrice
         };

         return res.status(200).render(
            "user/user_productDetail",
            {
               product: product,
               categories: categories.categoryArr,
               layout: 'layouts/user_layout',

               // --- Product SEO ---
               title: `${product.name} – Buy Online at Bliss Shoppers`,
               metaDescription: `Buy ${product.name} from Bliss Shoppers. Price: ₹${product.finalPrice}. Fast delivery & best quality.`,
               metaKeywords: `${product.name}, ${product.category}, saree, kurti, womens fashion`
            }
         );
      }

   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong. Please Contact Admin.` });
   }
}

export const getCartView = async (req, res) => {
   try {
      const categories = await getCategoryRepo()
      res.status(200).render(
         "user/user_cart",
         {
            categories: categories.categoryArr,
            layout: 'layouts/user_layout'
         }
      )
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong. Please Contact Admin.` });
   }
}

export const getCartDetails = async (req, res) => {
   try {
      const cart = req.body.cart;

      if (!cart || !Array.isArray(cart)) {
         return res.status(400).json({ error: "Invalid cart data" });
      }

      // Extract only product IDs
      const ids = cart.map(item => item.id);

      // Get product details from MongoDB
      const products = await getCartProducts(ids)

      // Merge product data with size from localStorage
      const detailedCart = cart.map(item => {
         const prod = products.products.find(p => p._id.toString() === item.id);
         const imageObj = prod.images?.[item.imageIndex];
         const base64Image = imageObj
            ? `data:${imageObj.contentType};base64,${Buffer.from(imageObj.data).toString('base64')}`
            : null;

         // ✅ find stock for the selected size
         let stockQty = null;
         if (prod?.sizes && item.size) {
            const sizeEntry = prod.sizes.find(s => s.size === item.size);
            stockQty = sizeEntry ? sizeEntry.stock : null;
         }

         return {
            id: item.id,
            size: item.size || null,
            name: prod?.name,
            cat: prod?.category,
            price: prod?.finalPrice,
            image: base64Image,
            imageIndex: item.imageIndex,
            stockQty: stockQty
         };
      });

      // Calculate final total
      const total = detailedCart.reduce((acc, cur) => acc + cur.price, 0);

      res.json({ items: detailedCart, total });
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong. Please Contact Admin.` });
   }
};

export const getCheckoutView = async (req, res) => {
   try {
      const categories = await getCategoryRepo()
      res.status(200).render(
         "user/user_checkout",
         {
            categories: categories.categoryArr,
            layout: 'layouts/user_layout'
         }
      )
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong. Please Contact Admin.` });
   }
}

export const sendOTP = async (req, res) => {
   const { email } = req.body;
   const otp = Math.floor(100000 + Math.random() * 900000);
   otpStore.set(email, otp);

   let mailTextContent = `Your verification OTP is ${otp}. It will expire in 5 minutes.`
   let mailSubject = `Email Verification OTP - ${new Date().toLocaleString()} `

   const status = await sendMailer(email, mailSubject, mailTextContent)
   if (status.success) {
      res.json({ success: true });
   }
   else {
      res.json({ success: false });
   }
}

export const verifyOTP = async (req, res) => {
   const { email, otp } = req.body;

   const valid = otpStore.get(email);
   if (valid && Number(otp) === valid) {
      otpStore.delete(email);
      return res.json({ verified: true });
   }
   res.json({ verified: false });
}

export const paymentCheckout = async (req, res) => {
   try {
      const { name, email, mobile, address, cart } = req.body;

      if (!cart || cart.length === 0) {
         return res.status(400).json({ success: false, message: "Cart is empty" });
      }

      // ✅ Calculate total amount in rupees
      const totalAmount = cart.reduce(
         (acc, item) => acc + Number(item.price) * Number(item.quantity),
         0
      );

      // Add delivery charge (₹80)
      const deliveryCharge = 80;
      const finalAmount = totalAmount + deliveryCharge;

      if (!totalAmount || totalAmount <= 0) {
         return res.status(400).json({ success: false, message: "Invalid total amount" });
      }

      // ✅ Convert to paise before sending to Razorpay
      const options = {
         amount: Math.round(finalAmount * 100), // paise
         currency: "INR",
         receipt: `receipt_order_${Date.now()}`
      };

      // ✅ Create Razorpay order
      const razorpayOrder = await razorpayInstance.orders.create(options);

      // ✅ Save to DB
      const newOrder = await orderModal.create({
         user: { name, email, mobile, address },
         products: cart.map(p => ({
            productId: p.id,
            quantity: p.quantity,
            imageIdx: p.imageIndex,
            size: p.size,
            price: p.price
         })),
         totalAmount: finalAmount,
         paymentStatus: "pending",
         razorpayOrderId: razorpayOrder.id
      });

      res.json({
         success: true,
         orderId: newOrder._id,
         razorpayOrderId: razorpayOrder.id,
         amount: finalAmount,
         key: process.env.RAZORPAY_KEY_ID
      });
   } catch (error) {
      console.error("Razorpay Error:", error);
      res.status(500).json({ success: false, message: "Payment initiation failed" });
   }
};

// ✅ Verification Endpoint (Razorpay Signature)
export const verifyPayment = async (req, res) => {
   try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

      const generated_signature = crypto
         .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
         .update(razorpay_order_id + "|" + razorpay_payment_id)
         .digest("hex");

      if (generated_signature === razorpay_signature) {
         const order = await orderModal.findOneAndUpdate(
            { razorpayOrderId: razorpay_order_id },
            {
               paymentStatus: "success",
               razorpayPaymentId: razorpay_payment_id,
               razorpaySignature: razorpay_signature
            }
         );
         return res.json({ success: true, orderId: order._id });
      }
      else {
         await orderModal.findOneAndUpdate(
            { razorpayOrderId: razorpay_order_id },
            { paymentStatus: "failed" }
         );
         return res.status(400).json({ success: false, message: "Invalid signature" });
      }
   } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Payment verification failed" });
   }
};

export const succesPayment = async (req, res) => {
   const { email, orderId } = req.query;

   try {
      // 1️⃣ Find the order by ID
      const order = await orderModal.findById(orderId);
      if (!order) {
         return res.status(404).send({ success: false, mess: "Order not found" });
      }

      // 2️⃣ Ensure order was not already processed
      if (order.paymentStatus === "success") {

         await updateQtyWhenOrderPlaced(order);
      }

      let userMailSubject = `🎉 Your Order is Confirmed!`
      let userMailTextContent = `
     👋 Hello there,

      Thank you for shopping with us at **Bliss Shop Store**! We're thrilled to let you know that your order has been successfully placed. 💖

      📦 **Order ID:** ${orderId}

      🛍️ Your items are being prepared with care and will be on their way soon!  
      📱 Our team may reach out via WhatsApp, phone, or email if we need any additional details.

      💌 Thank you again for choosing **Bliss Shop Store**! We hope you absolutely love your purchase.  

      With gratitude and style,  
      ✨ Bliss Shop Store Team
      `

      sendMailer(email, userMailSubject, userMailTextContent)

      const categories = await getCategoryRepo();
      res.status(200).render("user/user_orderSuccess", {
         email,
         orderId,
         categories: categories.categoryArr,
         layout: "layouts/user_layout"
      });

   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong. Please Contact Admin.` });
   }
};