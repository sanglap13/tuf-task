import React, { useState, useEffect } from "react";
import { IBannerFormProps } from "../../../../@types/dashboard.types";

const BannerForm: React.FC<IBannerFormProps> = ({
  banner,
  onUpload,
  onUpdate,
  onClose,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [timer, setTimer] = useState<number>(6);
  const [visibility, setVisibility] = useState<boolean>(true);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    if (banner) {
      setDescription(banner.description);
      setLink(banner.link || "");
      setTimer(banner.timer || 6);
      setVisibility(banner.visibility || true);
    }
  }, [banner]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!banner && !image) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    if (image) {
      formData.append("bannerImage", image);
    }
    formData.append("description", description);
    formData.append("link", link);
    formData.append("timer", timer.toString());
    formData.append("visibility", visibility.toString());
    if (banner) {
      if (banner.id) {
        formData.append("id", banner.id.toString());
      } else {
        alert("Banner ID is required for update");
        return;
      }
    }

    setIsUploading(true);

    try {
      if (banner) {
        if (image) {
          await (onUpload && onUpload(formData));
        } else {
          await (onUpdate &&
            onUpdate({
              ...banner,
              description,
              link,
              timer,
              visibility,
            }));
        }
      } else {
        await (onUpload && onUpload(formData));
      }
      alert("Banner saved successfully!");
      onClose();
    } catch (error) {
      console.error("Failed to save banner", error);
      alert("Failed to save banner");
    } finally {
      setIsUploading(false);
    }
  };

  return (
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
          disabled={!!banner && !image}
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
        <label className="block text-sm font-medium text-gray-700">Link</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
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
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          disabled={isUploading}
        >
          {isUploading
            ? "Saving..."
            : banner
            ? "Update Banner"
            : "Upload Banner"}
        </button>
      </div>
    </form>
  );
};

export default BannerForm;
