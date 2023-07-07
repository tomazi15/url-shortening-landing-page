import * as yup from "yup";

export const formValidationSchema = yup.object().shape({
  shortenUrl: yup.string().required("* please enter valid url"),
});
