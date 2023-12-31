import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .required("Informe o seu e-mail.")
    .email("Formato de e-mail inválido."),
  password: yup
    .string()
    .min(6, "Senha precisa conter o mínimo de 6 dígitos")
    .required("Digite a sua senha."),
});

export const signUpSchema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  email: yup
    .string()
    .required("Informe o seu e-mail.")
    .email("Formato de e-mail inválido."),
  password: yup
    .string()
    .min(6, "Senha precisa conter o mínimo de 6 dígitos")
    .required("Digite a sua senha."),
  confirm_password: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
});
