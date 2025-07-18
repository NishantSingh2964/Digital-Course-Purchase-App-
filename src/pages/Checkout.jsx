import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;

  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!course) {
      navigate("/"); // Redirect if accessed directly
    }
  }, [course, navigate]);

  const handlePayment = () => {
    setIsProcessing(true);

    // Simulate 2-second payment processing delay
    setTimeout(() => {
      navigate("/success", { state: { course } });
    }, 2000);
  };

  if (!course) return null;

  return (
    <div className="max-w-xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Checkout</h2>
      <p className="text-gray-700 mb-6 text-lg">
        You're purchasing <strong>{course.title}</strong> for <strong>₹499</strong>.
      </p>

      <div className="text-left bg-white border rounded-lg p-5 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Course Includes:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {course.features.map((item, idx) => (
            <li key={idx}>✔ {item}</li>
          ))}
        </ul>
      </div>

      {isProcessing ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-blue-600 font-medium text-lg">Processing payment...</p>
        </div>
      ) : (
        <button
          onClick={handlePayment}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-md transition duration-300"
        >
          Confirm & Pay ₹499
        </button>
      )}
    </div>
  );
}
