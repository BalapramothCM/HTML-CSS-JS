import { addCategoryRepo, deleteCategoryRepo, getCategoryRepo, getSubCategoryRepo, isCategoryExists, updateCategoryRepo } from "../repo/category.repo.js";

export const addCategoryView = (req, res) => {
   res.status(200).render(
      "admin/admin_add_category"
      , { layout: 'layouts/admin_layout' })
}

export const addCategoryController = async (req, res) => {
   try {
      const { sCategory, sSubCategory } = req.body;

      if (sCategory === "" || sSubCategory === "") {
         return
      }

      const sSubCategoryArr = sSubCategory.split(',').map(subCategory => subCategory.trim())

      const categoryAdded = await addCategoryRepo(sCategory, sSubCategoryArr)

      if (categoryAdded.success) {
         return res.status(201).send({ mess: categoryAdded.mess })
      }
      else {
         return res.status(400).send({ mess: categoryAdded.mess })
      }
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please contact Developers.` })
   }
}

export const updateCategoryController = async (req, res) => {
   try {
      const { catId, sCategory, sSubCategory } = req.body;

      const isCatExist = await isCategoryExists(catId);
      if (!isCatExist.success) {
         return res.status(400).send({ mess: isCatExist.mess })
      }

      const sSubCategoryArr = sSubCategory.split(',').map(subCategory => subCategory.trim())
      const isCatUpdated = await updateCategoryRepo(catId, sCategory, sSubCategoryArr)

      if (isCatUpdated.success) {
         return res.status(201).send({ mess: isCatUpdated.mess })
      }
      else {
         return res.status(400).send({ mess: isCatUpdated.mess })
      }
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please contact Developers.` })
   }
}

export const deleteCateoryController = async (req, res) => {
   try {
      const { catId } = req.body;

      const isCatExist = await isCategoryExists(catId);
      if (!isCatExist.success) {
         return res.status(400).send({ mess: isCatExist.mess })
      }

      const isCatdeleted = await deleteCategoryRepo(catId)
      if (isCatdeleted.success) {
         return res.status(201).send({ mess: isCatdeleted.mess })
      }
      else {
         return res.status(400).send({ mess: isCatdeleted.mess })
      }
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please contact Developers.` })
   }

}

export const getCategoryController = async (req, res) => {
   try {
      const category = await getCategoryRepo();

      if (category.success) {
         return res.status(200).send({ categoryArr: category.categoryArr })
      }
      else {
         return res.status(400).send({ categoryArr: [] })
      }
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please Contact Developers.` })
   }
}

export const getSubCategoryController = async (req, res) => {
   try {

      const category = req.params.category
      const subCategory = await getSubCategoryRepo(category);

      if (subCategory.success) {
         return res.status(200).send({ subCategoryArr: subCategory.subCategoryArr.sub_category })
      }
      else {
         return res.status(400).send({ categoryArr: [] })
      }
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please Contact Developers.` })
   }
}