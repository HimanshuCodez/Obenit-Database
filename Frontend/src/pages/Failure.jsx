import React from 'react';
import { Link } from 'react-router-dom';

export default function Failure() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white p-10 rounded-full shadow-lg">
        <svg
          className="w-24 h-24 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mt-8">Payment Failed</h1>
      <p className="text-gray-600 mt-2">
        Unfortunately, we were unable to process your payment.
      </p>
      <Link
        to="/pricing"
        className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
      >
        Try Again
      </Link>
    </div>
  );
}
