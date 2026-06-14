import productModel from "../model/product.model.js";

export const isProductExists = async (productID) => {

   const product = await productModel.findById(productID);

   if (!product) {
      return { success: false, mess: `No Product Found` }
   }
   else {
      return { success: true, product: product }
   }

}

export const addProductRepo = async (name, brand, description, preference, category, subCategory, price, discountPercent, sizes, images) => {

   const product = new productModel({
      name,
      brand,
      description,
      preference,
      category,
      subCategory,
      price,
      discountPercent,
      sizes,
      images
   });

   await product.save();

   if (!product) {
      return { success: false, mess: "Product Not Added Sucessfully" }
   }
   else {
      return { success: true, mess: "Product Added Sucessfully" }
   }

}

export const getAllProductsRepo = async (category, subCategory, skip = 0, limit = 50) => {
   const query = {};
   if (category) query.category = category;
   if (subCategory) query.subCategory = subCategory;

   const products = await productModel.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
   if (products) {

      return { success: true, productsArr: products };
   }
   else {
      return { success: false };
   }


};

export const editProductViewRepo = async (productID) => {

   const product = await productModel.findById(productID);

   if (!product) {
      return { success: false, mess: `No Product Found` }
   }
   else {
      return { success: true, product: product }
   }

}
export const updateProductRepo = async (productID, name, brand, description, preference, category, subCategory, price, discountPercent, sizes, images) => {
   try {
      const updateFields = {
         name,
         brand,
         description,
         preference,
         category,
         subCategory,
         price,
         discountPercent,
         sizes,
         finalPrice: price - (price * discountPercent / 100)
      };

      // Only update images if new images are provided
      if (images && images.length > 0) {
         updateFields.images = images;
      }

      const updatedProduct = await productModel.findByIdAndUpdate(
         productID,
         { $set: updateFields },
         { new: true }
      );

      if (!updatedProduct) {
         return { success: false, mess: "Product not updated" };
      } else {
         return { success: true, mess: "Product updated successfully", product: updatedProduct };
      }
   } catch (err) {
      return { success: false, mess: "Error updating product" }
   }
}

export const deleteProductRepo = async (productID) => {

   const deleted = await productModel.findByIdAndDelete(productID);
   if (!deleted) {
      return { success: false, mess: "Product not found." };
   }
   return { success: true, mess: "Product deleted" };

};

export const getCartProducts = async (ids) => {

   const products = await productModel.find({ _id: { $in: ids } });
   if (!products) {
      return { success: false, mess: "Product not found." };
   }
   return { success: true, products: products };
}
