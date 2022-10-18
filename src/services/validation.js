import * as Yup from 'yup';

export const privateClientSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required('Password is required').min(6, "Password should be greater than 6 characters"),
    terms: Yup.boolean().required("Please accept terms and conditions")
})

export const loginValidation = Yup.object({
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required"),
    password: Yup.string().required('Password is required')
})

export const changePasswordValidation = Yup.object({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

export const forgetPasswordValidation = Yup.object({
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required")
})

export const supplierValidationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    company_name: Yup.string().required("Company name is required"),
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required('Password is required').min(6, "Password should be greater than 6 characters"),
    terms: Yup.boolean().required("Please accept terms and conditions")
})