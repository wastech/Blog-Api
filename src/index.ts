import dotenv from "dotenv";
dotenv.config();

import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";

import morgan from "morgan";
import cors from "cors";
import  connectDB  from "./config/db";
import apiRouter from "./routes/api";
// Constants
const PORT  = process.env.PORT || 3000;

// Connect to database
connectDB.once('open', () => {
  console.log(('Connected to MongoDB database'));

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
});
const app: Express = express();
app.use(cors());
// parse request bodies (req.body)
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Serving static assets
app.use(express.static("public"));
// logger
app.use(morgan("dev"));



app.use( apiRouter);

/* Error handler middleware */
app.use(((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
}) as ErrorRequestHandler);

// app.listen(PORT, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
// });

export default app;