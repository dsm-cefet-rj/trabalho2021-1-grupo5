import { string, object, number, setLocale } from "yup";
import { ptForm } from "yup-locale-pt";

setLocale(ptForm);
const numericMsg = "O campo deve ser um número.";
const menorQueUnTotais = "O campo deve ser menor ou igual a unidades totais";

export let productSchema = object().shape({
  name: string().required(),
  price: number().required(),
  description: string().min(5).required(),
  category: string().required(),
  idSeller: string().required(),
});
