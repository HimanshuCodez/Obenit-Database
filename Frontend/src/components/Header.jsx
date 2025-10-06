import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Database, ArrowRight, User, Settings, LogOut, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef = useRef(null);
  const { isAuthenticated, logout, loading } = useAuthStore();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Define your nav items with links
  const navItems = [
    { name: "Pricing", path: "/pricing" },
    // { name: "Resources", path: "/resources" },
    { name: "Support", path: "/contact" },
    { name: "Your Plan", path: "/Plany" },
    { name: "About", path: "/about" },
  ];

  const handleLogout = () => {
    logout();
    setOpenProfile(false);
  };

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
            Obenit
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
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </motion.div>
          ))}
        </nav>

        {/* Right Actions (CTA + Profile) */}
        <div className="flex items-center gap-4 relative">
          {loading ? (
            <div>Loading...</div> // Or a skeleton loader
          ) : isAuthenticated ? (
            <>
              {/* CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/pricing"
                  className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Integrate Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  <User className="w-6 h-6 text-gray-700" />
                </button>

                {openProfile && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50"
                  >
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <User className="w-4 h-4" /> Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="w-4 h-4" /> Settings
                    </Link>
                    <Link
                      to="/help"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <HelpCircle className="w-4 h-4" /> Help
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </motion.div>
                )}
              </div>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className="text-gray-700 font-medium hover:text-blue-700 transition-colors">
                Login
              </Link>
              <Link to="/signup" className="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>

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
            {loading ? (
              <div>Loading...</div> // Or a skeleton loader
            ) : isAuthenticated ? (
              <Link
                to="/pricing"
                className="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                onClick={toggleMenu}
              >
                Browse Catalog
              </Link>
            ) : (
              <div className="flex flex-col space-y-5">
                <Link to="/login" className="text-gray-700 font-medium hover:text-blue-700 transition-colors" onClick={toggleMenu}>
                  Login
                </Link>
                <Link to="/signup" className="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition" onClick={toggleMenu}>
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
