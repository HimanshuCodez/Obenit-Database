import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section id="contact-hero" className="pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
                        Connect with our 
                        <span className="text-primary">technical experts</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                        Get specialized support through multiple channels. Our technical team is ready to help with integrations, demos, partnerships, and technical questions.
                    </p>
                </div>

                {/* Response Time Commitments */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                        <div className="w-12 h-12 mx-auto bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Technical Support</h3>
                        <p className="text-text-secondary text-sm">&lt; 2 hours response</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                        <div className="w-12 h-12 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Live Chat</h3>
                        <p className="text-text-secondary text-sm">Instant during business hours</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                        <div className="w-12 h-12 mx-auto bg-accent-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Consultations</h3>
                        <p className="text-text-secondary text-sm">Same-day scheduling</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Smart Contact Routing */}
        <section id="contact-routing" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">How can we help you?</h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Choose your inquiry type to connect with the right specialist and get faster, more targeted assistance
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Technical Questions */}
                    <div className="card group cursor-pointer hover:border-primary transition-all duration-300">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Technical Questions</h3>
                            <p className="text-text-secondary text-sm">API documentation, integration architecture, troubleshooting</p>
                            <div className="text-xs text-primary font-medium">Connect with Integration Architects</div>
                        </div>
                    </div>

                    {/* Demo Requests */}
                    <div className="card group cursor-pointer hover:border-secondary transition-all duration-300">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-secondary-100 rounded-2xl flex items-center justify-center group-hover:bg-secondary-200 transition-colors">
                                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Demo Requests</h3>
                            <p className="text-text-secondary text-sm">Live platform demonstrations, proof of concepts, technical validation</p>
                            <div className="text-xs text-secondary font-medium">Connect with Solution Engineers</div>
                        </div>
                    </div>

                    {/* Partnership Inquiries */}
                    <div className="card group cursor-pointer hover:border-accent transition-all duration-300">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-accent-100 rounded-2xl flex items-center justify-center group-hover:bg-accent-200 transition-colors">
                                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Partnership Inquiries</h3>
                            <p className="text-text-secondary text-sm">Technology partnerships, integrations, channel partnerships</p>
                            <div className="text-xs text-accent font-medium">Connect with Partnership Team</div>
                        </div>
                    </div>

                    {/* Support Issues */}
                    <div className="card group cursor-pointer hover:border-warning transition-all duration-300">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Support Issues</h3>
                            <p className="text-text-secondary text-sm">Platform issues, billing questions, account management</p>
                            <div className="text-xs text-warning font-medium">Connect with Support Specialists</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
};

export default ContactPage;
