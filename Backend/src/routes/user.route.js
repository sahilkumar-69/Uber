import { Router } from "express";
import { body } from "express-validator";
import {
  login,
  logOut,
  registerUser,
  showProfile,
} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";
const router = Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("firstname")
      .isString()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email Address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  login
);

router.get("/profile", authUser, showProfile);

router.get("/logout", authUser, logOut);


export { router };
