import express from "express";
import { insertCustomer } from "../models/customer-models/customer.model.js";
const router = express.Router();
//route to get specific customer
router.get("/", (req, res) => {
  res.send("hello there i am working.");
});
//route to post the new customer
router.post("/", async (req, res, next) => {
  try {
    const result = await insertCustomer(req.body);
    if (result?._id) {
      res.json({
        status: "success",
        message: "new customer created successfully.",
      });
    } else {
      res.json({
        status: "error",
        message: "some error occured during creating new user.",
      });
    }
  } catch (error) {
    if (error.message.includes("E11000 duplicate key")) {
      error.message =
        "Email already exists, please use another Email, or Login";
      error.status = 200;
    }
    next(error);
  }
});
//route to update customer
router.put("/", (req, res) => {
  res.send("i am also working mama");
});

export default router;
