import React from "react";
import { IHeroProps } from "../../../../@types/hero.types";

const Hero: React.FC<IHeroProps> = ({
  visibleBanners,
  timer,
  currentIndex,
}) => {
  const { imageUrl, description } = visibleBanners[currentIndex] || {};

  return (
    <div className="hero-container">
      {visibleBanners.length > 0 && (
        <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden">
          {imageUrl && (
            <a
              href={visibleBanners[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={imageUrl}
                alt={description}
                className="w-full h-full object-cover"
              />
            </a>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white flex justify-between items-center">
            <p className="text-xl">{description}</p>
            <div className="text-2xl">
              {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(
                2,
                "0"
              )}`}
            </div>
          </div>
        </div>
      )}

      <div className="py-8 text-center bg-red-100">
        <h1 className="text-4xl font-bold text-red-700">
          Master Data Structures and Algorithms
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Join our comprehensive DSA course platform designed to boost your
          coding skills and land your dream job.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
