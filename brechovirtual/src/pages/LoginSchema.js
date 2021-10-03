import { string, object, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);
export let productSchema = object().shape({
  username: string().email().required(),
  password: string().min(6).max(9).required(),
});
