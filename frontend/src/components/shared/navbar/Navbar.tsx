import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className=" text-red-500 p-4 border-b-2 border-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <h1 className="text-2xl font-bold">TakeUForward</h1>
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/dashboard" className="hover:underline">
                Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
