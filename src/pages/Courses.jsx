import React from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  const courseList = [
    {
      title: "React + TypeScript Bootcamp",
      features: [
        "Master TypeScript with React",
        "Strongly typed components",
        "Project-based learning",
        "Free updates",
      ],
    },
    {
      title: "React Native Essentials",
      features: [
        "Build cross-platform mobile apps",
        "iOS & Android support",
        "Camera, GPS, Push Notifications",
        "Expo & CLI setup",
      ],
    },
    {
      title: "Redux Toolkit Crash Course",
      features: [
        "Modern Redux with Redux Toolkit",
        "Slice, store, thunk, devtools",
        "Connect with APIs",
        "Structured state management",
      ],
    },
    {
      title: "React + Tailwind UI Design",
      features: [
        "Responsive UI with Tailwind CSS",
        "Design systems and themes",
        "Landing page templates",
        "Dark mode support",
      ],
    },
    {
      title: "React with Node.js & MongoDB",
      features: [
        "Full-stack MERN project",
        "CRUD operations",
        "JWT Auth & protected routes",
        "Deployed on Render/Netlify",
      ],
    },
    {
      title: "React Hooks Deep Dive",
      features: [
        "useState, useEffect, useRef, useReducer",
        "Custom Hooks",
        "Hook rules & patterns",
        "Refactoring class to hooks",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
        Explore More React Courses
      </h1>
      <p className="text-gray-700 text-lg mb-10 leading-relaxed">
        Expand your frontend development skills with these focused and practical React courses.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border text-left flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{course.title}</h2>
              <ul className="text-gray-600 list-disc list-inside mb-6 text-sm space-y-1">
                {course.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
            </div>
            <div className="text-center mt-auto">
              <button
                onClick={() => navigate("/checkout", { state: { course } })}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-md transition duration-300 w-full"
              >
                Buy Now for ₹499
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
