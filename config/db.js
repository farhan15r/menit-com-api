import { Sequelize } from "sequelize";

const db = new Sequelize("db_menit_com", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
