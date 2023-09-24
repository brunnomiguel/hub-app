import { Form } from "../../components/Forms/Container/Form";
import { useForm } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomButton } from "../../components/CustomButton";
import { signUpSchema } from "../../schemas";
import { ControlledInput } from "../../components/Forms/ControlledInput";
import { useState } from "react";
import { BoxIcon, PasswordViewController } from "./styles";

type SignUpData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const useSignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  return {
    control,
    handleSubmit,
    errors,
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
  };
};

export function SignUpForm() {
  const {
    control,
    errors,
    handleSubmit,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useSignUpForm();

  const handleSignIn = (data: SignUpData) => {
    console.log(data);
  };

  return (
    <Form>
      <ControlledInput
        name="name"
        icon="user"
        control={control}
        placeholder="Nome"
        error={errors.name}
      />

      <ControlledInput
        name="email"
        icon="mail"
        control={control}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />

      <PasswordViewController>
        <ControlledInput
          name="password"
          icon="lock"
          control={control}
          placeholder="Senha"
          secureTextEntry={showPassword}
          error={errors.password}
        />

        <BoxIcon onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Feather name="eye" color="#fff" size={24} />
          ) : (
            <Feather name="eye-off" color="#fff" size={24} />
          )}
        </BoxIcon>
      </PasswordViewController>

      <PasswordViewController>
        <ControlledInput
          name="confirm_password"
          icon="lock"
          control={control}
          placeholder="Confirmação de senha"
          secureTextEntry={showConfirmPassword}
          error={errors.confirm_password}
        />

        <BoxIcon onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword ? (
            <Feather name="eye" color="#fff" size={24} />
          ) : (
            <Feather name="eye-off" color="#fff" size={24} />
          )}
        </BoxIcon>
      </PasswordViewController>

      <CustomButton title="Cadastrar" onPress={handleSubmit(handleSignIn)} />
    </Form>
  );
}
