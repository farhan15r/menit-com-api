import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Post = db.define(
  "posts",
  {
    title: { type: DataTypes.STRING },
    slug: { type: DataTypes.STRING },
    excerpt: { type: DataTypes.TEXT },
    image: { type: DataTypes.TEXT },
    body: { type: DataTypes.TEXT },
  },
  {
    freezeTableName: true,
  }
);
export default Post;
