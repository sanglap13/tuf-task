import React from "react";
import { CourseCard } from "../../../shared";

const Popular: React.FC = () => {
  return (
    <section className="popular-courses py-24 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        <CourseCard
          title="Data Structures in Depth"
          description="Master data structures with comprehensive lessons and coding exercises."
        />
        <CourseCard
          title="Algorithms for Interviews"
          description="Prepare for technical interviews with our algorithms course."
        />
        <CourseCard
          title="Competitive Programming"
          description="Sharpen your skills with challenging problems and contests."
        />
      </div>
    </section>
  );
};

export default Popular;
