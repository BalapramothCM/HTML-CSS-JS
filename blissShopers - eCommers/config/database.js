import mongoose from "mongoose";

export const connectToDB = async (url) => {
   try {
      await mongoose.connect(url);
      console.log("Mongodb connected...");
   } catch (err) {
      console.log("Error while connecting to db");
      console.log(err);
   }
};
