import { blackListedTokenModel } from "../model/blackListToken.model.js";
import userModel from "../model/user.model.js";
import { createUser } from "../services/user.services.js";
import { validationResult } from "express-validator";

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  // console.log("body" + req.body);

  try {
    const hashedPassword = await userModel.hashPassword(password);
    // console.log(hashedPassword + " hashed password");
    const user = await createUser({
      fullname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;

  // console.log("email: " + email, "password: " + password);

  const isUser = await userModel.findOne({ email }).select("+password");

  if (!isUser) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await isUser.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = isUser.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token: token, msg: "logged In", user: isUser });
};

const showProfile = async (req, res) => {
  res.status(200).json({ user: req.user });
};

const logOut = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blackListedTokenModel.create({ token });

  res.clearCookie("token");
  res.status(200).json({ message: "Logged Out" });
};

export { registerUser, login, showProfile, logOut };
