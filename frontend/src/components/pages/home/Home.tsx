import React, { useEffect, useState } from "react";
import { getBanner } from "../../../utils/api/api";
import { IBanner } from "../../../@types/hero.types";
import Hero from "./hero/Hero";

const Home: React.FC = () => {
  const [banners, setBanners] = useState<IBanner[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadBanners = async () => {
    try {
      const data = await getBanner();
      console.log(data, "data");

      // Filter banners based on visibility
      const visible = data.filter((banner: IBanner) => banner.visibility);

      setBanners(visible);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to load banners", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBanners();
  }, []);

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div>
      <Hero banners={banners} />
    </div>
  );
};

export default Home;
