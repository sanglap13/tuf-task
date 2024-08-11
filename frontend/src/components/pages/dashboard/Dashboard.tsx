import React, { useState } from "react";
import { uploadBanner } from "../../../utils/api/api";

const Dashboard: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [timer, setTimer] = useState<number>(6);
  const [visibility, setVisibility] = useState<boolean>(true);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("bannerImage", image);
    formData.append("description", description);
    formData.append("timer", timer.toString());
    formData.append("visibility", visibility.toString());

    setIsUploading(true);

    try {
      const response = await uploadBanner(formData);
      console.log("Banner uploaded:", response);
      alert("Banner uploaded successfully!");
    } catch (error) {
      console.error("Failed to upload banner", error);
      alert("Failed to upload banner");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Upload New Banner</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Banner Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Timer (seconds)
          </label>
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(Number(e.target.value))}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Visibility
          </label>
          <input
            type="checkbox"
            checked={visibility}
            onChange={(e) => setVisibility(e.target.checked)}
            className="mt-1"
          />
          <span className="ml-2">Visible</span>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload Banner"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
