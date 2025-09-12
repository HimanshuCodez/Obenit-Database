import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-10 rounded-full shadow-lg">
        <svg
          className="w-24 h-24 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mt-8">Payment Successful!</h1>
      <p className="text-gray-600 mt-2">
        Thank you for your purchase. Your order is being processed.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
