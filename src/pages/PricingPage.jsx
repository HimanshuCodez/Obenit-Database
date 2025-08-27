import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const PricingPage = () => {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section id="pricing-hero" className="pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                            Investment that 
                            <span className="text-primary">pays for itself</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                            Transparent pricing designed for technical decision-makers. Calculate your ROI, compare features, and choose the plan that scales with your integration complexity.
                        </p>
                    </div>
                    
                    {/* ROI Highlight */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-prominent max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-secondary mb-2">300%</div>
                                <p className="text-text-secondary">Average ROI within 6 months</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                                <p className="text-text-secondary">Faster deployment vs custom builds</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent mb-2">60%</div>
                                <p className="text-text-secondary">Reduction in maintenance costs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
};

export default PricingPage;
