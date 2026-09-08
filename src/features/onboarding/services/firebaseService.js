import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "@/src/firebase/config";

let recaptchaVerifier = null;

export const sendOtp = async (phoneNumber) => {
  try {
    // Create the reCAPTCHA verifier only once
    if (!recaptchaVerifier) {
      recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );

      // Render the invisible reCAPTCHA
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






export const verifyOtp = async (
  confirmationResult,
  otp
) => {
  const result = await confirmationResult.confirm(otp);

  return result.user;
};

export const getIdToken = async (firebaseUser) => {
  return firebaseUser.getIdToken();
};