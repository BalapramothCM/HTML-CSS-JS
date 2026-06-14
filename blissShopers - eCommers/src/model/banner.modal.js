import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      trim: true
   },
   image: {
      data: Buffer,
      contentType: String,
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});


const bannerModel = mongoose.model('Banner', bannerSchema)

export default bannerModel;