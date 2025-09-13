import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import useAuthStore from './store/authStore';

// Check for auth token on app startup
useAuthStore.getState().checkAuth();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
