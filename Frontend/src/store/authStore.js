import {create} from 'zustand';
import api from '../api';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,

  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (token) {
      set({ isAuthenticated: true });
    }
  },

  signup: async (username, email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post('/auth/signup', { username, email, password });
      if (response.status === 201) {
        set({ loading: false });
        return true;
      }
    } catch (error) {
      set({ loading: false, error: error.response?.data || 'Error creating user' });
      return false;
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post('/auth/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        set({ loading: false, isAuthenticated: true });
        return true;
      }
    } catch (error) {
      set({ loading: false, error: error.response?.data || 'Error logging in' });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;
