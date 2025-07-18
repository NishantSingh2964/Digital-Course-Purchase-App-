import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <div className="bg-green-100 border border-green-300 text-green-800 rounded-lg p-6 shadow-md">
        <h2 className="text-3xl font-bold mb-4">🎉 Payment Successful!</h2>
        <p className="text-lg mb-6">
          Thank you for purchasing the <strong>React Mastery Course</strong>.
        </p>
        <p className="text-gray-700 mb-6">
          You now have full access to all course materials. A confirmation email will be sent shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
