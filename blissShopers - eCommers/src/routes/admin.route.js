import express from "express"
import { dashboardView, getLoginView, login, logout, resetPassword, settingView } from "../controller/admin.controller.js"
import { jwtAuth } from "../../utils/auth.js"
import { addProductController, addProductsView, getProductsController, getAllProductsView, editProductControllerView, editProductController } from "../controller/product.controller.js"
import { addCategoryController, addCategoryView, deleteCateoryController, getCategoryController, getSubCategoryController, updateCategoryController } from "../controller/category.controller.js"
import upload from "../../utils/multer.js"
import { addBanner, deleteBanner, getAddBannerView } from "../controller/banner.controller.js"
import { getAllOrdersView, getOrderByIdView, updateOrderStatus } from "../controller/order.controller.js"

const adminRouter = express.Router()

//view routes
adminRouter.get('/login', getLoginView)
adminRouter.get("/dashboard", jwtAuth, dashboardView)
adminRouter.get('/addproducts', jwtAuth, addProductsView)
adminRouter.get('/allproducts', jwtAuth, getAllProductsView)
adminRouter.get('/addcategory', jwtAuth, addCategoryView)
adminRouter.get("/editproduct/:id", jwtAuth, editProductControllerView)
adminRouter.get("/addBanner", jwtAuth, getAddBannerView)
adminRouter.get("/setting", jwtAuth, settingView)
adminRouter.post("/resetpassword", jwtAuth, resetPassword);
adminRouter.get("/logout", logout)

//login
adminRouter.post("/login", login)

//category routes
adminRouter.get("/getCategory", jwtAuth, getCategoryController)
adminRouter.get("/getsubcategories/:category", jwtAuth, getSubCategoryController)
adminRouter.post("/addcategory", jwtAuth, addCategoryController)
adminRouter.put("/updatecategory", jwtAuth, updateCategoryController)
adminRouter.delete("/deletecategory", jwtAuth, deleteCateoryController)

//product routes
adminRouter.post("/addproduct", upload.array('images', 10), jwtAuth, addProductController)
adminRouter.post("/getallproducts", jwtAuth, getProductsController)
adminRouter.post("/editproduct/:id", upload.array('images', 10), jwtAuth, editProductController)

//Banner routes
adminRouter.post("/addBanner", upload.single('image'), jwtAuth, addBanner)
adminRouter.post("/deleteBanner/:bannerId", jwtAuth, deleteBanner)

//Order routes
adminRouter.get("/orders", getAllOrdersView)
adminRouter.get("/order/:id", getOrderByIdView)
adminRouter.patch("/order/:id/status", updateOrderStatus)

export default adminRouter;