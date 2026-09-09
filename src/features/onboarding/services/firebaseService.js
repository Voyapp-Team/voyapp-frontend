"use client";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { getFirebaseAuth } from "@/src/firebase/config";

let recaptchaVerifier = null;

export const sendOtp = async (phoneNumber) => {
  try {
    const auth = getFirebaseAuth();

    if (!auth) {
      throw new Error("Firebase Auth is only available in the browser.");
    }

    if (!recaptchaVerifier) {
      recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );

      await recaptchaVerifier.render();
    }

    return await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier
    );
  } catch (error) {
    console.error("Firebase sendOtp error:", error);
    throw error;
  }
};

export const verifyOtp = async (confirmationResult, otp) => {
  try {
    const result = await confirmationResult.confirm(otp);

    return result.user;
  } catch (error) {
    console.error("Firebase verifyOtp error:", error);
    throw error;
  }
};

export const getIdToken = async (firebaseUser) => {
  try {
    return await firebaseUser.getIdToken();
  } catch (error) {
    console.error("Firebase getIdToken error:", error);
    throw error;
  }
};