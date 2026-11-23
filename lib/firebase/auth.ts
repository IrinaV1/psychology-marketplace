import axios from 'axios';

import { User } from '@/types/user';

export const authApi = axios.create({
  baseURL: '/api',
  withCredentials: true,
});
// Registration
export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  const { data } = await authApi.post('/auth/register', {
    name,
    email,
    password,
  });

  return data.user;
};

// Login
export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const { data } = await authApi.post(`/auth/login`, {
    email,
    password,
  });

  return data.user;
};

// Logout
export const logoutUser = async (): Promise<void> => {
  await authApi.post('/auth/logout');
};

// User
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const { data } = await authApi.get('/auth/session');
    return data.user;
  } catch {
    return null;
  }
};
