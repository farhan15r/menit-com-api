import express from "express";
import {
  homeHandler,
  postShowHandler,
  searchHandler,
} from "./handler/handler.js";

const router = express.Router();

router.get("/", homeHandler);
router.get("/search", searchHandler);
router.get("/:slug", postShowHandler);

export default router;
