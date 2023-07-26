import * as yup from "yup";

export const formValidationSchema = yup.object().shape({
  shortenUrl: yup.string().required("Please enter valid url"),
});
