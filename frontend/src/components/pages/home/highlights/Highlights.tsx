import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="course-highlights py-24 bg-gray-100 text-center ">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
      <div className="flex justify-center space-x-8 flex-col md:flex-row">
        <div className="md:w-1/3 mb-10">
          <h3 className="text-xl font-semibold">Expert Instructors</h3>
          <p className="mt-4 text-gray-700">
            Learn from industry experts with years of experience in coding and
            problem-solving.
          </p>
        </div>
        <div className="md:w-1/3 mb-10">
          <h3 className="text-xl font-semibold">Interactive Content</h3>
          <p className="mt-4 text-gray-700">
            Engage with hands-on exercises and real-world examples to solidify
            your learning.
          </p>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold">Job Assistance</h3>
          <p className="mt-4 text-gray-700">
            Get help with resume building, interview prep, and job placement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
