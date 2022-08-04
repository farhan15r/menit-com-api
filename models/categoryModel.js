import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Category = db.define(
  "categories",
  {
    name: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// Category.associations = (models) => {
//   Category.hasOne(models.Post);
// };

export default Category;
