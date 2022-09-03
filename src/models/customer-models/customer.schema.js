import mongoose from "mongoose";
const CustomerSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [20, "first name must be less than 20 characters."],
    },
    lName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [20, "first name must be less than 20 characters."],
    },
    dob: {
      type: Date,
      default: null,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: [50, "Email must have less than 50 characters."],
      index: 1,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: [15, "Phone number must be less than 20 characters"],
      minlength: [10, "Phone number must be more than 10 characters"],
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Customer", CustomerSchema);
