import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="ext-red-500 p-4 text-center border-gray-400 border-t-2">
      <div className="container mx-auto">
        <p>&copy; 2024 Sanglap Mridha. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mr-4 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
