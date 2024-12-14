import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const dotEnvConfig = dotenv.config({ path: ".env" });
const port = process.env.PORT;
const dbUrl = process.env.MONGO;
if (dotEnvConfig.error) {
  console.log("Error loading env file", dotEnvConfig.error);
}

app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
