import { verifyAccessJWt } from "../../helpers/jwthelper.js";
import { getCustomer } from "../../models/customer-models/customer.model.js";
import { getSession } from "../../models/sessions/session.model.js";

export const customerAuth = async (req, res, next) => {
  //try to get the access jwt from header and verify
  try {
    const { authorization } = req.headers;
    //1. verify if jwt is valid
    const decoded = verifyAccessJWt(authorization);
    // console.log(decoded);
    if (decoded === "jwt expired") {
      return res.status(403).json({
        status: "error",
        message: "jwt expired!",
      });
    }
    //2. check if jwt exist in sessiondb
    if (decoded?.email) {
      //3. extract user
      const existindb = await getSession({ type: "jwt", token: authorization });
      if (existindb?._id) {
        //4. get user profile based in user email
        const customer = await getCustomer({ email: decoded.email });
        if (customer?._id) {
          req.customerInfo = customer;
          return next();
        }
      }
    }
    //if donot succeed these steps
    res.status(401).json({
      status: "error",
      message: "unauthorized!",
    });
  } catch (error) {
    next(error);
  }
};
