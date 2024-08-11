import React from "react";
import BannerForm from "./bannerForm/BannerForm";

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Upload New Banner</h2>
      <BannerForm />
    </div>
  );
};

export default Dashboard;
