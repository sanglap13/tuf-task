import express from "express";
import { getBanner, updateBanner } from "../controllers/banner.controller";

const router = express.Router();

router.get("/banner", getBanner);
router.post("/banner", updateBanner);

export default router;
