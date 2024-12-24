import cors from "cors";
import express from "express";
const app = express();

app.use(cors());
app.use(express.json());

// middleware for url encoding

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

import { router } from "./routes/user.route.js";
app.use("/user", router);

export { app };
