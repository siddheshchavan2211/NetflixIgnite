export const CheckValidationname = (name) => {
  const nameValidation = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/.test(name); // Starts with capital letter and supports spaces
  if (!nameValidation) return "Invalid. Name must start with a capital letter.";
  return null;
};
export const CheckValidationemail = (email) => {
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailValidation) return "Please enter a valid email address.";

  return null;
};
export const CheckValidationpassword = (password) => {
  const passwordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(
      password
    );
  if (!passwordValidation) return "Please enter a valid Password ";
  return null;
};
