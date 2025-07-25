import cors from "cors";
import cookieparser from "cookie-parser";
import express from "express";
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieparser());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

import { router } from "./routes/user.route.js";

app.use("/user", router);

import { captainRoute } from "./routes/captain.route.js";

app.use("/captain", captainRoute);

export { app };
