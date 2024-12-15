import express from "express";
import categoryRouter from "./category.js";
import dishRouter from "./dish.js";
import fileUploadRouter from "./fileUpload.js";

const router = express.Router();

router.use("/category", categoryRouter);
router.use("/dish", dishRouter);
router.use("/file-upload", fileUploadRouter);

export default router;
