export default function ValidateInput(data) {
  const NewErrors = {};

  if (!data.firstName || data.firstName.trim() === "") {
    NewErrors.firstName = "First name is required";
  }
  return NewErrors;
}
