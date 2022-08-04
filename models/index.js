import db from "../config/db.js";
import Category from "./categoryModel.js";
import Post from "./postModel.js";

const model = {};
model.Post = Post;
model.Category = Category;

model.Post.belongsTo(model.Category);

export default model;
