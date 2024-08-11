import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND}/api/v1`;

export const getBanner = async () => {
  try {
    const response = await axios.get(`${API_URL}/banner`);
    return response.data;
  } catch (error) {
    console.error("Error fetching banner:", error);
    throw error;
  }
};

export const uploadBanner = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading banner:", error);
    throw error;
  }
};
