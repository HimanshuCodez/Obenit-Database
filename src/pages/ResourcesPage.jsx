import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const ResourcesPage = () => {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                            Integration 
                            <span className="text-primary">Knowledge Hub</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                            Expert resources, best practices, and technical guides to accelerate your enterprise integration projects. Learn from industry leaders and proven methodologies.
                        </p>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input type="text" placeholder="Search resources, guides, tutorials..." className="form-input pl-12 pr-4 py-4 text-lg rounded-xl shadow-prominent" />
                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
};

export default ResourcesPage;
