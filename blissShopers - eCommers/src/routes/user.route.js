import express from "express"
import { getAllProducts, getAllProductsSearch, getCartDetails, getCartView, getCheckoutView, getProductDetail, getUserHome, paymentCheckout, sendOTP, succesPayment, verifyOTP, verifyPayment } from "../controller/user.controller.js"
import { getSubCategoryController } from "../controller/category.controller.js"

const userRouter = express.Router()

userRouter.get("/", getUserHome)
userRouter.get("/allProducts", getAllProducts)
userRouter.post("/allProductsSearch", getAllProductsSearch)
userRouter.get("/getsubcategories/:category", getSubCategoryController)
userRouter.get("/productDetail/:prodId", getProductDetail)
userRouter.get("/userCart", getCartView)
userRouter.get("/checkout", getCheckoutView)
userRouter.post("/cartDetails", getCartDetails)
userRouter.post("/send-otp", sendOTP)
userRouter.post("/verify-otp", verifyOTP)
userRouter.post("/payment-checkout", paymentCheckout)
userRouter.post("/verify-payment", verifyPayment)
userRouter.get("/payment-success", succesPayment)

export default userRouter;