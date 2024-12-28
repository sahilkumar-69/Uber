import { Router } from "express";
import {
  getCaptainProfile,
  loginCaptain,
  logOutCaptain,
  ṛegisterCaptain,
} from "../controllers/captain.controller.js";
import { body } from "express-validator";
import { authCaptain } from "../middlewares/auth.middleware.js";
const captainRoute = Router();

captainRoute.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("first name must be at least 3 characters long"),
    body("email").isEmail().withMessage("please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be atleast 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("color must be at least 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("plate must be at least 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("capacity must be a positive integer"),
    body("vehicle.vehicleType")
      .isIn(["car", "bike", "auto"])
      .withMessage("vehicle type must be one of car, bike or auto"),
  ],
  ṛegisterCaptain
);

captainRoute.post("/login", [
  body("email").isEmail().withMessage("please enter a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be atleast 6 characters long"),
  loginCaptain,
]);

captainRoute.get("/profile", authCaptain, getCaptainProfile);

captainRoute.get("/logout",authCaptain,logOutCaptain)

export { captainRoute };
