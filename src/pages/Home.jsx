import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const topCourses = [
    {
      title: "React Mastery Course",
      features: [
        "10+ hours of video content",
        "Real-world projects",
        "Certificate of completion",
        "Lifetime access",
      ],
    },
    {
      title: "Advanced React Projects",
      features: [
        "Build 5 full-scale apps",
        "Custom hooks & context",
        "Reusable component design",
        "Deployable projects",
      ],
    },
    {
      title: "React + Firebase Bootcamp",
      features: [
        "User Auth with Firebase",
        "Cloud Firestore & Realtime DB",
        "Host & deploy React apps",
        "Live chat & ToDo apps",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Learn React the Right Way
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          Build powerful web apps with React by mastering components, hooks, routing, and state management.
        </p>
        <button
          onClick={() => navigate("/checkout", { state: { course: topCourses[0] } })}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-md transition duration-300"
        >
          Enroll Now for ₹499
        </button>
      </section>

      {/* Popular Courses Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          🔥 Popular Courses
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {topCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm p-6 flex flex-col justify-between transform hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Course
                  </span>
                  <span className="text-sm text-gray-400">⏱️ ~10 hrs</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {course.title}
                </h3>
                <ul className="text-gray-600 list-disc list-inside text-sm space-y-1 mb-6">
                  {course.features.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => navigate("/checkout", { state: { course } })}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition"
              >
                Buy Now – ₹499
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* View More Button */}
      <div className="text-center py-12">
        <button
          onClick={() => navigate("/courses")}
          className="bg-gray-100 hover:bg-gray-200 text-blue-700 font-medium px-6 py-3 rounded-md border transition duration-300"
        >
          View More Courses →
        </button>
      </div>
    </div>
  );
}
