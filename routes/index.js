import express from "express";
import categoryRouter from "./category.js";
import dishRouter from "./dish.js";

const router = express.Router();

router.use("/category", categoryRouter);
router.use("/dish", dishRouter);

export default router;
