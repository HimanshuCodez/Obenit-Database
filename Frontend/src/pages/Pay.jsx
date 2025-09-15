import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Pay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || {};
  const [hasDomain, setHasDomain] = useState('yes');
  const [totalAmount, setTotalAmount] = useState(0);
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    if (plan) {
      const basePrice = parseFloat(plan.price.replace(/[^0-9.-]+/g, ""));
      let finalPrice = basePrice;
      if (hasDomain === 'no') {
        finalPrice += 900;
      }
      setTotalAmount(finalPrice);
    }
  }, [plan, hasDomain]);

  const handlePayment = async () => {
    try {
      const { data: { key } } = await axios.get("https://obenit-database.onrender.com/api/getkey");
      
      const amountInPaise = totalAmount * 100;

      const { data: { order } } = await axios.post("https://obenit-database.onrender.com/api/payment/create-order", {
        amount: amountInPaise,
        currency: "INR",
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Essence Database",
        description: `Payment for ${plan.name}`,
        image: "https://example.com/your_logo.jpg",
        order_id: order.id,
        handler: function (response) {
          navigate("/success");
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response){
        navigate("/failure");
      });
      rzp1.open();
    } catch (error) {
      console.error("Payment Error:", error);
      navigate("/failure");
    }
  };

  if (!plan) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">No plan selected</h1>
        <button
          onClick={() => navigate('/pricing')}
          className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Go to Pricing
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="px-8 py-6 bg-indigo-600 text-white">
            <h1 className="text-3xl font-bold">Review Your Order</h1>
            <p className="text-indigo-200 mt-1">
              You're one step away from unlocking amazing features.
            </p>
          </div>

          <div className="p-8">
            <div className="border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Selected Plan: <span className="text-indigo-600">{plan.name}</span>
              </h2>
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-4xl font-extrabold text-gray-900">
                ₹{totalAmount.toLocaleString('en-IN')}
                </span>
                <span className="text-lg text-gray-500">/Year</span>
              </div>

              <div className="space-y-3 mb-6">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                  Features included:
                </h3>
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Do you have a domain?
                </h3>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="domain"
                      value="yes"
                      checked={hasDomain === 'yes'}
                      onChange={() => setHasDomain('yes')}
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="domain"
                      value="no"
                      checked={hasDomain === 'no'}
                      onChange={() => setHasDomain('no')}
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">No (+₹900)</span>
                  </label>
                </div>
                {hasDomain === 'yes' && (
                  <div className="mt-4">
                    <label htmlFor="domainName" className="block text-sm font-medium text-gray-700">
                      Enter your domain name
                    </label>
                    <input
                      type="text"
                      id="domainName"
                      value={domainName}
                      onChange={(e) => setDomainName(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="example.com"
                    />
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-500">{plan.renew}</p>
            </div>

            <div className="text-center">
              <button
                onClick={handlePayment}
                className="w-full max-w-xs py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Continue to Payment
              </button>
              <p className="mt-4 text-xs text-gray-400">
                By continuing, you agree to our Terms of Service.
              </p>
            </div>
          </div>

          <div className="px-8 py-4 bg-gray-50 border-t">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a5 5 0 00-5 5v2H3a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-2-2h-2V7a5 5 0 00-5-5zm-3 7V7a3 3 0 016 0v2H7z" />
              </svg>
              <p className="text-sm text-gray-600">
                Secure payment powered by Razorpay.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/pricing')}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            &larr; Change plan
          </button>
        </div>
      </div>
    </div>
  );
}