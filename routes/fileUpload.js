import express from "express";
import multer from "multer";
import cloudinary from "../cloudinaryConfig.js";
import fs from "fs";

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
});

const fileUploadRouter = express.Router();

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Please upload a file" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path);
    res.status(200).json({ imageUrl: result.secure_url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

fileUploadRouter.post("", upload.single("file"), uploadImage);

export default fileUploadRouter;
