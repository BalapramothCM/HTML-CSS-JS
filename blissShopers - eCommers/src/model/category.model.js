import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
   category: {
      type: String,
      required: true
   },
   sub_category: {
      type: [String],
   }
})

const categoryModel = mongoose.model('category', categorySchema)

export default categoryModel;