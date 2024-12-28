import { blackListedTokenModel } from "../model/blackListToken.model.js";
import { captainModel } from "../model/captain.model.js";
import userModel from "../model/user.model.js";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Stage: 1 - Unauthorized" });
  // console.log(token)

  const isBlackListed = await blackListedTokenModel.findOne({ token });

  if (isBlackListed) {
    return res.status(401).json({ message: "State 3 - Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    const user = await userModel.findById(decoded._id);
    if (!user) return res.status(404).json({ message: "User not found" });
    // console.log(user)
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "State 2 -Unauthorized" });
  }
};

const authCaptain = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Stage: 1 - no token provided" });

  try {
    const isBlackListed = await blackListedTokenModel.findOne({ token });

    if (isBlackListed) {
      return res.status(401).json({ message: "State 3 - Unauthorized token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await captainModel.findById({ _id: decoded._id });
    // console.log(decoded, user);

    if (!user) return res.status(404).json({ message: "User not found" });
    req.captain = user;
    next();
  } catch (error) {
    return res.status(401).json({
      location: "auth.middleware.js line no. 51 catched",
      message: "State 3 -something went wrong",
    });
  }
};
export { authUser, authCaptain };
