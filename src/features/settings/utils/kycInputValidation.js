export default function kycInputValidation(data) {
  const newErrors = {};

  const accountNumRegex = /^[0-9]{10}$/;
  const bvnRegex = /^[0-9]{11}$/;
  const phoneRegex = /^\+?[0-9]\d{1,14}$/;

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

  return newErrors;
}
