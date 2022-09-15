import * as yup from "yup";

const requiredMessage = "Required";

export const validationLogin = yup.object({
  email: yup.string().email("Email not valid").required(requiredMessage),
  password: yup.string().min(4, "Password not valid").required(requiredMessage),
});

export default validationLogin;
