export default function kycInputValidation(data) {
  const newErrors = {};

  const accountNumRegex = /^[0-9]{10}$/;
  const bvnRegex = /^[0-9]{11}$/;
  const phoneRegex = /^\+?[0-9]\d{1,14}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

  if ("legal_name" in data) {
    if (!data.legal_name || data.legal_name.trim() === "") {
      newErrors.legal_name = "Legal name is required";
    }
  }

  if ("phone_number" in data) {
    if (!data.phone_number || data.phone_number.trim() === "") {
      newErrors.phone_number = "Phone number is required";
    } else if (!phoneRegex.test(data.phone_number)) {
      newErrors.phone_number = "Invalid phone number format";
    }
  }

  if ("date_of_birth" in data) {
    if (!data.date_of_birth || data.date_of_birth.trim() === "") {
      newErrors.date_of_birth = "Date of birth is required";
    }
  }

  if ("accountNumber" in data) {
    const accountNumber = data.accountNumber.trim();

    if (!accountNumber) {
      newErrors.acctNumInputError = " Enter an account number";
    } else if (!accountNumRegex.test(accountNumber)) {
      newErrors.acctNumInputError = "Invalid account number";
    }
  }

  if ("bvn" in data) {
    const bvn = data.bvn.trim();

    if (!bvn) {
      newErrors.bvnInputError = "Enter a bvn number";
    } else if (!bvnRegex.test(bvn)) {
      newErrors.bvnInputError = "Invalid bvn number";
    }
  }

  if ("user_email" in data) {
    if (!data.user_email || !data.user_email.trim() === "") {
      newErrors.user_email = "Email is Required";
    } else if (emailRegex.test(data.user_email)) {
      newErrors.user_email = "Invalid Email";
    }
  }

  return newErrors;
}
