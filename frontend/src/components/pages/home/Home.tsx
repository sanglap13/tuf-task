import React, { useEffect, useState } from "react";
import { IBanner } from "../../../@types/hero.types";

import Hero from "./hero/Hero";
import Highlights from "./highlights/Highlights";
import Popular from "./popular/Popular";
import { getBanners } from "../../../utils/api/api";
import { Loader } from "../../shared";

const Home: React.FC = () => {
  const [, setBanners] = useState<IBanner[]>([]);
  const [visibleBanners, setVisibleBanners] = useState<IBanner[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadBanners = async () => {
    try {
      const data = await getBanners();
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

  if (isLoading)
    return (
      <div className="text-center text-lg">
        <Loader />
      </div>
    );

  return (
    <div>
      <Hero
        visibleBanners={visibleBanners}
        timer={timer}
        currentIndex={currentIndex}
      />
      <Highlights />
      <Popular />
    </div>
  );
};

export default Home;
