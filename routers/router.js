import express from "express";
import {
  getAllPosts,
  getPostBySlug,
  searchPosts,
} from "../handler/postsHandler.js";
import { getAllUsers, registerUser } from "../handler/usersHandler.js";

const router = express.Router();

router.get("/posts", getAllPosts);
router.get("/posts/:slug", getPostBySlug);

router.get("/search", searchPosts);

router.get("/users", getAllUsers);
router.post("/users", registerUser);

export default router;
