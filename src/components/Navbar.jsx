import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-md transition-all duration-300 font-medium ${
      pathname === path
        ? "bg-white text-blue-600 shadow"
        : "text-white hover:bg-white hover:text-blue-600"
    }`;

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl tracking-wide">
          CourseZone
        </Link>
        <div className="space-x-3">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link to="/Courses" className={linkClasses("/courses")}>
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
}

