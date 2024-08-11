import React, { useEffect, useState } from "react";
import { getBanner } from "../../../utils/api/api";
import { IBanner } from "../../../@types/banner.types";

const Home: React.FC = () => {
  const [banners, setBanners] = useState<IBanner[]>([]);
  const [visibleBanners, setVisibleBanners] = useState<IBanner[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadBanners = async () => {
    try {
      const data = await getBanner();
      console.log(data, "data");

      // Filter banners based on visibility
      const visible = data.filter((banner: IBanner) => banner.visibility);

      setBanners(data);
      setVisibleBanners(visible);
      setIsLoading(false);
      setTimer(visible.length > 0 ? visible[0].timer : 0);
    } catch (error) {
      console.error("Failed to load banners", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBanners();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (visibleBanners.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % visibleBanners.length);
      setTimer(
        visibleBanners[(currentIndex + 1) % visibleBanners.length]?.timer || 0
      );
    }
  }, [timer, currentIndex, visibleBanners]);

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;

  if (visibleBanners.length === 0)
    return <div className="text-center text-lg">No Banner Available</div>;

  const { imageUrl, description } = visibleBanners[currentIndex] || {};

  return (
    <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden">
      {imageUrl && (
        <img
          src={`${import.meta.env.VITE_BACKEND}/${imageUrl}`}
          alt={description}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white flex justify-between items-center">
        <p className="text-xl">{description}</p>
        <div className="text-2xl">
          {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`}
        </div>
      </div>
    </div>
  );
};

export default Home;
