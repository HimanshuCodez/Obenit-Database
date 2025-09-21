import {create} from 'zustand';
import api from '../api';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,

  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (token) {
      set({ isAuthenticated: true, token });
      useAuthStore.getState().getMe();
    }
  },

  getMe: async () => {
    try {
      const response = await api.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.data) {
        set({ user: response.data });
      }
    } catch (error) {
      console.error('Error fetching user', error);
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
        set({ loading: false, isAuthenticated: true, token: response.data.token });
        useAuthStore.getState().getMe();
        return true;
      }
    } catch (error) {
      set({ loading: false, error: error.response?.data || 'Error logging in' });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ isAuthenticated: false, user: null, token: null });
  },
}));

export default useAuthStore;
