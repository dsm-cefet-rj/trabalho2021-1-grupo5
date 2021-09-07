import {string, object, email, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

export let messageSchema = object().shape(
    {
        response: string().max(150).min(3).required()
    }
)

export let sellerSchema = object().shape(
    {
        name: string().min(6).max(32).required(),
        email: string().email().required(),
        adress: string().min(9).required(),
        document: number().integer().required(),
        
    }
)