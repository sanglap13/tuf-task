import { Request, Response } from "express";
import BannerModel from "../models/banner.model";

export const getBanner = async (req: Request, res: Response) => {
  try {
    const banner = await BannerModel.findOne();
    res.status(200).json(banner);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch banner" });
  }
};

export const updateBanner = async (req: Request, res: Response) => {
  const { description, visibility, timer, link } = req.body;

  try {
    const banner = await BannerModel.findOne();
    if (banner) {
      await banner.update({ description, visibility, timer, link });
    } else {
      await BannerModel.create({ description, visibility, timer, link });
    }
    res.status(200).json({ message: "Banner updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update banner" });
  }
};
