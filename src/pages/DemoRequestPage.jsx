import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const DemoRequestPage = () => {
  return (
    <Layout>
      <main className="pt-24">
        {/* Hero Section */}
        <section
          id="demo-hero"
          className="py-20 px-6 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                See IntegrationFlow in Action
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
                Schedule a personalized demo tailored to your technical
                requirements and integration challenges. Choose between a
                technical deep-dive or an executive overview session.
              </p>
            </div>

            {/* Demo Type Selection */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                id="technical-btn"
                className="px-6 py-3 rounded-xl bg-white text-purple-700 font-semibold shadow-lg hover:bg-purple-50 transition"
              >
                Technical Deep-Dive
                <svg
                  className="inline-block w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </button>
              <button
                id="executive-btn"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                Executive Overview
                <svg
                  className="inline-block w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
     {/* Main Content */}
<section
  id="demo-content"
  className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50"
>
  <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-10 flex items-center justify-center">
    <div className="w-full">
      {/* Demo Request Form */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
            Request Your Demo
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto">
            Tell us about your integration needs and we'll customize the demo to
            show you exactly how IntegrationFlow can solve your challenges.
          </p>
        </div>

        {/* Progressive Disclosure Form */}
        <form id="demo-form" className="space-y-6">
          {/* Basic Information */}
          <div id="basic-info" className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-700">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="form-input w-full"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="form-input w-full"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input w-full"
                placeholder="john.smith@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2"
              >
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="form-input w-full"
                placeholder="Acme Corporation"
              />
            </div>
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium mb-2"
              >
                Job Title *
              </label>
              <select
                id="jobTitle"
                name="jobTitle"
                required
                className="form-input w-full"
              >
                <option value="">Select your role</option>
                <option value="cto">CTO / VP Engineering</option>
                <option value="architect">Integration Architect</option>
                <option value="devops">DevOps Engineer</option>
                <option value="developer">Software Developer</option>
                <option value="manager">Engineering Manager</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="button"
              className="btn-primary w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Continue to Technical Details
              <svg
                className="inline-block w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>



      </main>
    </Layout>
  );
};

export default DemoRequestPage;
