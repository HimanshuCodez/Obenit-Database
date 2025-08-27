import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import ContactPage from './pages/ContactPage';
import CustomerStoriesPage from './pages/CustomerStoriesPage';
import DemoRequestPage from './pages/DemoRequestPage';

import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
     
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/customer-stories" element={<CustomerStoriesPage />} />
        <Route path="/request-demo" element={<DemoRequestPage />} />
   
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </Router>
  );
}

export default App;