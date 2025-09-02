import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/Footer";

const CustomerStoriesPage = () => {
  const stories = [
    {
      name: "TechNova Inc.",
      story:
        "Obenit Database helped us cut integration time by 70%. Our teams now move faster than ever!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "TechNova Inc.",
    },
    {
      name: "GlobalMart",
      story:
        "With IntegrationFlow, we improved our ROI by 3x within just 6 months of deployment.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "GlobalMart",
    },
    {
      name: "Skyline Systems",
      story:
        "99.9% uptime is not just a promise – it’s our daily reality now thanks to Obenit.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      company: "Skyline Systems",
    },
    {
      name: "FinCore Solutions",
      story:
        "We transformed customer experience and streamlined processes across 12 countries.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      company: "FinCore Solutions",
    },
  ];

  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Real Success Stories from{" "}
                  <span className="text-primary">Obenit Database</span>
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                  Discover how leading enterprises transformed their integration
                  challenges into competitive advantages with IntegrationFlow.
                  Technical validation meets business impact.
                </p>
              </div>

              {/* Impact Metrics */}
              <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-subtle">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <p className="text-text-secondary">Enterprise Customers</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-subtle">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    85%
                  </div>
                  <p className="text-text-secondary">Faster Deployment</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-subtle">
                  <div className="text-3xl font-bold text-accent mb-2">
                    300%
                  </div>
                  <p className="text-text-secondary">Average ROI</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-subtle">
                  <div className="text-3xl font-bold text-primary mb-2">
                    99.9%
                  </div>
                  <p className="text-text-secondary">Uptime SLA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Stories Slider */}
        <section id="stories" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Inspiring success stories from businesses worldwide
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {stories.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold text-lg">{story.name}</h3>
                      <p className="text-sm text-gray-500">{story.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed flex-grow">
                    "{story.story}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
         <Footer />
      </main>
    </Layout>
  );
};

export default CustomerStoriesPage;
