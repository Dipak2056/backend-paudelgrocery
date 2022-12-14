import "dotenv/config";
import express from "express";
import { dbConnect } from "./config/databaseconnection/db.js";
//setting view for template receipt for email
// import { View } from "grandjs/lib/View.js";
// View.settings.set("views", "./views");
const app = express();

//declaring port number to use
const PORT = 8000 || process.env.PORT;

//importing all middlewares
import cors from "cors";
import helmet, { crossOriginResourcePolicy } from "helmet";
import morgan from "morgan";

//middle wares will go here
app.use(express.json());
app.use(cors());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(morgan("dev"));

//here is the connection to the database goes
dbConnect();

//here are importing all the routers
import productsRouter from "./src/routers/productsRouter.js";
import categoriesRouter from "./src/routers/categoryRouter.js";
import customerRouter from "./src/routers/customerRouter.js";
import stripeRouter from "./src/routers/stripeRouter.js";

//here is using all the routers
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/customer", customerRouter);
app.use("/api/v1/stripe", stripeRouter);

//creating default route
app.get("/", (req, res) => {
  res.json({
    message: "you have reached the api end point.",
  });
});
//global error handling
app.use((err, req, res, next) => {
  res.status(err.status || 404);
  res.json({
    status: "error",
    message: err.message,
  });
});

app.listen(8000, (err) => {
  err ? console.log(error) : console.log("app is running in port 8000");
});
