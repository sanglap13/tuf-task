import React, { useState, useEffect } from "react";
import { updateBanner, getBanners, createBanner } from "../../../utils/api/api";
import { IBanner } from "../../../@types/hero.types";
import BannerForm from "./bannerForm/BannerForm";

const Dashboard: React.FC = () => {
  const [banners, setBanners] = useState<IBanner[]>([]);
  const [selectedBanner, setSelectedBanner] = useState<IBanner | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleBannerSelect = (banner: IBanner) => {
    setSelectedBanner(banner);
    setIsEditing(true);
  };

  const handleBannerUpdate = async (updatedBanner: IBanner) => {
    try {
      // Prepare data for update
      const bannerData = {
        description: updatedBanner.description,
        visibility: updatedBanner.visibility,
        timer: updatedBanner.timer,
        link: updatedBanner.link,
        imageUrl: updatedBanner.imageUrl,
      };

      await updateBanner(String(updatedBanner.id), bannerData);
      setBanners((prev) =>
        prev.map((banner) =>
          banner.id === updatedBanner.id ? updatedBanner : banner
        )
      );
      setSelectedBanner(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update banner", error);
    }
  };

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await getBanners();
        setBanners(data);
      } catch (error) {
        console.error("Failed to fetch banners", error);
      }
    };
    fetchBanners();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Internal Dashboard
      </h2>
      <div className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="cursor-pointer p-4 bg-gray-100 rounded-lg shadow-md"
              onClick={() => handleBannerSelect(banner)}
            >
              <img
                src={`${import.meta.env.VITE_BACKEND}/${banner.imageUrl}`}
                alt={banner.description}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-red-500 mt-2">
                {banner.description}
              </h3>
            </div>
          ))}
        </div>
        {isEditing && selectedBanner && (
          <BannerForm banner={selectedBanner} onUpdate={handleBannerUpdate} />
        )}
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Upload New Banner
        </h2>
        <BannerForm onUpload={createBanner} />
      </div>
    </div>
  );
};

export default Dashboard;
