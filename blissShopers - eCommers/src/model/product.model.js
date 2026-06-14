import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true
   },
   description: {
      type: String,
      required: true
   },
   brand: {
      type: String,
      default: 'Unbranded'
   },
   preference: {
      type: String,
      required: true,
      enum: ['Men', 'Women', 'Kids', 'Unisex']
   },
   category: {
      type: String,
      required: true
   },
   subCategory: {
      type: String,
      required: true
   },
   sizes: [
      {
         size: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', 'OneSize'] },
         stock: { type: Number, default: 0 }
      }
   ],
   images: [
      {
         data: Buffer,
         contentType: String,
      }
   ],
   price: {
      type: Number,
      required: true
   },
   discountPercent: {
      type: Number,
      default: 0
   },
   finalPrice: {
      type: Number
   }
}, { timestamps: true });

productSchema.pre('save', function (next) {
   this.finalPrice = this.price - (this.price * this.discountPercent / 100);
   next();
});

export default mongoose.model('Product', productSchema);
