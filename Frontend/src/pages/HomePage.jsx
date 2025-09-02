import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Download, CheckCircle, Database, Users, 
  Star, TrendingUp, Sparkles 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import CustomerStoriesPage from './CustomerStoriesPage';
import DemoRequestPage from './DemoRequestPage';
import { Link } from 'react-router-dom';

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('customer');

  const categories = {
    customer: {
      sample: `{
  "customers": [
    {
      "id": "CUST_001",
      "name": "John Smith",
      "email": "john.smith@email.com",
      "industry": "Technology"
    }
  ]
}`,
      stats: { records: "125,847", quality: "98.5%", updated: "August 2025", formats: "CSV, JSON, SQL" },
      price: 299, icon: Users
    },
    product: {
      sample: `{
  "products": [
    {
      "id": "PROD_001", 
      "name": "Wireless Headphones",
      "category": "Electronics",
      "price": 199.99
    }
  ]
}`,
      stats: { records: "89,432", quality: "97.2%", updated: "August 2025", formats: "CSV, JSON, XML" },
      price: 199, icon: Database
    },
    financial: {
      sample: `{
  "transactions": [
    {
      "id": "TXN_001",
      "amount": 5000.00,
      "currency": "USD",
      "type": "credit"
    }
  ]
}`,
      stats: { records: "234,156", quality: "99.1%", updated: "August 2025", formats: "CSV, JSON, SQL" },
      price: 499, icon: TrendingUp
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-purple-300/20 rounded-full blur-3xl right-0 bottom-0"
          animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
{/* header */}
<Header/>      

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
               
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                  Premium Databases
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Powering Your Success
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg mt-6">
                  Discover curated, enterprise-grade databases designed to fuel your business growth with precision and reliability.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to={"/pricing"}>
                <motion.button
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center">
                    Browse Databases
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                </Link>
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
                >
                  Request Sample Data
                  <Download className="inline-block w-5 h-5 ml-2" />
                </motion.button>
              </motion.div>
            </div>

        <motion.div
  className="relative flex justify-center"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
>
  <motion.div
    className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200 w-full max-w-4xl"
    whileHover={{
      scale: 1.02,
      boxShadow: "0 12px 30px rgba(0,0,0,0.08)"
    }}
  >
    <div className="space-y-10">
      {/* Icons + Connectors */}
      <div className="flex items-center justify-between">
        {[
          { icon: Users, label: "Customer Data" },
          { icon: Database, label: "Product Data" },
          { icon: TrendingUp, label: "Financial Data" }
        ].map((item, i) => (
          <React.Fragment key={item.label}>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm mt-3 font-semibold text-slate-700">
                {item.label}
              </p>
            </motion.div>

            {/* Connector */}
            {i < 2 && (
              <div className="flex-1 mx-6 hidden md:block">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative overflow-hidden">
                  <motion.div
                    className="h-full bg-white/70"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
        {[
          { value: "500K+", label: "Records" },
          { value: "50+", label: "Types" },
          { value: "24/7", label: "Support" }
        ].map((metric, i) => (
          <motion.div
            key={metric.value}
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4
              }}
            >
              {metric.value}
            </motion.div>
            <p className="text-sm text-slate-500 mt-1">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
</motion.div>


          </div>
        </div>
      </section>

      {/* Trust Strip */}
      

      {/* Benefits Section */}
      <AnimatedSection className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
              Why Choose Obenit Database?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlock unparalleled value with our premium database solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Curated Quality", desc: "Meticulously vetted datasets ensure accuracy, completeness, and compliance." },
              { icon: Star, title: "Instant Access", desc: "Download databases instantly in multiple formats tailored to your needs." },
              { icon: CheckCircle, title: "Expert Support", desc: "Dedicated data specialists provide personalized guidance for your business." }
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-blue-100/50 transition-all"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="text-center space-y-6">
                  <motion.div
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      
<DemoRequestPage/>
      {/* CTA Section */}
      <AnimatedSection className="py-24 px-6 bg-gradient-to-br from-blue-700 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-8 text-white tracking-tight">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of businesses leveraging our premium databases for unparalleled growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { value: "500K+", label: "Records per database" },
              { value: "90%", label: "Time saved" },
              { value: "$99+", label: "Starting price" }
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-4xl font-extrabold text-white mb-3">{stat.value}</div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/pricing"}><motion.button
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              View All Databases
              <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </motion.button></Link>
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Request Custom Dataset
            </motion.button>
          </div>
        </div>
      </AnimatedSection>
   <CustomerStoriesPage/>
    </div>
  );
};

export default HomePage;