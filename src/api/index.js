
import axios from "axios"
import * as Yup from "yup"
export const instants = axios.create({
        baseURL : 'http://localhost:3000'
})
   
export const signupSchema = Yup.object({
    email: Yup.string().required().trim(),
    password: Yup.string().required().trim(),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")]).required().trim(),
})
export const signinSchema = Yup.object({
    email: Yup.string().required().trim(),
    password: Yup.string().required().trim(),
})

export const addSchema = Yup.object({
    name: Yup.string().required().trim(),
    price: Yup.number().required(),
    description: Yup.string().required().trim(),
    image: Yup.string().required().trim(),
})

export const updateSchema = Yup.object({
    name: Yup.string().required().trim(),
    price: Yup.number().required(),
    description: Yup.string().required().trim(),
    image: Yup.string().required().trim(),
})