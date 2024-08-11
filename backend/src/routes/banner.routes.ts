import express from "express";
import {
  createBanner,
  getBanner,
  updateBanner,
} from "../controllers/banner.controller";
import upload from "../middlewares/multer";

const router = express.Router();

router.get("/banner", getBanner);

router.post("/upload", upload.single("bannerImage"), createBanner);

router.put("/banner/:id", upload.single("bannerImage"), updateBanner);

export default router;
