import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

export const api = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  params: {
    key: API_KEY,
  },
});
export const apiDatabase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
});
