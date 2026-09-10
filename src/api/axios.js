import axios from "axios";

import { store } from "@/src/store/store";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const state = store.getState();

    const onboardingToken = state.auth.onboardingToken;
    const accessToken = state.auth.accessToken;

    // Prefer access token if available
    const token = accessToken || onboardingToken;
     console.log("EMPTY token....:", token);
    if (token) {
      console.log("Using token....:", token);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;