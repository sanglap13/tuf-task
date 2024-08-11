import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className=" text-red-500 p-4 border-b-2 border-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">TakeUForward</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/banners" className="hover:underline">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
