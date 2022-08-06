import Category from "./categoryModel.js";
import Post from "./postModel.js";
import User from "./userModel.js";

const model = {};
model.Post = Post;
model.Category = Category;
model.User = User;

model.Post.belongsTo(model.Category);

export default model;
