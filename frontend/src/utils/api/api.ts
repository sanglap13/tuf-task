import axios from "axios";
import { IBanner } from "../../@types/hero.types";

const API_URL = `${import.meta.env.VITE_BACKEND}/api/v1`;

// Fetch all banners
export const getBanners = async () => {
  try {
    const response = await axios.get(`${API_URL}/banner`);
    return response.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
};

// Create a new banner
export const createBanner = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating banner:", error);
    throw error;
  }
};

// Update an existing banner
export const updateBanner = async (id: string, bannerData: IBanner) => {
  try {
    const response = await axios.put(`${API_URL}/banner/${id}`, bannerData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating banner:", error);
    throw error;
  }
};
