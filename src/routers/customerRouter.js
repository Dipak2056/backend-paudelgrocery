import express from "express";
import { encryptPassword, verifyPassword } from "../helpers/bcrypthelper.js";
import {
  loginValidation,
  newCustomerValidation,
  updateCustomerValidation,
} from "../middlewares/joi-validation/signupValidation.js";
import {
  getCustomer,
  insertCustomer,
  updateCustomer,
} from "../models/customer-models/customer.model.js";
import { createJWTs } from "../helpers/jwthelper.js";
import { customerAuth } from "../middlewares/authorization/userauth.js";
const router = express.Router();

//route to get specific customer by passing the authentication test
router.get("/", customerAuth, (req, res) => {
  try {
    const customer = req.customerInfo;
    customer.password = undefined;
    customer.refreshJWT = undefined;
    res.json({
      status: "success",
      message: "GET Method to customer router",
      customer,
    });
  } catch (error) {
    next(error);
  }
});
//route to post the new customer
router.post("/", newCustomerValidation, async (req, res, next) => {
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
router.post("/login", loginValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const customer = await getCustomer({ email });
    if (customer?._id) {
      const matched = verifyPassword(password, customer.password);
      if (matched) {
        customer.password = undefined;
        customer.refreshJWT = undefined;
        const jwts = await createJWTs({ email: customer.email });
        res.json({
          status: "success",
          message: "Customer Logged in Successfully",
          customer,
          ...jwts,
        });
        return;
      } else {
        res.status(401).json({
          status: "error",
          message: "Invalid login credentials",
        });
      }
    }
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//update the detail of customer except password
router.put("/", updateCustomerValidation, async (req, res, next) => {
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
