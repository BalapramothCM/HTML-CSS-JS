import { getCategoryRepo, getSubCategoryRepo } from "../repo/category.repo.js";
import { addProductRepo, deleteProductRepo, editProductViewRepo, getAllProductsRepo, isProductExists, updateProductRepo } from "../repo/product.repo.js";

export const addProductsView = async (req, res) => {
   try {

      const category = await getCategoryRepo();

      if (category.success) {
         res.status(200).render(
            "admin/admin_add_products",
            {
               mess: null,
               isEdit: false,
               categories: category.categoryArr,
               layout: 'layouts/admin_layout'
            }
         )
      }
      else {
         return { success: false }
      }
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please contact Developers.` })
   }

}

export const getAllProductsView = async (req, res) => {
   try {
      const getCategory = await getCategoryRepo();

      if (getCategory.success) {
         res.status(200).render(
            "admin/admin_products_list",
            {
               mess: null,
               categories: getCategory.categoryArr,
               layout: 'layouts/admin_layout'
            }
         )
      }
      else {
         res.status(400).render(
            "admin/admin_products_list",
            {
               mess: `Something Error in getting Category Filter. Contact Developer.`,
               categories: getCategory.categoryArr,
               layout: 'layouts/admin_layout'
            }
         )
      }

   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please contact Developers.` })
   }

}

export const addProductController = async (req, res) => {
   try {
      const {
         name,
         brand,
         description,
         preference,
         category,
         subCategory,
         price,
         discountPercent
      } = req.body;

      // Format sizes array from EJS name="sizes[][size]" and "sizes[][stock]"
      let sizes = [];

      if (Array.isArray(req.body['sizes[][size]'])) {
         sizes = req.body['sizes[][size]'].map((size, i) => ({
            size,
            stock: Number(req.body['sizes[][stock]'][i] || 0)
         }));
      } else {
         sizes.push({
            size: req.body['sizes[][size]'],
            stock: Number(req.body['sizes[][stock]'])
         });
      }

      // Process binary images
      const images = req.files.map(file => ({
         data: file.buffer,
         contentType: file.mimetype
      }));

      const porductAdded = await addProductRepo(name,
         brand,
         description,
         preference,
         category,
         subCategory,
         Number(price),
         Number(discountPercent),
         sizes,
         images
      )

      const getCategory = await getCategoryRepo();

      if (porductAdded.success && getCategory.success) {
         res.status(200).render(
            "admin/admin_add_products",
            {
               mess: porductAdded.mess,
               isEdit: false,
               categories: getCategory.categoryArr,
               layout: 'layouts/admin_layout'
            }
         )
      }
      else {
         res.status(400).render(
            "admin/admin_add_products",
            {
               mess: porductAdded.mess,
               isEdit: false,
               categories: [],
               layout: 'layouts/admin_layout'
            }
         )
      }
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please contact Developers.` })
   }
}

export const getProductsController = async (req, res) => {
   try {
      const { category, subCategory, skip = 0, limit = 50 } = req.body

      const allproducts = await getAllProductsRepo(category, subCategory, skip, limit)
      // Convert image buffer to base64 for frontend
      if (!allproducts.success) {
         return res.status(200).send({ mess: `No Products.`, productArr: [] });
      }

      // Convert image buffer to base64 for frontend
      const processedProducts = allproducts.productsArr.map(prod => {
         const imageObj = prod.images?.[0];
         const base64Image = imageObj
            ? `data:${imageObj.contentType};base64,${Buffer.from(imageObj.data).toString('base64')}`
            : null;

         return {
            ...prod._doc,
            imageBase64: base64Image
         };
      });

      return res.status(200).send({ productArr: processedProducts });
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please contact Developers.` })
   }
}

export const editProductControllerView = async (req, res) => {
   try {
      const productId = req.params.id;

      const prodFound = await isProductExists(productId);

      if (!prodFound.success) {
         return { success: false, mess: prodFound.mess }
      }
      else {
         const editProductVal = await editProductViewRepo(productId)

         if (!editProductVal.success) {
            return { success: false, mess: editProductVal.mess }
         }
         else {
            const category = await getCategoryRepo();
            const subCategoryVal = await getSubCategoryRepo(editProductVal.product.category)

            // Convert all images to base64
            const product = editProductVal.product;
            const imagesBase64 = (product.images || []).map(img =>
               img && img.data
                  ? `data:${img.contentType};base64,${Buffer.from(img.data).toString('base64')}`
                  : null
            );
            product.imagesBase64 = imagesBase64;

            res.status(200).render(
               "admin/admin_add_products",
               {
                  mess: null,
                  isEdit: true,
                  product: product,
                  categories: category.categoryArr,
                  subCategories: subCategoryVal.subCategoryArr.sub_category,
                  layout: 'layouts/admin_layout'
               }
            )
         }
      }
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please contact Developers.` })
   }
}

export const editProductController = async (req, res) => {
   try {
      const {
         name,
         brand,
         description,
         preference,
         category,
         subCategory,
         price,
         discountPercent
      } = req.body;

      const productId = req.params.id;

      const { action } = req.body;

      if (action === "delete") {
         const deleted = await deleteProductRepo(productId);
         if (deleted.success) {
            // Redirect or render success message
            return res.redirect('/api/admin/allproducts'); // or wherever your product list is
         } else {
            const getCategory = await getCategoryRepo();
            const subCategoryVal = await getSubCategoryRepo(isProductUpdate.product.category)

            const existingProduct = await isProductExists(productId);

            const imagesBase64 = (existingProduct.product.images || []).map(img =>
               img && img.data
                  ? `data:${img.contentType};base64,${Buffer.from(img.data).toString('base64')}`
                  : null
            );
            existingProduct.product.imagesBase64 = imagesBase64;

            // Handle error
            res.status(400).render(
               "admin/admin_add_products",
               {
                  mess: deleted.mess,
                  isEdit: true,
                  product: existingProduct.product,
                  categories: getCategory.categoryArr,
                  subCategories: subCategoryVal.subCategoryArr.sub_category,
                  layout: 'layouts/admin_layout'
               }
            )
         }
      }
      //Update
      else {
         // Format sizes array from EJS name="sizes[][size]" and "sizes[][stock]"
         let sizes = [];

         if (Array.isArray(req.body['sizes[][size]'])) {
            sizes = req.body['sizes[][size]'].map((size, i) => ({
               size,
               stock: Number(req.body['sizes[][stock]'][i] || 0)
            }));
         } else {
            sizes.push({
               size: req.body['sizes[][size]'],
               stock: Number(req.body['sizes[][stock]'])
            });
         }

         //this is used for geting existing images and update in database in bits
         const existingProduct = await isProductExists(productId);

         let images = [];
         if (req.files && req.files.length > 0) {
            // New images uploaded
            images = req.files.map(file => ({
               data: file.buffer,
               contentType: file.mimetype
            }));
         } else if (existingProduct.success && existingProduct.product.images) {
            // No new images, keep existing
            images = existingProduct.product.images;
         }

         const isProductUpdate = await updateProductRepo(
            productId,
            name,
            brand,
            description,
            preference,
            category,
            subCategory,
            Number(price),
            Number(discountPercent),
            sizes,
            images
         )
         const product = isProductUpdate.product;
         //THis is used for converting images to base64.
         const imagesBase64 = (product.images || []).map(img =>
            img && img.data
               ? `data:${img.contentType};base64,${Buffer.from(img.data).toString('base64')}`
               : null
         );
         product.imagesBase64 = imagesBase64;


         const getCategory = await getCategoryRepo();
         const subCategoryVal = await getSubCategoryRepo(isProductUpdate.product.category)

         if (isProductUpdate.success && getCategory.success) {

            res.status(200).render(
               "admin/admin_add_products",
               {
                  mess: isProductUpdate.mess,
                  isEdit: true,
                  product: product,
                  categories: getCategory.categoryArr,
                  subCategories: subCategoryVal.subCategoryArr.sub_category,
                  layout: 'layouts/admin_layout'
               }
            )
         }
         else {
            res.status(400).render(
               "admin/admin_add_products",
               {
                  mess: isProductUpdate.mess,
                  isEdit: true,
                  product: product,
                  categories: getCategory.categoryArr,
                  subCategories: subCategoryVal.subCategoryArr.sub_category,
                  layout: 'layouts/admin_layout'
               }
            )
         }
      }
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please contact Developers.` })
   }
}