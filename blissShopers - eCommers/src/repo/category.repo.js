import categoryModel from "../model/category.model.js"

export const addCategoryRepo = async (sCategory, sSubCategoryArr) => {

   const categoryAdded = await categoryModel.create({
      category: sCategory,
      sub_category: sSubCategoryArr
   })

   if (!categoryAdded) {
      return { success: false, mess: "Category Not Added Sucessfully" }
   }
   else {
      return { success: true, mess: "Category Added Sucessfully" }
   }
}

export const isCategoryExists = async (catId) => {

   const exist = await categoryModel.findById(catId)
   if (exist) {
      return { success: true }
   }
   else {
      return { success: false, mess: `Category not exist. Please click on edit button again.` }
   }
}

export const updateCategoryRepo = async (catId, sCategory, sSubCategoryArr) => {
   const isUpdated = await categoryModel.findByIdAndUpdate(
      catId,
      {
         category: sCategory,
         sub_category: sSubCategoryArr
      },
      {
         new: true
      }
   )
   if (isUpdated) {
      return { success: true, mess: "Category updated successfully" };
   } else {
      return { success: false, mess: "Failed to update category" };
   }
}

export const deleteCategoryRepo = async (catId) => {
   const isDeleted = await categoryModel.findByIdAndDelete(catId)
   if (isDeleted) {
      return { success: true, mess: "Category deleted successfully" };
   } else {
      return { success: false, mess: "Failed to delete category" };
   }
}

export const getCategoryRepo = async () => {
   const category = await categoryModel.find()

   if (category) {
      return { success: true, categoryArr: category }
   }
   else {
      return { success: false }
   }
}

export const getSubCategoryRepo = async (category) => {

   const subCategory = await categoryModel.findOne({ category: category }).select("sub_category");

   if (subCategory) {
      return { success: true, subCategoryArr: subCategory }
   }
   else {
      return { success: false }
   }
}