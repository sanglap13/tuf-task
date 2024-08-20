import React, { useState, useEffect } from "react";

const Loader: React.FC = () => {
  const [count, setCount] = useState(50);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [count]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-4xl font-bold text-red-600">{count}</div>
    </div>
  );
};

export default Loader;
