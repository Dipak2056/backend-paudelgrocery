import express from "express";
import { encryptPassword, verifyPassword } from "../helpers/bcrypthelper.js";
import {
  getCustomer,
  insertCustomer,
  updateCustomer,
} from "../models/customer-models/customer.model.js";
const router = express.Router();
//route to get specific customer
router.get("/", (req, res) => {
  res.send("hello there i am working.");
});
//route to post the new customer
router.post("/", async (req, res, next) => {
  try {
    //encrypting password
    const hashedPassword = encryptPassword(req.body.password);
    req.body.password = hashedPassword;

    const customer = await insertCustomer(req.body);
    if (customer?._id) {
      res.json({
        status: "success",
        message: "new customer created successfully.",
        customer,
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

//route to login customer with email and password
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //get the customer according to their email address
    const customer = await getCustomer({ email });
    if (customer?._id) {
      const matched = verifyPassword(password, customer.password);
      if (matched) {
        customer.password = undefined;
        res.json({
          status: "success",
          message: "Customer Logged in Successfully",
          customer,
        });
        return;
      }
      e;
    }
    res.status(401).json({
      status: "error",
      message: "Invalid login credentials",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//update the detail of customer except password
router.put("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const customer = await getCustomer({ email });

    if (customer?._id) {
      const matched = verifyPassword(password, customer.password);

      if (matched) {
        const { _id, email, password, ...rest } = req.body;
        const updatedCustomer = await updateCustomer({ email }, rest);
        res.json({
          status: "success",
          message: "Your profile has been updated successfully.",
          customer: updatedCustomer,
        });
      } else {
        res.json({
          status: "error",
          message: "Invalid request, Your profile couldnot get updated",
        });
      }
    }
  } catch (error) {
    if (error.message.includes("E110000 duplicate key")) {
      error.message =
        "Email already exists, please use another email and try again.";
      error.status = 200;
    }
    next(error);
  }
});

export default router;
