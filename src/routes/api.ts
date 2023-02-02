import express, { Request, Response } from "express";
import blogRouter from "./blogRoutes";
import userRouter from "./userRoutes";

const apiRouter = express.Router();

apiRouter.use("/blogs", blogRouter);
apiRouter.use("/user", userRouter);
export default apiRouter;