import { validationResult } from "express-validator";
import { createCaptain } from "../services/captain.services.js";
import { captainModel } from "../model/captain.model.js";
import { blackListedTokenModel } from "../model/blackListToken.model.js";

const ṛegisterCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  if (
    !fullname.firstname ||
    !email ||
    !password ||
    !vehicle.color ||
    !vehicle.plate ||
    !vehicle.capacity ||
    !vehicle.vehicleType
  ) {
    return res.status(400).json({ msg: "Please fill all the fields" });
  }

  const isCaptainAlreadyRegistered = await captainModel.findOne({ email });

  if (isCaptainAlreadyRegistered) {
    return res.status(400).json({ msg: "captain already registered" });
  }

  const hashedPassword = await captainModel.hashPassword(password);
  const captain = await createCaptain({
    fullname,
    email,
    password: hashedPassword,
    vehicle,
  });

  const token = await captain.generateAuthToken();

  res.status(201).cookie("token", token).json({token, captain });
};

const loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email });

  if (!captain) {
    return res.status(400).json({ msg: "Invalid email or password" });
  }

  const isPasswordValid = await captain.comparePassword(password);

  if (!isPasswordValid) {
    return res.status(400).json({ msg: "Invalid email or password" });
  }

  const token = await captain.generateAuthToken();

  res.status(200).cookie("token", token).json({token, msg: "captain logged in" });
};

const getCaptainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain });
};

const logOutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  try {
    await blackListedTokenModel.create({ token });
    res.clearCookie("token");
    return res.status(200).json({ msg: "logged out" });
  } catch (error) {
    return res.status(400).json({ msg: "something went wrong" });
  }
};

export { ṛegisterCaptain, logOutCaptain, loginCaptain, getCaptainProfile };
