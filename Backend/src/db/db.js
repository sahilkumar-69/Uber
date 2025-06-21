import mongoose from "mongoose";

function connectDb() {
  mongoose
    .connect(
      `${process.env.URI}
      ${process.env.DBNAME}`
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
      process.exit(1);
    });
}

export default connectDb;