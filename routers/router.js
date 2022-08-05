import express from "express";
import {
  getAllPosts,
  getPostBySlug,
  searchPosts,
} from "../handler/postsHandler.js";

const router = express.Router();

router.get("/posts", getAllPosts);
router.get("/posts/:slug", getPostBySlug);

router.get("/search", searchPosts);

export default router;
