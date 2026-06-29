import userModel from "../model/users.model.js";

export const findUserRepo = async (email) => {
   const existingUser = await userModel.findOne({ email: email }).select('_id email password role');

   if (existingUser) {
      return { success: true, userData: existingUser }
   }
   else {
      return { success: false }
   }
}

export const resetPasswordRepo = async (email, newPassword) => {
   const admin = await userModel.findOne({ email });
   if (!admin) return null;

   admin.password = newPassword;  // auto-hash will occur
   return admin.save();
};