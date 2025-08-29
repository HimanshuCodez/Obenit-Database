import { useEffect } from "react";

export default function Pricing() {
  useEffect(() => {
    // Floating shapes effect
    const handleMouseMove = (e) => {
      const shapes = document.querySelectorAll(".shape");
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const xMove = (x - 0.5) * speed * 20;
        const yMove = (y - 0.5) * speed * 20;
        shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const plans = [
    {
      name: "KVM 1",
      discount: "60% OFF",
      price: "₹399",
      renew: "Renews at ₹739.00/mo for 2 years. Cancel anytime.",
      features: ["1 vCPU core", "4 GB RAM", "50 GB NVMe disk", "4 TB bandwidth"],
    },
    {
      name: "KVM 2",
      discount: "66% OFF",
      extra: "Best deal - Limited time only",
      price: "₹549",
      renew: "Renews at ₹999.00/mo for 2 years. Cancel anytime.",
      features: [
        "2 vCPU cores",
        "8 GB RAM",
        "100 GB NVMe disk",
        "8 TB bandwidth",
      ],
    },
    {
      name: "KVM 4",
      discount: "71% OFF",
      price: "₹749",
      renew: "Renews at ₹1,999.00/mo for 2 years. Cancel anytime.",
      features: [
        "4 vCPU cores",
        "16 GB RAM",
        "200 GB NVMe disk",
        "16 TB bandwidth",
      ],
    },
    {
      name: "KVM 8",
      discount: "70% OFF",
      price: "₹1,499",
      renew: "Renews at ₹3,999.00/mo for 2 years. Cancel anytime.",
      features: [
        "8 vCPU cores",
        "32 GB RAM",
        "400 GB NVMe disk",
        "32 TB bandwidth",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600 py-10">
      {/* floating shapes */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="shape absolute w-20 h-20 top-1/5 left-10 bg-white/10 rounded-full" />
        <div className="shape absolute w-32 h-32 top-3/5 right-20 bg-white/10 rounded-full" />
        <div className="shape absolute w-16 h-16 bottom-1/3 left-20 bg-white/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Essence Database
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mt-4">
            Powerful, scalable database solutions with enterprise-grade
            performance at unbeatable prices
          </p>
        </div>

        {/* pricing grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl relative"
            >
              {plan.extra && (
                <div className="absolute -top-3 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-yellow-400 to-orange-300 text-black shadow">
                  {plan.extra}
                </div>
              )}
              <div className="mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold shadow">
                {plan.discount}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
              <div className="text-4xl font-extrabold text-indigo-500 mt-2">
                {plan.price}
                <span className="text-base text-gray-500 font-medium">/mo</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                {plan.renew}
              </p>

              <div className="mt-6 w-full">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-xs font-bold mr-2">
                      ✓
                    </div>
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* features */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-10 mb-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Every plan has everything you need and more
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "AMD EPYC processors",
              "NVMe SSD storage",
              "Data centers worldwide",
              "Free weekly backups",
              "Firewall management",
             
           
              "AI assistant powered by MCP",
             
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center bg-indigo-50/50 hover:bg-indigo-100 rounded-lg px-4 py-3 transition"
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-xs font-bold mr-2">
                  ✓
                </div>
                <span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* additional info */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Enjoy all this. At no extra cost.
          </h3>
          <p className="text-gray-600 mb-2">
            <span className="text-indigo-500 font-semibold">
              Free automatic weekly backups
            </span>{" "}
            • Optimized performance • Linux operating systems
          </p>
          <p className="text-gray-600 mb-2">
            <span className="text-indigo-500 font-semibold">
              More power and more control
            </span>{" "}
            • 30-day money-back guarantee • 24/7 customer support
          </p>
          <p className="text-gray-400 text-xs mt-4">
            All plans are paid upfront. The monthly rate reflects the total plan
            price divided by the number of months in your plan.
          </p>
        </div>
      </div>
    </div>
  );
}
