import React from "react";
import { motion } from "framer-motion";
import { Wrench, Clock, RefreshCcw } from "lucide-react";

const UnderMaintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white px-6 text-center">
      <motion.div
        initial={{ rotate: -5, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-6 bg-indigo-600 rounded-full shadow-2xl mb-6"
        >
          <Wrench className="w-16 h-16 text-white" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          We're Under Maintenance
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
          Our website is getting a fresh upgrade to serve you better.  
          Please check back soon — we’ll be back online in no time!
        </p>

        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center gap-3 text-indigo-400 font-semibold"
        >
          <RefreshCcw className="w-5 h-5" />
          Refresh in a while
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex items-center gap-2 text-gray-400"
      >
        <Clock className="w-4 h-4" />
        <p className="text-sm">Estimated downtime: Soon</p>
      </motion.div>
    </div>
  );
};

export default UnderMaintenance;
