import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Database, ArrowBigRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Define your nav items with links
  const navItems = [
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },

    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/"
            className="flex items-center font-bold text-xl text-blue-700"
          >
            <Database className="w-7 h-7 mr-2 text-blue-600" />
            Essence Database
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <Link
                to={item.path}
                className="text-gray-700 font-medium transition-colors hover:text-blue-700"
              >
                {item.name}
              </Link>
              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </motion.div>
          ))}
        </nav>

        {/* CTA */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
  to="/catalog"
  className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
>
  Integrate Now
  <ArrowRight className="w-4 h-4" />
</Link>

        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 px-6 py-5"
        >
          <div className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 font-medium hover:text-blue-700 transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/pricing"
              className="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              onClick={toggleMenu}
            >
              Browse Catalog
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
