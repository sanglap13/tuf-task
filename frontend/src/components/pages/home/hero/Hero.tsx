import React, { useEffect, useState } from "react";
import { IHeroProps } from "../../../../@types/hero.types";

const Hero: React.FC<IHeroProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(
    banners.length > 0 ? banners[0].timer : 0
  );

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (banners.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
      setTimer(banners[(currentIndex + 1) % banners.length]?.timer || 0);
    }
  }, [timer, currentIndex, banners]);

  if (banners.length === 0)
    return <div className="text-center text-lg">No Banner Available</div>;

  const { imageUrl, description } = banners[currentIndex] || {};

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

export default Hero;
