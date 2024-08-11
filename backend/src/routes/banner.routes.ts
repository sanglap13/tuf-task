import express from "express";
import { getBanner, updateBanner } from "../controllers/banner.controller";
import upload from "../middlewares/multer";

const router = express.Router();

// Route to get banner
router.get("/banner", getBanner);

// Route to update banner with image upload
router.post("/upload", upload.single("bannerImage"), updateBanner);

export default router;
