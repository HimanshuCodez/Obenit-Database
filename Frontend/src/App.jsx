import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CustomerStoriesPage from './pages/CustomerStoriesPage';
import DemoRequestPage from './pages/DemoRequestPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import Header from './components/Header';
import AboutPage from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Pay from './pages/Pay';
import Success from './pages/Success';
import Failure from './pages/Failure';
import useAuthStore from './store/authStore';
import ObenitAdminDashboard from './Admin/Dashboard';

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <Header />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/customer-stories" element={<CustomerStoriesPage />} />
        <Route path="/request-demo" element={<DemoRequestPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/Admin" element={<ObenitAdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
