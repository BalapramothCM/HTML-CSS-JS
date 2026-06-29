import bannerModel from "../model/banner.modal.js";

export const addBannerRepo = async (title, image) => {

   const banner = new bannerModel({
      title,
      image
   });

   await banner.save();

   if (!banner) {
      return { success: false, mess: "Banner Not Added Sucessfully" }
   }
   else {
      return { success: true, mess: "Banner Added Sucessfully" }
   }
};

export const deleteBannerRepo = async (bannerId) => {
   const deletedBanner = await bannerModel.findByIdAndDelete(bannerId);
   if (!deletedBanner) {
      return { success: false, mess: "Banner not found or already deleted" };
   }
   return { success: true, mess: "Banner deleted successfully" };
}

export const getAllBanner = async () => {

   const banners = await bannerModel.find().sort({ createdAt: -1 });

   const bannersWithBase64 = banners.map(banner => {
      let imageBase64 = null;
      if (banner.image && banner.image.data) {
         imageBase64 = `data:${banner.image.contentType};base64,${Buffer.from(banner.image.data).toString('base64')}`;
      }
      return {
         ...banner.toObject(),
         imageBase64
      };
   });

   return { success: true, banners: bannersWithBase64 };
}