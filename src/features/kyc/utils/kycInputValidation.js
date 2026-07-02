export default function ValidateInput(data) {
  const NewErrors = {};

  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  if (!data.legal_name || data.legal_name.trim() === "") {
    NewErrors.legal_name = "Legal name is required";
  }
  if (!data.phone_number || data.phone_number.trim() === "") {
    NewErrors.phone_number = "Phone number is required";
  } else if (!phoneRegex.test(data.phone_number)) {
    NewErrors.phone_number = "Invalid phone number format";
  }
  if (!data.date_of_birth || data.date_of_birth.trim() === "") {
    NewErrors.date_of_birth = "Date of birth is required";
  }

  return NewErrors;
}
