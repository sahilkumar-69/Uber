import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
const app = express();

app.use(cors());
app.use(express.json());

// import { router } from "./routes/user.route.js";
// app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export { app };
