import React from "react";
import { ICourseCardProps } from "../../../@types/home.types";

const CourseCard: React.FC<ICourseCardProps> = ({
  title,
  description,
  color = "text-red-500",
}) => {
  return (
    <div className="course-card px-6 py-12 bg-gray-100 rounded-lg shadow-md">
      <h3 className={`text-xl font-semibold ${color}`}>{title}</h3>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  );
};

export default CourseCard;
