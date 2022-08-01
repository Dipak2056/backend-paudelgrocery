import "dotenv/config";
import mongoose from "mongoose";
export const dbConnect = () => {
  try {
    const conString = mongoose.connect(process.env.MONGO_CLIENT);
    conString && console.log("mongo connection successfull.");
  } catch (error) {
    console.log(error);
  }
};
