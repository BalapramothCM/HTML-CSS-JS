import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
   },
   password: {
      type: String,
      required: true
   },
   role: {
      type: String,
      required: true,
      trim: true
   },
});

// 🔥 Auto-hash password ONLY when modified
userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) return next();
   this.password = await bcrypt.hash(this.password, 12);
   next();
});

// 🔥 Method to compare old password
userSchema.methods.comparePassword = async function (candidatePassword) {
   if (!candidatePassword || !this.password) {
      throw new Error('Both candidatePassword and hashed password are required');
   }
   return bcrypt.compare(candidatePassword, this.password);
};

const userModel = mongoose.model('user', userSchema);

export default userModel;