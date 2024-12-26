import { blackListedTokenModel } from "../model/blackListToken.model.js";
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

export { authUser };
