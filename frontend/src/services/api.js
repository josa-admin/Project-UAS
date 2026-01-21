import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getProfile: () => api.get('/auth/profile'),
};

export const beasiswaAPI = {
  getAll: (params) => api.get('/beasiswa', { params }),
  getById: (id) => api.get(`/beasiswa/${id}`),
  create: (data) => api.post('/beasiswa', data),
  update: (id, data) => api.put(`/beasiswa/${id}`, data),
  delete: (id) => api.delete(`/beasiswa/${id}`),
  getCategories: () => api.get('/beasiswa/categories'),
};

export const notificationAPI = {
  getAll: () => api.get('/notifications'),
  markAsRead: (id) => api.put(`/notifications/${id}/read`),
  send: (data) => api.post('/notifications/send', data),
  getUnreadCount: () => api.get('/notifications/unread/count'),
};

export default api;
