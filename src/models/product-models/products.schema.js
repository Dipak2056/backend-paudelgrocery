import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
    },
    name: {
      type: String,
      requierd: true,
      maxlength: 100,
    },

    sku: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxlength: 20,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      index: 1,
      required: true,
      maxlength: 500,
    },
    catId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    qty: {
      type: Number,
      required: true,
      default: 0,
    },
    images: [{ type: String }],
    thumbnail: {
      type: String,
      //   required: true,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    salesPrice: {
      type: Number,
      default: 0,
    },
    salesStartDate: {
      type: String,
      default: null,
    },
    salesEndDate: {
      type: String,
      default: null,
    },
    ratings: {
      type: Number,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
