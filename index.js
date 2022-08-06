import db from "./config/db.js";
import express from "express";
import cors from "cors";
import router from "./routers/router.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const database = async () => {
  console.log("connecting database...");

  try {
    await db.authenticate();
    console.log("database connected...");
  } catch (e) {
    console.error("database connecting error: ", e);
  }
  //sync
  // try {
  //   console.log("database sync...");
  //   await db.sync({ alter: true });
  //   console.log("sync success");
  // } catch (e) {
  //   console.error("database sync error: ", e);
  // }
};

const serve = async () => {
  try {
    app.use(
      cors({
        origin: "*",
      })
    );
    app.listen("5000");
    app.use(express.json());
    app.use(router);
    console.log("server running on localhost port 5000...");
  } catch (e) {
    console.error("server running error: ", e);
  }
};

database();
serve();
