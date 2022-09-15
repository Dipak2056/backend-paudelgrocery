import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      requied: true,
    },
    associate: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    expires: {
      type: Date,
      default: null,
    },
  },
  { timeStamps: true }
);
export default mongoose.model("Session", sessionSchema);
