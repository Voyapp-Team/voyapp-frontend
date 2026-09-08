import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Session
  user: null,

  // Tokens
  onboardingToken: null,
  accessToken: null,
  refreshToken: null,

  // Status
  isAuthenticated: false,
  onboardingCompleted: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setOnboardingSession(state, action) {
      const { onboardingToken, user } = action.payload;

      state.onboardingToken = onboardingToken;
      state.user = user;
    },

    updateUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },

    completeAuthentication(state, action) {
      const { accessToken, refreshToken, user } = action.payload;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user;

      state.onboardingToken = null;

      state.isAuthenticated = true;
      state.onboardingCompleted = true;
    },

    clearAuth(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setOnboardingSession,
  updateUser,
  completeAuthentication,
  clearAuth,
} = authSlice.actions;

export default authSlice.reducer;