"use client"

import api from "@/src/api/axios";

export const firebaseVerify = async (idToken) => {
  const response = await api.post( "/auth/firebase-verify",{"firebase_token":idToken});
  console.log("Backend verifi: ", response.data)
  return response.data;
};

export const submitPersonalInfo = async (personalInfo) => {
  const response = await api.post("/auth/personal-info", personalInfo);

  return response.data;
};

export const submitUserType = async ( userType) => {
  console.log("Sending:", {
    user_type: userType,
  });

  const response = await api.post("/auth/user-type",{"user_type": userType,});

  return response.data;
};

export const checkUsername = async (username) => {
  const response = await api.get(`auth/username/check`, {
    params: {
      username,
    },
  });

  return response.data;
};

export const completeUsername = async (username) => {
  const response = await api.post(
    "/username/done",
    {
      username,
    }
  );

  return response.data;
};

export const onboardingService = {
  firebaseVerify,
  submitPersonalInfo,
  submitUserType,
  checkUsername,
  completeUsername
};

export default onboardingService;