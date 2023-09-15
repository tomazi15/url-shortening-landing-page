import * as yup from "yup";

export const formValidationSchema = yup.object().shape({
  userUrl: yup.string().required("Please enter valid url"),
});
