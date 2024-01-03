import express from "express";
import rootRouter from "./routes/root";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/test";

app.use(rootRouter);

mongoose.connect(MONGODB_URL).then(() => {
  console.log(`Connected to mongodb at: ${MONGODB_URL}`);
});

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});
