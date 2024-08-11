import { Request, Response } from "express";
import BannerModel from "../models/banner.model";

export const getBanner = async (req: Request, res: Response) => {
  try {
    const banners = await BannerModel.findAll();
    if (banners.length > 0) {
      res.status(200).json(banners);
    } else {
      res.status(404).json({ message: "No banners found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch banners" });
  }
};

export const createBanner = async (req: Request, res: Response) => {
  const { description, visibility, timer, link } = req.body;
  const imageUrl = req.file?.path;

  if (!imageUrl) {
    return res.status(400).json({ error: "Image file is required" });
  }

  try {
    await BannerModel.create({
      description,
      visibility,
      timer,
      link,
      imageUrl,
    });
    res.status(201).json({ message: "Banner created successfully" });
  } catch (err) {
    console.error("Error creating banner:", err);
    res.status(500).json({ error: "Failed to create banner" });
  }
};

export const updateBanner = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, visibility, timer, link } = req.body;
  const imageUrl = req.file?.path || req.body.imageUrl;

  if (!imageUrl) {
    return res.status(400).json({ error: "Image file is required" });
  }

  try {
    const banner = await BannerModel.findByPk(id);
    if (banner) {
      await banner.update({ description, visibility, timer, link, imageUrl });
      res.status(200).json({ message: "Banner updated successfully" });
    } else {
      res.status(404).json({ message: "Banner not found" });
    }
  } catch (err) {
    console.error("Error updating banner:", err);
    res.status(500).json({ error: "Failed to update banner" });
  }
};
