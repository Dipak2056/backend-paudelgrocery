import "dotenv/config";
import jwt from "jsonwebtoken";
import { updateCustomer } from "../models/customer-models/customer.model.js";
import {
  insertSession,
  deleteSession,
} from "../models/sessions/session.model.js";

//to sign the access token
export const signAccessJWT = async (payload) => {
  const accessJWT = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });
  const obj = {
    token: accessJWT,
    type: "jwt",
  };
  await insertSession(obj);
  return accessJWT;
};

//To sign refresh jwt that to be saved in the database
export const signRefreshJWT = async (payload) => {
  const refreshJWT = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "30d",
  });
  console.log(payload);
  const updatedCustomer = await updateCustomer(
    { email: payload.email },
    { refreshJWT: refreshJWT }
  );
  console.log(updatedCustomer);
  return refreshJWT;
};

//To create JWTs
export const createJWTs = async (payload) => {
  return {
    accessJWT: await signAccessJWT(payload),
    refreshJWT: await signRefreshJWT(payload),
  };
};

//To verify accesstoken
export const verifyAccessJWt = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  } catch (error) {
    if (error.message === "jwt expired!") {
      deleteSession({ type: "jwt", token });
    }
    return error.message;
  }
};

//to verify refresh token
export const verifyRefreshJWT = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};
