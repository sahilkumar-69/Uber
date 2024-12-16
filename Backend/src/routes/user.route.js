import express from "express";

const router = express.Router();

router.route("/hello").get((req, res) => {
  res.send("hello from /hello route in uber clone video");
});

export { router };
