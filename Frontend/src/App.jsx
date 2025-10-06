import React from 'react';
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
import ObenitAdminDashboard from './Admin/Dashboard';
import Content from './pages/Content';
import MachineDash from './pages/MachineDash';
import UnderMaintenance from './pages/Profile';
import Plany from './pages/Plany';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
        <Route path="/Profile" element={<UnderMaintenance />} />
        <Route path="/Settings" element={<UnderMaintenance/>} />
        <Route path="/success" element={<Success />} />
        <Route path="/content" element={<Content />} />
        <Route path="/machine-dash" element={<MachineDash />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/Plany" element={<Plany/>} />
        <Route path="/Admin" element={<ObenitAdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
