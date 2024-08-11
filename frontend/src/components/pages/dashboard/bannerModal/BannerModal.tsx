import React from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const BannerModal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default BannerModal;
