export const selectUser = (state) => state.auth.user;

export const selectAccessToken = (state) => state.auth.accessToken;

export const selectOnboardingToken = (state) => state.auth.onboardingToken;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;