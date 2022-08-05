import db from "./config/db.js";
import express from "express";
import cors from "cors";
import router from "./routers/router.js";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

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
  //   await db.sync({ alter: true });
  //   console.log("database sync...");
  // } catch (e) {
  //   console.error("database sync error: ", e);
  // }
};

const serve = async () => {
  try {
    app.listen("5000");
    app.use(router);
    console.log("server running on localhost port 5000...");
  } catch (e) {
    console.error("server runing error: ", e);
  }
};

database();
serve();
