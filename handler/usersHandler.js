import model from "../models/index.js";
import bcrypt from "bcrypt";

const validate = async (password, confPassword, email, username) => {
  // search email and username
  const uniqeEmail = await model.User.findOne({
    where: { email: email },
  });
  const uniqeUsername = await model.User.findOne({
    where: { username: username },
  });

  // if email or username found return message
  // if password and confPassword not match return message
  if (password !== confPassword) {
    return "The password doesn't match";
  }
  if (uniqeUsername) {
    return "The username is alredy exist";
  }
  if (uniqeEmail) {
    return "The email is alredy exist";
  }

  return 0;
};

const getAllUsers = async (req, res) => {
  // logging
  console.log(Date(), `: request GET:${req.url}`);

  // get data from database
  const users = await model.User.findAll();

  // send data as json
  res.json(users);
};

const registerUser = async (req, res) => {
  // logging
  console.log(Date(), `: request POST:${req.url}`);

  // get request
  const { fullname, username, email, password, confPassword } = req.body;

  // validating request
  const unvalid = await validate(password, confPassword, email, username);

  if (unvalid) {
    return res.status(400).json({ status: "error", msg: unvalid });
  }

  // hashing password
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  // inserting data to database
  try {
    await model.User.create({
      fullname: fullname,
      username: username,
      email: email,
      password: hashPassword,
    });
    return res.json({ status: "success", msg: "register successfully" });
  } catch (e) {
    console.error("can insert data to database, error: ", e);
  }
};

export { getAllUsers, registerUser };
