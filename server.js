import "dotenv/config";
import express from "express";
import { dbConnect } from "./config/databaseconnection/db.js";
const app = express();

//declaring port number to use
const PORT = 8000 || process.env.PORT;

//importing all middlewares
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

//middle wares will go here
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//here is the connection to the database goes
dbConnect();

//here are importing all the routers
import productsRouter from "./src/routers/productsRouter.js";

//here is using all the routers
app.use("/api/v1/products", productsRouter);

//creating default route
app.get("/", (req, res) => {
  res.json({
    message: "you have reached the api end point.",
  });
});

app.listen(8000, (err) => {
  err ? console.log(error) : console.log("app is running in port 8000");
});
