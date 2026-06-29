import { addBannerRepo, deleteBannerRepo, getAllBanner } from "../repo/banner.repo.js";

export const getAddBannerView = async (req, res) => {
   try {
      const bannerArr = await getAllBanner();

      res.status(200).render(
         "admin/admin_add_banner",
         {
            mess: null,
            bannersList: bannerArr.banners,
            layout: 'layouts/admin_layout'
         }
      )
   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please Contact Developers.` })
   }
}

export const addBanner = async (req, res) => {
   try {
      const { title } = req.body;

      const image = req.file
         ? {
            data: req.file.buffer,
            contentType: req.file.mimetype
         }
         : null;

      const isAdded = await addBannerRepo(title, image)
      const bannerArr = await getAllBanner();

      if (isAdded.success) {
         return res.status(200).render(
            "admin/admin_add_banner",
            {
               mess: isAdded.mess,
               bannersList: bannerArr.banners,
               layout: 'layouts/admin_layout'
            }
         )
      }
      else {
         return res.status(400).render(
            "admin/admin_add_banner",
            {
               mess: isAdded.mess,
               bannersList: bannerArr.banners,
               layout: 'layouts/admin_layout'
            }
         )
      }

   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please Contact Developers.` })
   }

}

export const deleteBanner = async (req, res) => {
   try {
      const bannerId = req.params.bannerId;
      const isDeleted = await deleteBannerRepo(bannerId)

      const bannerArr = await getAllBanner();

      if (isDeleted.success) {
         return res.status(200).render(
            "admin/admin_add_banner",
            {
               mess: isDeleted.mess,
               bannersList: bannerArr.banners,
               layout: 'layouts/admin_layout'
            }
         )
      }
      else {
         return res.status(400).render(
            "admin/admin_add_banner",
            {
               mess: isDeleted.mess,
               bannersList: bannerArr.banners,
               layout: 'layouts/admin_layout'
            }
         )
      }


   }
   catch (err) {
      console.log(err.message);
      return res.status(500).send({ success: false, mess: `Server error. Something went wrong.Please Contact Developers.` })
   }
}