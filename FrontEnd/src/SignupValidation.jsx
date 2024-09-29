export default function SignupValidation(values) {
  const errors = {};
  if (!values.username) {
      errors.username = "Username is required";
  }
  if (!values.email) {
      errors.email = "Email is required";
  }
  if (!values.password) {
      errors.password = "Password is required";
  }
  return errors;
}
