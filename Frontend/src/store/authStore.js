
import { create } from 'zustand';
import { toast } from 'react-toastify';

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: true,
  error: null,
  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      // For now, just a placeholder. Replace with actual API call.
      console.log('Logging in with', { email, password });
      const user = { username: 'Test User', email };
      const token = 'dummy-token';
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      set({ user, token, loading: false });
      toast.success('Logged in successfully!');
      return true;
    } catch (error) {
      set({ error: 'Login failed', loading: false });
      toast.error('Login failed. Please check your credentials.');
      return false;
    }
  },
  signup: async (username, email, password) => {
    set({ loading: true, error: null });
    try {
      // For now, just a placeholder. Replace with actual API call.
      console.log('Signing up with', { username, email, password });
      const user = { username, email };
      const token = 'dummy-token';
      set({ user, token, loading: false });
      toast.success('Signed up successfully! Please log in.');
      return true;
    } catch (error) {
      set({ error: 'Signup failed', loading: false });
      toast.error('Signup failed. Please try again.');
      return false;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null, token: null });
    toast.info("You've been logged out.");
  },
  checkAuth: () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      set({ token, user });
    }
    set({ loading: false });
  },
}));

export default useAuthStore;
